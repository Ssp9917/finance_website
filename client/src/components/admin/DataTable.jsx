import React, { useEffect, useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:6001/apply-user/getAllUser"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle step click
  const handleStepClick = (id, step) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item._id === id) {
          if (step === 1) {
            // Toggle step 1
            return {
              ...item,
              step1: item.step1 === "active" ? "deactive" : "active",
            };
          } else if (step === 2 && item.step1 === "active") {
            // Toggle step 2 only if step 1 is active
            return {
              ...item,
              step2: item.step2 === "active" ? "deactive" : "active",
            };
          } else if (step === 3 && item.step2 === "active") {
            // Toggle step 3 only if step 2 is active
            return {
              ...item,
              step3: item.step3 === "active" ? "deactive" : "active",
            };
          }
        }
        return item;
      })
    );
  };

  const handleView = (user) => {
    console.log(user)
    navigate(`/admin/profile/${user._id}/`)
  }

  // Determine if the second and third columns should be shown
  const isStep2Visible = data.some((item) => item.step1 === "active");
  const isStep3Visible = data.some((item) => item.step2 === "active");

  const columns = [
    {
      Header: "Name",
      accessor: "userId.name",
    },
    {
      Header: "Mobile",
      accessor: "userId.mobile",
    },
    {
      Header: "Father Name",
      accessor: "fatherName",
    },
    {
      Header: "DOB",
      accessor: "dob",
      Cell: ({ value }) => new Date(value).toLocaleDateString(),
    },
    {
      Header: "Employment Type",
      accessor: "employmentType",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Step 1",
      accessor: "step1",
      Cell: ({ row }) => (
        <button
          onClick={() => handleStepClick(row.original._id, 1)}
          className={`px-3 py-1 rounded ${
            row.original.step1 === "active"
              ? "bg-green-500 text-white"
              : "bg-gray-300"
          }`}
        >
          {row.original.step1 || "deactive"}
        </button>
      ),
    },
    // Conditionally render Step 2 column
    ...(isStep2Visible
      ? [
          {
            Header: "Step 2",
            accessor: "step2",
            Cell: ({ row }) => (
              <button
                onClick={() => handleStepClick(row.original._id, 2)}
                className={`px-3 py-1 rounded ${
                  row.original.step1 === "active" && row.original.step2 === "active"
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}
                disabled={row.original.step1 !== "active"}
              >
                {row.original.step2 || "deactive"}
              </button>
            ),
          },
        ]
      : []),
    // Conditionally render Step 3 column
    ...(isStep3Visible
      ? [
          {
            Header: "Step 3",
            accessor: "step3",
            Cell: ({ row }) => (
              <button
                onClick={() => handleStepClick(row.original._id, 3)}
                className={`px-3 py-1 rounded ${
                  row.original.step2 === "active" && row.original.step3 === "active"
                    ? "bg-green-500 text-white"
                    : "bg-gray-300"
                }`}
                disabled={row.original.step2 !== "active"}
              >
                {row.original.step3 || "deactive"}
              </button>
            ),
          },
        ]
      : []),
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleView(row.original)}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            View
          </button>
          <button
            onClick={() => handleDelete(row.original._id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const tableColumns = useMemo(() => columns, [isStep2Visible, isStep3Visible]);
  const tableData = useMemo(() => data, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    state: { pageIndex, pageSize },
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns: tableColumns,
      data: tableData,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleSearch = (e) => {
    const value = e.target.value || "";
    setGlobalFilter(value);
    setSearchInput(value);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="mb-4">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search..."
          className="p-2 border rounded"
        />
      </div>
      <table
        {...getTableProps()}
        className="w-full border-collapse border border-gray-200"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="border border-gray-200 p-2 cursor-pointer"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="border border-gray-200 p-2"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="ml-2 p-1 border rounded"
          >
            {[5, 10, 15].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="p-2 border rounded mr-2"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="p-2 border rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

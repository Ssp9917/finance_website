import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import axios from "../../config/axiosConfig";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { UserAuthContext } from "../../context/UserAuthProvider";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const {getApplyCardUser} = useContext(UserAuthContext)

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

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle step click
  const handleStepClick = async (id, step) => {
    const updatedItem = data.find((item) => item._id === id);

    if (updatedItem) {
      // Clone the current process to avoid mutating state directly
      const updatedProcess = [...updatedItem.process];

      // Set the current step to "active"
      updatedProcess[step - 1].status = "active";

      // Optionally deactivate previous steps if necessary
      for (let i = 0; i < step - 1; i++) {
        updatedProcess[i].status = "active"; // Ensure all previous steps are active
      }

      try {
        // Call the API to update the process with the new status
        await axios.put(`/apply-user/update-user/${id}`, {
          process: updatedProcess,
        });
        Swal.fire("Success", "User process updated successfully!", "success");
        getApplyCardUser()

        // Update local state to reflect changes immediately
        setData((prevData) =>
          prevData.map((item) =>
            item._id === id ? { ...item, process: updatedProcess } : item
          )
        );
      } catch (error) {
        console.error("Error updating process:", error);
      }
    }
  };

  const handleView = (user) => {
    navigate(`/admin/profile/${user._id}/`);
  };

  const handleDelete = async (id) => {
    // Confirm deletion with SweetAlert2
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
    });

    if (result.isConfirmed) {
      try {
        axios
          .delete(`/apply-user/delete-user/${id}`)
          .then((response) => {
            fetchData()
            Swal.fire({
              title: "Deleted!",
              text: "User deleted successfully.",
              icon: "success",
              confirmButtonText: "OK",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error("Failed to delete user:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the user.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

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
      Cell: ({ row }) => (
        <button
          onClick={() => handleStepClick(row.original._id, 1)}
          className={`px-3 py-1 rounded ${
            row.original.process[0].status === "active"
              ? "bg-green-500 text-white"
              : "bg-gray-300"
          }`}
        >
          {row.original.process[0].status || "deactive"}
        </button>
      ),
    },
    {
      Header: "Step 2",
      Cell: ({ row }) => (
        <button
          onClick={() => handleStepClick(row.original._id, 2)}
          className={`px-3 py-1 rounded ${
            row.original.process[1].status === "active"
              ? "bg-green-500 text-white"
              : "bg-gray-300"
          }`}
          disabled={row.original.process[0].status !== "active"}
        >
          {row.original.process[1].status || "deactive"}
        </button>
      ),
    },
    {
      Header: "Step 3",
      Cell: ({ row }) => (
        <button
          onClick={() => handleStepClick(row.original._id, 3)}
          className={`px-3 py-1 rounded ${
            row.original.process[2].status === "active"
              ? "bg-green-500 text-white"
              : "bg-gray-300"
          }`}
          disabled={row.original.process[1].status !== "active"}
        >
          {row.original.process[2].status || "deactive"}
        </button>
      ),
    },
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

  const tableColumns = useMemo(() => columns, [data]);
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
            className="mr-2 p-2 border rounded"
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

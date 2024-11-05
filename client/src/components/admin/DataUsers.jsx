import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import axios from "../../config/axiosConfig";
import { useNavigate } from "react-router-dom";

const DataUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:6001/user/getAllUser"
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

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Mobile",
      accessor: "mobile",
    },
    {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Income",
        accessor: "income",
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

export default DataUsers;

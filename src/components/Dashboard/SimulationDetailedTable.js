import React from "react";

import { useTable } from "react-table";

const SimulationDetailedTable = ({ data }) => {
  const simulationData = React.useMemo(
    () =>
      data.map((x) => ({
        col1: x[0],
        col2: x[1],
        col3: x[2],
        col4: x[3],
        col5: x[4],
        col6: x[5],
        col7: x[6],
      })),
    [data]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Trade No.",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Risk/Trade",
        accessor: "col2",
      },
      {
        Header: "W/L",
        accessor: "col3",
      },
      {
        Header: "W/L in %",
        accessor: "col4",
      },
      {
        Header: "W/L Amount",
        accessor: "col5",
      },
      {
        Header: "Drawdown",
        accessor: "col6",
      },
      {
        Header: "Equity",
        accessor: "col7",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: simulationData ? simulationData : [] });

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <div style={{ height: "400px", overflowY: "scroll" }}>
        <table className={"table-fixed"} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className={"py-4 font-normal"}
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className={"border border-gray-100 px-4"}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimulationDetailedTable;

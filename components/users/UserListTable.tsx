"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  SortingState,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  getFacetedUniqueValues,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

import { IUserTableRow } from "@/types";
import { useRouter } from "next/navigation";
import UserListTablePagination from "./UserListTablePagination";
import Filter from "@/components/react-table/Filter";
import clsx from "clsx";

interface IUserListTableProps {
  users: Pick<IUserTableRow, "userId" | "name" | "role">[];
}

const tableHeaderTitle: Record<keyof IUserTableRow, string> = {
  No: "No",
  userId: "아이디",
  name: "이름",
  role: "권한",
};

function UserListTable({ users }: IUserListTableProps) {
  const router = useRouter();

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "No",
      desc: false,
    }
  ]);

  const columnHeadersArray: Array<keyof IUserTableRow> = [
    "No",
    "userId",
    "name",
    "role",
  ];
  const columnHelper = createColumnHelper<IUserTableRow>();
  const columns = columnHeadersArray.map((columnName) =>
    columnHelper.accessor(columnName, {
      id: columnName,
      header: ({ column }) =>
        <button
          className={clsx(
            "pl-1 w-full flex gap-x-2 items-center cursor-pointer",
            { "w-10": columnName === "No" },
            { "w-20": columnName === "role" },
          )}
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {tableHeaderTitle[columnName]}
          <span className="text-[0.5rem]">
            {column.getIsSorted() === "asc" ? "▲" : "▼"}
          </span>
        </button>
    })
  );

  const data = useMemo(
    () => users.map((user, No) => ({ ...user, No: No + 1 })),
    [users]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="flex flex-col rounded-md overflow-hidden justify-between flex-1 shadow-md bg-base-100">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="bg-primary text-primary-content "
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={clsx(
                    header.column.getCanSort() && "cursor-pointer",
                    { "w-10": header.column.id === "No" },
                  )}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  {/* {header.column.getCanFilter() ? (
                    <div className="grid place-content-center items-center max-md:hidden">
                      <Filter column={header.column} />
                    </div>
                  ) : null} */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {users.length ? (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="cursor-pointer hover:bg-base-300"
                onClick={() =>
                  router.push(`/users/detail?userId=${row.original.userId}`)
                }
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={
                    clsx(
                      { "text-center": cell.column.id === "No" },
                    )
                  }>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columnHeadersArray.length} className="text-center">
                검색 결과가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <UserListTablePagination table={table} />
    </div>
  );
}

export default UserListTable;

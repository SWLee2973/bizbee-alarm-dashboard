"use client";

import React, { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useRouter } from "next/navigation";
import { IUserTableRow } from "@/types";
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
      header: () => tableHeaderTitle[columnName],
    })
  );

  const data = useMemo(
    () => users.map((user, No) => ({ ...user, No: No + 1 })),
    [users]
  );

  const table = useReactTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex flex-col rounded-md overflow-hidden justify-between flex-1 shadow-md">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="bg-primary text-primary-content"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
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
                  <td key={cell.id}>
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
      <div className="flex mb-20 justify-center">
        <div className="join rounded-md">
          {/* {table.getState().pagination.pageIndex + 1}
          {`[${table.getFilteredRowModel().rows.length}]`} */}
          <button
            className={clsx("join-item btn", {
              "btn-disable": table.getState().pagination.pageIndex === 0,
            })}
            onClick={() => table.setPageIndex(0)}
          >
            이전
          </button>
          <button
            className={clsx("join-item btn", {
              "btn-active": table.getState().pagination.pageIndex === 0,
            })}
            onClick={() => table.setPageIndex(0)}
          >
            1
          </button>
          <button
            className={clsx("join-item btn", {
              "btn-active": table.getState().pagination.pageIndex === 0,
            })}
            onClick={() => table.setPageIndex(0)}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserListTable;

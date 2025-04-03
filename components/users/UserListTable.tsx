"use client";

import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dayjs from "dayjs";

import { useRouter } from "next/navigation";
import { IUserTableRow } from "@/types";

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

  const table = useReactTable({
    data: users.map((user, No) => ({ ...user, No: No + 1 })),
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md overflow-hidden flex-1 border-[0.5px] border-base-100 shadow-md">
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
    </div>
  );
}

export default UserListTable;

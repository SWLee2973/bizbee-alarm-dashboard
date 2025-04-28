import { IUserTableRow } from '@/types'
import { Table } from '@tanstack/react-table'
import clsx from 'clsx'
import React from 'react'

interface IUserListTablePaginationProps {
  table: Table<IUserTableRow>
}

const COUNT_PER_PAGE = 10;

function UserListTablePagination({ table }: IUserListTablePaginationProps) {
  const pageCount = table.getPageCount();
  const pageIndex = table.getState().pagination.pageIndex;

  const startPage = Math.floor(pageIndex / COUNT_PER_PAGE) * COUNT_PER_PAGE;
  const endPage = Math.min(startPage + COUNT_PER_PAGE, pageCount);


  return (
    <div className="flex mb-20 justify-center">
      <div className="join rounded-md shadow-md">
        {/* {table.getState().pagination.pageIndex + 1}
          {`[${table.getFilteredRowModel().rows.length}]`} */}
        <button
          className={clsx("join-item btn", {
            "btn-disable": pageIndex === 0,
          })}
          onClick={() => table.previousPage()}
          disabled={pageIndex === 0}
        >
          이전
        </button>
        {Array.from({ length: endPage - startPage }, (_, i) => startPage + i).map((page) => (
          <button
            key={page}
            className={clsx("join-item btn", {
              "btn-primary": pageIndex === page,
            })}
            onClick={() => table.setPageIndex(page)}
          >
            {page + 1}
          </button>
        ))}
        <button
          className={clsx("join-item btn", {
            "btn-disabled": pageIndex === pageCount - 1,
          })}
          onClick={() => table.nextPage()}
          disabled={pageIndex === pageCount - 1}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default UserListTablePagination
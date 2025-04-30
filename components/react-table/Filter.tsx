import React from 'react'
import { Column } from '@tanstack/react-table'
import DebouncedInput from './DebouncedInput'

interface IFilterProps<T> {
  column: Column<T, unknown>;
}

function Filter<T>({ column }: IFilterProps<T>) {
  const columnFilterValue = column.getFilterValue();
  const sortedUniqueValues = Array.from(column.getFacetedUniqueValues().keys()).sort();

  return (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.map((value, i) => (
          <option value={value} key={`${i}-${column.id}`} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={value => column.setFilterValue(value)}
        placeholder="필터 검색"
        className="w-full"
        list={column.id + "list"}
      />
    </>
  )
}

export default Filter
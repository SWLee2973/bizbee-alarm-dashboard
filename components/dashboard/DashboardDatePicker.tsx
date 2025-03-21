"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import { DateRange, DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";

interface IDashboardDatePickerProps {
  dateRange: DateRange;
  onChange: (dateRange: DateRange) => void;
}

function DashboardDatePicker() {
  const [searchDate, setSearchDate] = useState<DateRange>({
    from: dayjs().subtract(1, "month").toDate(),
    to: dayjs().toDate(),
  });
  const [date, setDate] = useState<DateRange>({
    from: dayjs().subtract(1, "month").toDate(),
    to: dayjs().toDate(),
  });

  return (
    <div className="flex flex-1 items-center gap-x-2 justify-end">
      <div className="font-semibold">조회기간</div>
      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          className="input rounded-md border-transparent cursor-pointer bg-accent text-accent-content w-fit"
        >
          {date.from?.toLocaleDateString()} ~ {date.to?.toLocaleDateString()}
        </button>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md"
        >
          <DayPicker
            required
            locale={ko}
            captionLayout="dropdown"
            className="react-day-picker"
            mode="range"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardDatePicker;

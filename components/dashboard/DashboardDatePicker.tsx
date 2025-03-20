"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import { DateRange, DayPicker } from "react-day-picker";
import { ko } from "react-day-picker/locale";

interface IDashboardDatePickerProps {
  dateRange: DateRange;
  onChange: (dateRange: DateRange) => void;
}

function DashboardDatePicker({
  dateRange,
  onChange,
}: IDashboardDatePickerProps) {
  const [date, setDate] = useState<DateRange>(dateRange);

  return (
    <div className="flex flex-1 items-center gap-x-2 justify-end">
      <div className="font-semibold">조회기간</div>
      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          // popoverTarget="rdp-popover"
          className="input input-border cursor-pointer bg-transparent w-fit"
          // style={{ anchorName: "--rdp" } as React.CSSProperties}
        >
          {dateRange.from?.toLocaleDateString()} ~{" "}
          {dateRange.to?.toLocaleDateString()}
        </button>
        <div
          tabIndex={0}
          // popover="auto"
          // id="rdp-popover"
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md"
          // style={{ positionAnchor: "--rdp" } as React.CSSProperties}
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

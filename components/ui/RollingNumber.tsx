"use client";

import NumberFlow from "@number-flow/react";
import React, { useEffect, useState } from "react";

interface IRollingNumberProps {
  value: number;
  suffix?: string;
}

function RollingNumber({ value, suffix }: IRollingNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  return <NumberFlow value={displayValue} suffix={suffix} />;
}

export default RollingNumber;

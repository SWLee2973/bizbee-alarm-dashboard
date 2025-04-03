"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SearchButton() {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-square bg-secondary text-secondary-content font-semibold w-20"
      disabled={status.pending}
    >
      {status.pending ? <span className="loading loading-spinner" /> : "검색"}
    </button>
  );
}

export default SearchButton;

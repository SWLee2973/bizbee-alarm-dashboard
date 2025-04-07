import React from "react";
import Form from "next/form";
import Input from "../ui/Input";
// import SearchIcon from "@/assets/svg/search.svg";
import SearchButton from "../ui/SearchButton";

function UserSearch() {
  return (
    <Form action="/users" className="flex items-center gap-2">
      <Input
        icon={
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        }
        name="searchText"
        type="text"
        placeholder="검색"
        className="w-full"
      />
      <SearchButton />
    </Form>
  );
}

export default UserSearch;

import React from "react";
import Form from "next/form";
import Input from "../ui/Input";
import SearchIcon from "@/public/svg/search.svg";
import SearchButton from "../ui/SearchButton";

function UserSearch() {
  return (
    <Form action="/users" className="flex items-center gap-2">
      <Input
        icon={<SearchIcon className="h-1/2 aspect-square" />}
        name="searchText"
        type="text"
        placeholder="검색"
        // containerStyle="w-full"
        className="w-full"
      />
      <SearchButton />
    </Form>
  );
}

export default UserSearch;

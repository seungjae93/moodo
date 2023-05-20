import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  onSearch: (value: string) => void;
}

function Search({ onSearch }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };
  return (
    <>
      <BsSearch />
      <StSearch
        type="search"
        placeholder="지역, 지하철역, 학교 검색하기"
        value={searchValue}
        onChange={handleInputChange}
        onBlur={handleSearch}
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </>
  );
}

export default Search;
const StSearch = styled.input`
  border: none;
  padding: 10px;
  width: 250px;
  height: 40px;
  border-bottom: 1px solid #a6b2b9;
`;

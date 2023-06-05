import React, { useState, useCallback, ChangeEvent } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiEqualizerFill } from "react-icons/ri";

import { SearchProps } from "../../../typings/detail.type";
import palette from "../../../libs/styles/palette";

function Search({ onSearch }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    []
  );

  const handleSearch = () => {
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <>
      {window.innerWidth >= 930 ? (
        <BsSearch
          onClick={handleSearch}
          style={{
            width: "18px",
            height: "18px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        />
      ) : null}
      <StSearch
        type="search"
        placeholder="동, 구, 지역명으로 검색하세요"
        value={searchValue}
        onChange={handleInputChange}
        onBlur={handleSearch}
        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
      {window.innerWidth <= 930 ? (
        <>
          <RiEqualizerFill
            style={{
              color: "black",
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
          />
          <CiSearch
            onClick={handleSearch}
            style={{
              backgroundColor: palette.cyan[5],
              width: "28px",
              height: "28px",
              cursor: "pointer",
              color: "white",
            }}
          />
        </>
      ) : null}
    </>
  );
}

export default Search;

const StSearch = styled.input`
  border: none;
  padding: 10px;
  width: 220px;
  height: 40px;
  border-bottom: 1px solid #a6b2b9;
  @media screen and (max-width: 930px) {
    border: none;
  }
`;

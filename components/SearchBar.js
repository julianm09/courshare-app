import styled from "styled-components";
import { Search } from "react-feather";

export default function SearchBar({ handleSearch, value, useSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      useSearch();
    }
  };

  return (
    <Cont>
      <Searchimg>
        <Search onClick={useSearch} />
      </Searchimg>

      <SearchBarInput
        value={value ? value : ""}
        onKeyDown={handleKeyDown}
        onChange={(e) => handleSearch(e)}
      />
    </Cont>
  );
}

const SearchBarInput = styled.input`
  width: 403px;
  height: 40px;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  border-radius: 10px;
  padding: 12px;
  outline: none;
  border: none;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Searchimg = styled.div`
  position: absolute;
  right: 12px;
  color: #aaaaaa;
  cursor: pointer;
`;

const Cont = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

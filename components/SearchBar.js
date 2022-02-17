import styled from "styled-components";

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
const Searchimg = styled.img`
  position: absolute;
  right: 12px;
`;

const Cont = styled.div`
  position: relative;
  display: flex;
  max-width: 503px;
  align-items: center;
`;

export default function SearchBar({handleSearch, value}) {
  return (
    <Cont>
      <Searchimg src="/icons/search.png" />
      <SearchBarInput value={value} onChange={(e) => handleSearch(e)}/>
    </Cont>
  );
}

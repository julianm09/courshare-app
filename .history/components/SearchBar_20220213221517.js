import styled from "styled-components";

const SearchBarInput = styled.input`
  width: 503px;
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
  right: 10px;
`;

const Cont = styled.div`
  position: relative;
  display: flex;
  max-width: 503px;
  align-items: center;
`;

export default function SearchBar({}) {
  return (
    <Cont>
      <Searchimg src="/icons/search.png" />
      <SearchBarInput />
    </Cont>
  );
}

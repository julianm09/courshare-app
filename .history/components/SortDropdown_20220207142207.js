import styled from "styled-components";
import { useState } from "react";

const Cont = styled.div`
  width: 230px;
  max-height: 281px;
`;

const Drowpdown = styled.div`
  height: 50px;
  width: 230px;
  max-width: 395px;

  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 18px;
  font-family: General Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 0 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DrowpdownBox = styled.div`
  min-height: 209px;
  width: 230px;
  max-width: 395px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Category = styled.div`
  font-family: General Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SortDropdown = ({
  text = "Sort by",
  sort = ["A to Z", "Level (a)", "Level (d)", "Ratings (a)", "Ratings (d)"],
  handleSort = () => console.log("sort"),
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Cont>
      <Drowpdown onClick={() => setOpen(!open)}>Sort by</Drowpdown>
      {open ? (
        <DrowpdownBox>
          {sort.map((x) => (
            <Category>
              <div>{x}</div>
            </Category>
          ))}
        </DrowpdownBox>
      ) : (
        <></>
      )}
    </Cont>
  );
};
export default SortDropdown;

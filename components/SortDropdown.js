import styled from "styled-components";
import { useState } from "react";

const Cont = styled.div`
  width: 230px;
  max-height: 281px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const Drowpdown = styled.div`
  height: 50px;
  width: 230px;
  max-width: 395px;
  border: 0.5px solid #000000;
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
  border: 0.5px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 18px;
  display:flex;
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

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SortDropdown = ({
    text = "Sort by",
    sort=['A to Z', 'Level (a)', 'Level (d)', 'Ratings (a)', 'Ratings (d)'],
    handleSort= () => console.log('sort')

}) =>{
    const [open, setOpen] = useState(false)

    return(
        <Cont>
        <Drowpdown onClick={()=>setOpen(!open)}>
            {text}
            <Icon>
          {open ? (
            <img src="/icons/up-caret.svg" />
          ) : (
            <img src="/icons/down-caret.svg" />
          )}
        </Icon>
        </Drowpdown>
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
    )
}
export default SortDropdown
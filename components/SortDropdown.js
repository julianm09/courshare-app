import styled from "styled-components";
import { useState } from "react";
import ax from 'axios';
import CourseCardLV from "./CourseCardLV";

var timer = null;
const Cont = styled.div`
  width: 100%;
  margin: 0 0 54px 0;
  display: flex;
  position: relative;

  justify-content: flex-end;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const Drowpdown = styled.div`
  height: 40px;
  width: 210px;
  max-width: 395px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 18px;
  font-family: General Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #ffffff;
  margin-bottom: 20px;
`;

const DrowpdownBox = styled.div`
  position: absolute;
  background: #ffffff;
  z-index: 100000;
  top: 72px;
  min-height: 209px;
  width: 210px;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SortDropdown = ({
  text = "Sort by",
  sort = [
    "A to Z",
    "Level (ascending)",
    "Level (descending)",
    "Ratings (ascending)",
    "Ratings (descending)",
  ],
  handleSort = () => console.log("sort"),
}) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [sbr, setSBR] = useState(false);
  const [sbla, setSBLA] = useState(false);
  const [sbld, setSBLD] = useState(false);
  const [sbra, setSBRA] = useState(false);
  const [sbrd, setSBRD] = useState(false);
  const Sorting = async ()=>{

    //resets the timer if the inputs keeps changing
    if(timer){
      clearTimeout(timer);
      timer = null;
    }

    //start a timer to wait 2 seconds before making an asynchronous call
    if(timer === null){
      timer = setTimeout(async ()=>{
        console.log("async call");
        const res = await ax.get("/api/courses", {
          params:{
            title_rating: sbr,
            level_rating_a: sbla,
            level_rating_d: sbld,
            rating_a: sbra,
            rating_d: sbrd
          }
        })
      
        console.log(res.data);
        setData(res.data);
        timer = null;
      }, 500);
    }

  }

  return (
    <Cont>
      <Drowpdown onClick={() => setOpen(!open)}>
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
        <DrowpdownBox onClick={()=>Sorting()}>
            <Category onClick={()=>setSBR(!sbr)}>
              A to Z
            </Category>
            <Category onClick={()=>setSBLA(!sbla)}>
              Level (ascending)
            </Category>
            <Category onClick={()=>setSBLD(!sbld)}>
              Level (descending)
            </Category>
            <Category onClick={()=>setSBRA(!sbra)}>
              Ratings (ascending)
            </Category>
            <Category onClick={()=>setSBRD(!sbrd)}>
              Ratings (descending)
            </Category>
        </DrowpdownBox>
      ) : (
        <></>
      )}

      {data.map((o,i) =>{
        return <div>
          <CourseCardLV />
        </div>
      })}
    </Cont>
  );
};
export default SortDropdown;

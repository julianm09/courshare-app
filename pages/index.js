import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import ax from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import FilterBar from "@/components/FilterBar";
import AddCurriculumForm from "@/components/AddCurriculumForm";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('') 
  const [display, setDisplay] = useState("One");
  const [addCurriculum, setAddCurriculum] = useState(true)

  const getCourses = async () => {
    const res = await ax.get("./api/courses");
    console.log(res.data);
    setCourses(res.data);
  };

  useEffect(() => {
    getCourses();
  }, []);



  return (
    <Cont>

      <FilterBar value={display} setValue={setDisplay}/>
{ addCurriculum ? <AddCurriculumForm setAddCurriculum={setAddCurriculum}/> : <></> }
      {display == "One" ? courses.map((x) => (
        <div>
          <div>{x['Course Name']}</div>
          <div>{x['University']}</div>
          <div>{x['Difficulty Level']}</div>
          <div>{x['Course Rating']}</div>
          <div>{x['Course URL']}</div>
          <div>{x['Skills']}</div>
          <img width="300px" src={x.Image} />
        </div>
      )) : <></>}



    </Cont>
  );
}

const Cont = styled.div`
  width: 90%;
  margin: 0 5%;
  padding: 0 0 0 8%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`



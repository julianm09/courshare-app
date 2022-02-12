import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import ax from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import FilterBar from "@/components/FilterBar";
import AddCurriculumForm from "@/components/AddCurriculumForm";
import CourseCardLV from "@/components/CourseCardLV";
import SortDropdown from "@/components/SortDropdown";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState("One");
  const [addCurriculum, setAddCurriculum] = useState(false);

  const getCourses = async () => {
    const res = await ax.get("./api/courses");
    console.log(res.data);
    setCourses(res.data);
  };

  const getCurriculums = async () => {
    const res = await ax.get("./api/curriculums");
    setCurriculums(res.data);
  };

  useEffect(() => {
    getCourses();
    getCurriculums();
  }, []);

  console.log(curriculums);
  console.log(display);

  return (
    <Cont>
      <FilterBar value={display} setValue={setDisplay} />
      <SortDropdown />
      {addCurriculum ? (
        <AddCurriculumForm setAddCurriculum={setAddCurriculum} />
      ) : (
        <></>
      )}
      {display == "One" ? (
        courses &&
        courses.map((x) => (
          <CourseCardLV
            courseName={x["Course Name"]}
            teachingSource={x["University"]}
            ratingCount={x["Course Rating"]}
            difficulty={x["Difficulty Level"]}
            image={x.Image}
          />
        ))
      ) : display == "Two" ? (
        curriculums &&
        curriculums.map((x) => {
          <div>{x["name"]}</div>;
        })
      ) : (
        <></>
      )}
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

  @media (max-width: 1000px) {
    width: 90%;
    flex-direction: column;
    padding: 0;
  }
`;

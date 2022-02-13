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
import CurriculumSlider from "@/components/CurriculumSlider";
import PageNavigation from "@/components/PageNavigation";

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

  return (
    <Cont>
      <FilterBar value={display} setValue={setDisplay} />
      <SortDropdown
        sort={
          display == "One"
            ? [
                "A to Z",
                "Level (ascending)",
                "Level (descending)",
                "Ratings (ascending)",
                "Ratings (descending)",
              ]
            : ["Top", "New"]
        }
      />
      {addCurriculum ? (
        <AddCurriculumForm setAddCurriculum={setAddCurriculum} />
      ) : (
        <></>
      )}
      {display == "One" ? (
        <>
          {courses &&
            courses.map((x) => (
              <CourseCardLV
                courseName={x["Course Name"]}
                teachingSource={x["University"]}
                ratingCount={x["Course Rating"]}
                difficulty={x["Difficulty Level"]}
                image={x.Image}
              />
            ))}
          <PageNavigation />
        </>
      ) : display == "Two" ? (
        <>
          {curriculums &&
            curriculums.map((x) => (
              <CurriculumSlider
                avaText={x["name"]}
                favouriteCount={x["likes"]}
                courses={x["courses"]}
              />
            ))}
          <PageNavigation />
        </>
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

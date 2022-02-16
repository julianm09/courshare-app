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
import PageNavigation from "@/components/PageNavigationCourse";
import PageNavigationCourse from "@/components/PageNavigationCourse";
import PageNavigationCurriculum from "@/components/PageNavigationCurriculum";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [searchCourse, setSearchCourse] = useState(null);
  const [display, setDisplay] = useState("One");
  const [addCurriculum, setAddCurriculum] = useState(false);
  const [coursePage, setCoursePage] = useState(0);
  const [courseItems, setCourseItems] = useState(424);
  const [curriculumPage, setCurriculumPage] = useState(0);
  const [searching, setSearching] = useState(false);
  const [university, setUniversity] = useState(null);

  const getCourses = async () => {
    const res = await ax.get("./api/courses", {
      params: {
        page: coursePage,
        search: searchCourse,
        university: university,
      },
    });
    setCourses(res.data);
    setSearching(false);
  };

  console.log(university)

  const handleSearch = (e) => {
    setSearchCourse(e.target.value);
  };

  useEffect(() => {
    console.log(searchCourse);
    let timer = setTimeout(() => {
      if (
        (searchCourse !== null && searchCourse.length > 1) ||
        (searchCourse !== null && searchCourse === "")
      ) {
        if (display === "One") {
          setSearching(true);
          getCourses();
        }
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [searchCourse]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCurriculums = async () => {
    const res = await ax.get("./api/curriculums", {
      params: {
        page: curriculumPage,
        search: searchCourse,
      },
    });
    setCurriculums(res.data);
  };

  return (
    <Cont>
      <FilterBar
        value={display}
        setValue={setDisplay}
        handleSearch={handleSearch}
        university={university}
        setUniversity={setUniversity}
      />
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
      {searching ? <>searching</> : <></>}
      {addCurriculum ? (
        <AddCurriculumForm setAddCurriculum={setAddCurriculum} />
      ) : (
        <></>
      )}
      {display == "One" && !searching ? (
        <>
          {courses &&
            courses.map((x, i) => (
              <CourseCardLV
                key={i}
                courseName={x["Course Name"]}
                teachingSource={x["University"]}
                ratingCount={x["Course Rating"]}
                difficulty={x["Difficulty Level"]}
                image={x.Image}
              />
            ))}
          <PageNavigationCourse
            setCoursePage={setCoursePage}
            getCourses={getCourses}
            coursePage={coursePage}
            items={courseItems}
          />
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
          <PageNavigationCurriculum
            setCurriculumPage={setCurriculumPage}
            curriculumPage={curriculumPage}
            getCurriculums={() => getCurriculums()}
          />
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

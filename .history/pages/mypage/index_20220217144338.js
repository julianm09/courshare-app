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
import SectionTabs from "@/components/SectionTabs";
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";

export default function MyPage() {
  const [courses, setCourses] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [searchCourse, setSearchCourse] = useState(null);
  const [display, setDisplay] = useState("One");
  const [addCurriculum, setAddCurriculum] = useState(false);
  const [coursePage, setCoursePage] = useState(0);
  const [curriculumPage, setCurriculumPage] = useState(0);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (
        (searchCourse !== null && searchCourse.length > 1) ||
        (searchCourse !== null && searchCourse === "")
      ) {
        if (display === "One") {
          setSearching(true);
          setCoursePage(0);
          getCourses();
        }
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [searchCourse]);

  const getCourses = async () => {
    const res = await ax.get("./api/courses", {
      params: {
        page: coursePage,
        search: searchCourse,
      },
    });
    console.log(res.data);
    setCourses(res.data);
  };

  const getCurriculums = async () => {
    const res = await ax.get("./api/curriculums", {
      params: {
        page: curriculumPage,
      },
    });
    setCurriculums(res.data);
  };

  const handleSearch = (e) => {
    setSearchCourse(e.target.value);
  };

  useEffect(() => {
    getCourses();
    getCurriculums();
  }, []);
  const { theme, setTheme } = useTheme();
  return (
    <Cont>
      <Greeting>Hi, Juhee 👋</Greeting>
      <SectionTabs
        value={display}
        setValue={setDisplay}
        one="Saved"
        two="Your Curriculums"
        handleSearch={handleSearch}
      />

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
                setAddCurriculum={setAddCurriculum}
              />
            ))}
          <PageNavigationCourse
            setCoursePage={setCoursePage}
            getCourses={() => getCourses()}
            coursePage={coursePage}
          />

          <Header color={comp_themes[theme].switch_text}>
            Saved Curriculums
          </Header>

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
`;

const Header = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 43px;
  color: ${(props) => props.color};
  margin: 176px 0 86px;
`;

const Greeting = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 74px;
  color: #000000;
  margin: 95px 0 45px 0;
`;

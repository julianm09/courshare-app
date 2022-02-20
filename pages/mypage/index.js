import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import ax from "axios";
import { useEffect, useState } from "react";
import FilterBar from "@/components/FilterBar";
import AddCurriculumForm from "@/components/AddCurriculumForm";
import CourseCardLV from "@/components/CourseCardLV";
import SortDropdown from "@/components/SortDropdown";
import CurriculumSlider from "@/components/CurriculumSlider";
import PageNavigation from "@/components/PageNavigationCourse";
import PageNavigationCourse from "@/components/PageNavigationCourse";
import PageNavigationCurriculum from "@/components/PageNavigationCurriculum";
import SectionTabs from "@/components/SectionTabs";
import { useTheme, useView } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";
import CourseCard from "@/components/CourseCard";

export default function MyPage() {
  const [courses, setCourses] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [searchCourse, setSearchCourse] = useState("");
  const [display, setDisplay] = useState("One");
  const [addCurriculum, setAddCurriculum] = useState(false);
  const [coursePage, setCoursePage] = useState(0);
  const [curriculumPage, setCurriculumPage] = useState(0);
  const [searching, setSearching] = useState(false);
  const [courseItems, setCourseItems] = useState(424);

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
    setCourses(res.data.courses);
    setCourseItems(res.data.length);
    setSearching(false);
  };

  const getCurriculums = async () => {
    const res = await ax.get("./api/curriculums", {
      params: {
        page: curriculumPage,
      },
    });
    setCurriculums(res.data.courses);
  };

  const handleSearch = (e) => {
    setSearchCourse(e.target.value);
  };

  useEffect(() => {
    getCourses();
    getCurriculums();
  }, []);
  const { theme, setTheme } = useTheme();
  const { view, setView } = useView();
  return (
    <Cont>
      <Greeting>Hi, Juhee 👋</Greeting>
      <SectionTabs
        value={display}
        setValue={setDisplay}
        one="Saved Courses"
        two="Saved Curriculums"
        three="Your Curriculums"
        handleSearch={handleSearch}
        display={display}
      />

      {display == "One" && view === "list" ? (
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
            items={courseItems}
          />
        </>
      ) : display == "One" && view === "grid" ? (
        <>
          <GridView>
            {courses &&
              courses.map((x) => (
                <CourseCard
                  courseName={x["Course Name"]}
                  teachingSource={x["University"]}
                  ratingCount={x["Course Rating"]}
                  difficulty={x["Difficulty Level"]}
                  image={x.Image}
                  setAddCurriculum={setAddCurriculum}
                />
              ))}
          </GridView>
          <PageNavigationCourse
            setCoursePage={setCoursePage}
            getCourses={() => getCourses()}
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
      ) : display == "Three" ? (
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0;
  }
`;

const Header = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 43px;
  color: ${(props) => props.color};
  margin: 176px 0 86px;
  width: 80%;
`;

const Greeting = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 74px;
  color: #000000;
  margin: 95px 0 25px 0;
  width: 80%;
`;

const GridView = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  width: 80%;
  grid-gap: 53px;

  @media (max-width: 1400px) {
    grid-template-columns: 2fr 2fr 2fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 2fr 2fr;
    width: 90%;
  }

  @media (max-width: 700px) {
    grid-template-columns: 2fr;
  }
`;

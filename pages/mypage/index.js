import styled from "styled-components";
import ax from "axios";
import { useEffect, useState } from "react";
import CourseCardLV from "@/components/CourseCardLV";
import CurriculumSlider from "@/components/CurriculumSlider";
import PageNavigationCourse from "@/components/PageNavigationCourse";
import PageNavigationCurriculum from "@/components/PageNavigationCurriculum";
import SectionTabs from "@/components/SectionTabs";
import { useTheme, useView, useActiveCourse } from "@/utils/provider";
import CourseCard from "@/components/CourseCard";
import CourseDetailCard from "@/components/CourseDetailCard";

export default function MyPage() {
  //display courses and currciculums
  const [courses, setCourses] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [myCurriculums, setMyCurriculums] = useState([]);

  //display courses and currciculums
  const [display, setDisplay] = useState("One");

  //show currciculum form
  const [addCurriculum, setAddCurriculum] = useState(false);

  //course pagination items and page number
  const [coursePage, setCoursePage] = useState(0);
  const [courseItems, setCourseItems] = useState(424);

  //currciculm pagination items and page number
  const [curriculumPage, setCurriculumPage] = useState(0);
  const [curriculumItems, setCurriculumItems] = useState(424);

  //currciculm pagination items and page number
  const [myCurriculumPage, setMyCurriculumPage] = useState(0);
  const [myCurriculumItems, setMyCurriculumItems] = useState(424);

  //load after api call
  const [searching, setSearching] = useState(false);

  //search bar states
  const [searchCourse, setSearchCourse] = useState("");
  const [searchCurriculum, setSearchCurriculum] = useState("");
  const [searchMyCurriculum, setSearchMyCurriculum] = useState("");

  //filter and sorting states courses
  const [university, setUniversity] = useState("");
  const [level, setLevel] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("");

  //filter and sorting states curriculums
  const [sortDirection, setSortDirection] = useState("");
  const [curriculumCategory, setCurriculumCategory] = useState([]);

  //provider states
  const { view, setView } = useView();
  const { activeCourse, handleViewCourse, viewCourse, setViewCourse } =
    useActiveCourse();

  const handleAddCurriculum = (e) => {
    console.log("e");
    e.stopPropagation();
    setAddCurriculum(true);
  };

  //get courses from api courses
  const getCourses = async () => {
    const res = await ax.get("./api/courses", {
      params: {
        page: coursePage,
        search: searchCourse,
        university: university,
        sortBy: sortBy,
        sortDirection: sortDirection,
        level: level,
        rating: rating,
      },
    });
    setCourses(res.data.courses);
    setCourseItems(res.data.length);
    setSearching(false);
  };

  //get curriculums from api curriculums
  const getCurriculums = async () => {
    const res = await ax.get("./api/curriculums", {
      params: {
        page: curriculumPage,
        category: curriculumCategory,
        search: searchCurriculum,
      },
    });
    setCurriculums(res.data.courses);
    setCurriculumItems(res.data.length);
    setSearching(false);
  };

  //get curriculums from api curriculums
  const getMyCurriculums = async () => {
    const res = await ax.get("./api/curriculums", {
      params: {
        page: myCurriculumPage,
        category: curriculumCategory,
        search: searchMyCurriculum,
      },
    });
    setMyCurriculums(res.data.courses);
    setMyCurriculumItems(res.data.length);
    setSearching(false);
  };

  //handle sreach based on display
  const handleSearch = (e) => {
    if (display === "One") {
      setSearchCourse(e.target.value);
    }

    if (display === "Two") {
      setSearchCurriculum(e.target.value);
    }

    if (display === "Three") {
      setSearchMyCurriculum(e.target.value);
    }
  };

  const useSearch = () => {
    if (searchCourse !== null && display === "One") {
      setSearching(true);
      setCoursePage(0);
      getCourses();
    }

    if (searchCurriculum !== null && display === "Two") {
      setSearching(true);
      setCurriculumPage(0);
      getCurriculums();
    }

    if (searchCurriculum !== null && display === "Three") {
      setSearching(true);
      setMyCurriculumPage(0);
      getMyCurriculums();
    }
  };

  useEffect(() => {
    if (coursePage || coursePage === 0) {
      getCourses();
    }
  }, [coursePage]);

  useEffect(() => {
    if (curriculumPage || curriculumPage === 0) {
      getCurriculums();
    }
  }, [curriculumPage]);

  useEffect(() => {
    if (myCurriculumPage || myCurriculumPage === 0) {
      getMyCurriculums();
    }
  }, [myCurriculumPage]);

  return (
    <Cont>
      {viewCourse ? (
        <CourseDetailCard
          setViewCourse={setViewCourse}
          activeCourse={activeCourse}
        />
      ) : (
        <></>
      )}
      <Greeting>Hi, Juhee 👋</Greeting>
      <SectionTabs
        useSearch={useSearch}
        value={display}
        setValue={setDisplay}
        one="Saved Courses"
        two="Saved Curriculums"
        three="Your Curriculums"
        handleSearch={handleSearch}
        display={display}
        setSearchCourse={setSearchCourse}
        searchCourse={searchCourse}
        searchCurriculum={searchCurriculum}
        setSearchCurriculum={setSearchCurriculum}
        setSearchMyCurriculum={setSearchMyCurriculum}
        searchMyCurriculum={searchMyCurriculum}
      />

      {display == "One" && view === "list" ? (
        <>
          {courses &&
            courses.map((x, i) => (
              <CourseCardLV
                setViewCourse={setViewCourse}
                setAddCurriculum={setAddCurriculum}
                key={i}
                courseName={x["Course Name"]}
                teachingSource={x["University"]}
                ratingCount={x["Course Rating"]}
                difficulty={x["Difficulty Level"]}
                image={x.Image}
                course={x}
                handleViewCourse={handleViewCourse}
                handleAddCurriculum={handleAddCurriculum}
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
              courses.map((x, i) => (
                <CourseCard
                  key={i}
                  course={x}
                  courseName={x["Course Name"]}
                  teachingSource={x["University"]}
                  ratingCount={x["Course Rating"]}
                  difficulty={x["Difficulty Level"]}
                  image={x.Image}
                  handleAddCurriculum={handleAddCurriculum}
                  handleViewCourse={handleViewCourse}
                  setViewCourse={setViewCourse}
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
            curriculums.map((x, i) => (
              <CurriculumSlider
                key={i}
                avaText={x["name"]}
                favouriteCount={x["likes"]}
                courses={x["courses"]}
                handleViewCourse={handleViewCourse}
              />
            ))}
          <PageNavigationCurriculum
            setCurriculumPage={setCurriculumPage}
            curriculumPage={curriculumPage}
            getCurriculums={() => getCurriculums()}
            items={curriculumItems}
          />
        </>
      ) : display == "Three" ? (
        <>
          {myCurriculums &&
            myCurriculums.map((x, i) => (
              <CurriculumSlider
                key={i}
                avaText={x["name"]}
                favouriteCount={x["likes"]}
                courses={x["courses"]}
                handleViewCourse={handleViewCourse}
              />
            ))}
          <PageNavigationCurriculum
            setCurriculumPage={setMyCurriculumPage}
            curriculumPage={myCurriculumPage}
            getCurriculums={() => getMyCurriculums()}
            items={myCurriculumItems}
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

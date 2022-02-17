import styled from "styled-components";
import ax from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import FilterBar from "@/components/FilterBar";
import AddCurriculumForm from "@/components/AddCurriculumForm";
import CourseCardLV from "@/components/CourseCardLV";
import SortDropdown from "@/components/SortDropdown";
import CurriculumSlider from "@/components/CurriculumSlider";
import PageNavigationCourse from "@/components/PageNavigationCourse";
import PageNavigationCurriculum from "@/components/PageNavigationCurriculum";
import { useView } from "@/utils/provider";
import CourseCard from "@/components/CourseCard";
import CourseDetailCard from "@/components/CourseDetailCard";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [display, setDisplay] = useState("One");
  const [addCurriculum, setAddCurriculum] = useState(false);
  const [coursePage, setCoursePage] = useState(0);
  const [courseItems, setCourseItems] = useState(424);

  const [curriculumPage, setCurriculumPage] = useState(0);
  const [searching, setSearching] = useState(false);

  const [searchCourse, setSearchCourse] = useState(null);
  const [searchCurriculum, setSearchCurriculum] = useState(null);

  const [university, setUniversity] = useState([]);
  const [level, setLevel] = useState([]);
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const [viewCourse, setViewCourse] = useState(false)

  const [curriculumCategory, setCurriculumCategory] = useState([]);

  const [sortDirection, setSortDirection] = useState(null);

  const { view, setView } = useView();

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
    setCourseItems(res.data.length)
    setCoursePage
    setSearching(false);
  };

  const handleSearch = (e) => {
    if (display === "One") {
      setSearchCourse(e.target.value);
    }

    if (display === "Two") {
      setSearchCurriculum(e.target.value);
    }
  };

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

  useEffect(() => {
    if (level) {
      getCourses();
    }
  }, [level]);

  useEffect(() => {
    if (rating) {
      getCourses();
    }
  }, [rating]);

  useEffect(() => {
    if (sortBy) {
      getCourses();
    }
  }, [sortBy]);

  useEffect(() => {
    if (university) {
      getCourses();
    }
  }, [university]);

  useEffect(() => {
    if (coursePage) {
      getCourses();
    }
  }, [coursePage]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCurriculums = async () => {
    const res = await ax.get("./api/curriculums", {
      params: {
        page: curriculumPage,
        category: curriculumCategory,
        search: searchCurriculum,
      },
    });
    setCurriculums(res.data);
    setSearching(false);
  };

  useEffect(() => {
    if (curriculumCategory) {
      getCurriculums();
    }
  }, [curriculumCategory]);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (
        (searchCurriculum !== null && searchCurriculum.length > 1) ||
        (searchCurriculum !== null && searchCurriculum === "")
      ) {
        if (display === "Two") {
          setSearching(true);
          setCurriculumPage(0);
          getCurriculums();
        }
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [searchCurriculum]);

  return (
    <Cont>
      {viewCourse ? <CourseDetailCard setViewCourse={setViewCourse}/> : <></>}
      
      <FilterBar
        value={display}
        setValue={setDisplay}
        handleSearch={handleSearch}
        university={university}
        setUniversity={setUniversity}
        level={level}
        setLevel={setLevel}
        rating={rating}
        setRating={setRating}
        curriculumCategory={curriculumCategory}
        setCurriculumCategory={setCurriculumCategory}
        setSearchCourse={setSearchCourse}
        searchCourse={searchCourse}
        searchCurriculum={searchCurriculum}
        setSearchCurriculum={setSearchCurriculum}
        display={display}
      />
      <SortDropdown
        setSortBy={setSortBy}
        setSortDirection={setSortDirection}
        sort={
          display == "One"
            ? [
                "A to Z",
                "Z to A",
                "Level (descending)",
                "Level (ascending)",
                "Ratings (descending)",
                "Ratings (ascending)",
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
      {display == "One" && view == "list" && !searching ? (
        <>
          <ListView>
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
                />
              ))}
          </ListView>
          <PageNavigationCourse
            setCoursePage={setCoursePage}
            getCourses={getCourses}
            coursePage={coursePage}
            items={courseItems}
          />
        </>
      ) : display == "One" && view == "grid" && !searching ? (
        <>
          <GridView>
            {courses &&
              courses.map((x, i) => (
                <CourseCard
                  key={i}
                  courseName={x["Course Name"]}
                  teachingSource={x["University"]}
                  ratingCount={x["Course Rating"]}
                  difficulty={x["Difficulty Level"]}
                  image={x.Image}
                />
              ))}
          </GridView>
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

const ListView = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridView = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  width: 90%;
  grid-gap: 53px;

  @media (max-width: 1400px) {
    grid-template-columns: 2fr 2fr 2fr;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 2fr 2fr;
    width: 100%;
  }

  @media (max-width: 700px) {
    grid-template-columns: 2fr;
  }
`;

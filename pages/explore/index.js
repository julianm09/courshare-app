import styled from "styled-components";
import ax from "axios";
import { useEffect, useState } from "react";
import { useView } from "@/utils/provider";
import FilterBar from "@/components/FilterBar";
import AddCurriculumForm from "@/components/AddCurriculumForm";
import CourseCardLV from "@/components/CourseCardLV";
import SortDropdown from "@/components/SortDropdown";
import CurriculumSlider from "@/components/CurriculumSlider";
import PageNavigationCourse from "@/components/PageNavigationCourse";
import PageNavigationCurriculum from "@/components/PageNavigationCurriculum";
import CourseCard from "@/components/CourseCard";
import CourseDetailCard from "@/components/CourseDetailCard";

export default function Home() {
  //display courses and currciculums
  const [courses, setCourses] = useState([]);
  const [curriculums, setCurriculums] = useState([]);

  //display courses and currciculums
  const [display, setDisplay] = useState("One");

  //show currciculum form
  const [addCurriculum, setAddCurriculum] = useState(false);

  //vew course details
  const [viewCourse, setViewCourse] = useState(false);

  //course pagination items and page number
  const [coursePage, setCoursePage] = useState(0);
  const [courseItems, setCourseItems] = useState(424);

  //currciculm pagination items and page number
  const [curriculumPage, setCurriculumPage] = useState(0);
  const [curriculumItems, setCurriculumItems] = useState(424);

  //load after api call
  const [searching, setSearching] = useState(false);

  //search bar states
  const [searchCourse, setSearchCourse] = useState("");
  const [searchCurriculum, setSearchCurriculum] = useState("");

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

  const handleAddCurriculum = () => {
    setAddCurriculum(true)
  }

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

  //handle sreach based on display
  const handleSearch = (e) => {
    if (display === "One") {
      setSearchCourse(e.target.value);
    }

    if (display === "Two") {
      setSearchCurriculum(e.target.value);
    }
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

  useEffect(() => {
    if (curriculumCategory) {
      getCurriculums();
    }
  }, [curriculumCategory]);

  //handle state changes
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
{/*       {viewCourse ? <CourseDetailCard setViewCourse={setViewCourse} /> : <></>}

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
      {display && display == "One" && view == "list" && !searching ? (
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
                  handleAddCurriculum={handleAddCurriculum}
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
            curriculums.map((x, i) => (
              <CurriculumSlider
                key={i}
                avaText={x["name"]}
                favouriteCount={x["likes"]}
                courses={x["courses"]}
              />
            ))}
          <PageNavigationCurriculum
            setCurriculumPage={setCurriculumPage}
            curriculumPage={curriculumPage}
            getCurriculums={getCurriculums}
            items={curriculumItems}
          />
        </>
      ) : (
        <></>
      )} */}
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

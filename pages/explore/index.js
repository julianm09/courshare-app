import styled from "styled-components";
import ax from "axios";
import { useEffect, useState } from "react";
import {
  useView,
  useActiveCourse,
  useUser,
  useSavedCourses,
  useSavedCurriculums,
  useServer,
} from "@/utils/provider";
import FilterBar from "@/components/FilterBar";
import AddCurriculumForm from "@/components/AddCurriculumForm";
import CourseCardLV from "@/components/CourseCardLV";
import CurriculumSlider from "@/components/CurriculumSlider";
import PageNavigationCourse from "@/components/PageNavigationCourse";
import PageNavigationCurriculum from "@/components/PageNavigationCurriculum";
import CourseCard from "@/components/CourseCard";
import CourseDetailCard from "@/components/CourseDetailCard";

export default function Home() {
  //display courses and currciculums
  const [courses, setCourses] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [display, setDisplay] = useState("One");

  //show currciculum form
  const [addCurriculum, setAddCurriculum] = useState(false);

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
  const { server } = useServer();
  const { view } = useView();
  const { savedCourses, setSavedCourses } = useSavedCourses();
  const { savedCurriculums, setSavedCurriculums } = useSavedCurriculums();
  const { user, setUser } = useUser();
  const {
    activeCourse,
    setActiveCourse,
    handleViewCourse,
    viewCourse,
    setViewCourse,
  } = useActiveCourse();

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    if (localUser) {
      setUser(JSON.parse(localUser));
      console.log(JSON.parse(localUser));
    } else {
      return;
    }
  }, []);

  //display currciculum popup
  const handleAddCurriculum = (e, course) => {
    console.log(course);
    setActiveCourse(course);
    e.stopPropagation();
    setAddCurriculum(true);
  };

  //display currciculum popup
  const handleSaveCourse = (e, course) => {
    e.stopPropagation();
    saveCourse(course);
  };

  const saveCourse = async (course) => {
    await ax
      .post(`${server}/user/saveCourse`, {
        course: course,
        uid: user.uid,
      })
      .then(function (response) {
        console.log(response.data.courses);
        setSavedCourses(response.data.courses);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getSavedCourses = async (course) => {
    await ax
      .post(`${server}/user/getSavedCourses`, {
        uid: user.uid,
      })
      .then(function (response) {
        console.log(response.data);
        setSavedCourses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getSavedCurriculums = async (course) => {
    await ax
      .post(`${server}/user/getSavedCurriculums`, {
        uid: user.uid,
      })
      .then(function (response) {
        console.log(response.data);
        setSavedCurriculums(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      getSavedCourses();
      getSavedCurriculums();
    }
  }, [user, display]);

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
  };

  //get curriculums from api curriculums
  const getCurriculums = async () => {
    const res = await ax.get(`${server}/curriculum`, {
      params: {
        page: curriculumPage,
        category: curriculumCategory,
        search: searchCurriculum,
        sortBy: sortBy,
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
  }, [curriculumCategory, sortBy]);

  useEffect(() => {
    if (
      level ||
      rating ||
      sortBy ||
      university ||
      coursePage ||
      coursePage === 0
    ) {
      getCourses();
    }
  }, [level, rating, sortBy, university, coursePage]);

  return (
    <Cont>
      {viewCourse ? (
        <CourseDetailCard
          setViewCourse={setViewCourse}
          course={activeCourse}
          courseName={activeCourse && activeCourse["Course Name"]}
          handleSaveCourse={handleSaveCourse}
          savedCourses={savedCourses && savedCourses}
        />
      ) : (
        <></>
      )}
      <FilterBar
        useSearch={useSearch}
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
                  course={x}
                  handleViewCourse={handleViewCourse}
                  handleAddCurriculum={handleAddCurriculum}
                  handleSaveCourse={handleSaveCourse}
                  savedCourses={savedCourses && savedCourses}
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
                  handleSaveCourse={handleSaveCourse}
                  savedCourses={savedCourses}
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
                curriculum={x}
                savedCurriculums={savedCurriculums}
                setSavedCurriculums={setSavedCurriculums}
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
            getCurriculums={getCurriculums}
            items={curriculumItems}
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

const ListView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

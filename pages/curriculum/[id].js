import styled from "styled-components";
import {
  useSavedCourses,
  useSavedCurriculums,
  useServer,
  useTheme,
  useUser,
} from "@/utils/provider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ax from "axios";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import QuestionButton from "@/components/QuestionBotton";
import HighlightsL from "@/components/HighlightsL";
import DropZone from "@/components/DropZone";
import DragComp from "@/components/DragComp";

export default function Home({ username = "Julian", curriculumN = "UX" }) {
  const [ns, setNs] = useState({});

  const r = useRouter();
  const { id } = r.query;

  const { theme } = useTheme();

  const { server } = useServer();

  const [curriculum, setCurriculum] = useState(null);

  const [courses, setCourses] = useState(null);

  const { user, setUser } = useUser();

  const { savedCurriculums, setSavedCurriculums } = useSavedCurriculums();

  const completeCourse = async (course, complete) => {
    await ax
      .post(`${server}/user/completeCourse`, {
        uid: user.uid,
        curId: id,
        course: course,
        complete: complete,
      })
      .then(function (response) {
        console.log(response.data);
        setCourses(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const cur = savedCurriculums.filter((x) => x.id === id);
    setCurriculum(cur[0]);
    setCourses(cur[0].courses);
  }, []);

  const onDropItem = (item, complete) => {
    completeCourse(item, complete);
  };

  return (
    <Cont>
      currciculm{id}
      <TopCont>
        <Greeting onClick={() => completeCourse()}>
          Welcome to <br></br> {curriculum && curriculum.username}'s{" "}
          {curriculum && curriculum.name} Curriculum👋
        </Greeting>
        <QuestionButton />
      </TopCont>
      <BtCot>
        <SubHeading>
          <Bar></Bar>
          <SubText>Curriculum Process ✔️</SubText>
        </SubHeading>
        <DndProvider backend={HTML5Backend}>
          <DragCont>
            <ProcessCont>
              <HighlightsL />
              <DropZone
                backend={TouchBackend}
                options={{
                  enableTouchEvents: false,
                  enableMouseEvents: true,
                }}
                onDropItem={(item) => onDropItem(item, 0)}
                completeCourse={completeCourse}
              >
                {courses &&
                  courses
                    .filter((x) => x.complete == 0)
                    .map((x) => (
                      <DragComp
                        course={x}
                        complete={x.complete}
                        ratingCount={x["Course Rating"]}
                        difficulty={x["Difficulty Level"]}
                        courseName={x["Course Name"]}
                        teachingSource={x["University"]}
                      />
                    ))}
              </DropZone>
            </ProcessCont>
            <ProcessCont>
              <HighlightsL Label="Processing 💪 ✨" background="#FFEBCC" />

              <DropZone
                backend={TouchBackend}
                options={{
                  enableTouchEvents: false,
                  enableMouseEvents: true,
                }}
                onDropItem={(item) => onDropItem(item, 1)}
                completeCourse={completeCourse}
              >
                {courses &&
                  courses
                    .filter((x) => x.complete == 1)
                    .map((x) => (
                      <DragComp
                        complete={x.complete}
                        ratingCount={x["Course Rating"]}
                        difficulty={x["Difficulty Level"]}
                        courseName={x["Course Name"]}
                        teachingSource={x["University"]}
                      />
                    ))}
              </DropZone>
            </ProcessCont>
            <ProcessCont>
              <HighlightsL Label="Completed 🙌 ✅ " background="#C8F8CD" />

              <DropZone
                backend={TouchBackend}
                options={{
                  enableTouchEvents: false,
                  enableMouseEvents: true,
                }}
                onDropItem={(item) => onDropItem(item, 2)}
                completeCourse={completeCourse}
              >
                {courses &&
                  courses
                    .filter((x) => x.complete == 2)
                    .map((x) => (
                      <DragComp
                        complete={x.complete}
                        ratingCount={x["Course Rating"]}
                        difficulty={x["Difficulty Level"]}
                        courseName={x["Course Name"]}
                        teachingSource={x["University"]}
                      />
                    ))}
              </DropZone>
            </ProcessCont>
          </DragCont>
        </DndProvider>
        <ChatCont></ChatCont>
      </BtCot>
    </Cont>
  );
}

const Cont = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

const TopCont = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: 92px;
`;
const BtCot = styled.div`
  width: 70vw;
  display: flex;

  flex-direction: column;
`;
const SubHeading = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 62px;
`;
const DragCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  justify-content: space-around;
`;
const Bar = styled.div`
  width: 5px;
  height: 25px;
  background: #ffc403;
  margin-right: 20px;
`;

const SubText = styled.div`
  font-size: 18px;
`;
const ChatCont = styled.div``;

const ProcessCont = styled.div``;

const Greeting = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 74px;
  color: #000000;
  margin: 95px 0 0 0;
  width: 80%;
`;
const Divider = styled.div`
  display: flex;
  align-items: center;
  height: 0.5;
  width: 80%;
  background: #d8d8d8;
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

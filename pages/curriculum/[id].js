import styled from "styled-components";
import {
  useActiveCourse,
  useMyCurriculums,
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
import { io } from "socket.io-client";
import Chat from "@/components/Chat";
import CurriculumSliderBasic from "@/components/CurriculumSliderBasic";
import { ConstructionOutlined } from "@mui/icons-material";
import CourseDetailCard from "@/components/CourseDetailCard";

export default function Home({ username = "Julian", curriculumN = "UX" }) {
  /*   //sockets
  const [mySoc, setMySoc] = useState(null)
  const [blocks, setBlocks] = useState([])
  const [txt, setTxt] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(()=>{
    const socket = io("http://localhost:8888")

    socket.on("change", (id, txt)=>{
        setBlocks((prev)=>[
            ...prev,
            <Text>
               {txt} 
            </Text>,
            // <TextShow>
            //     {id} is typing...
            // </TextShow>
            
        ])
    })

    setMySoc(socket)
    setTxt("")
},[])

const AlertPpl = async ()=>{
    mySoc.emit("alert", txt)
}
 */

  //d + d
  const r = useRouter();
  const { id } = r.query;

  const { theme } = useTheme();

  const { server } = useServer();

  const [curriculum, setCurriculum] = useState(null);

  const [courses, setCourses] = useState(null);

  const { user, setUser } = useUser();

  const { savedCurriculums, setSavedCurriculums } = useSavedCurriculums();

  const {
    activeCourse,
    setActiveCourse,
    handleViewCourse,
    viewCourse,
    setViewCourse,
  } = useActiveCourse();

  const completeCourse = async (course, complete) => {
    await ax
      .put(`${server}/user/completeCourse`, {
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

  const getCurriculumById = async () => {
    const res = await ax.get(`${server}/curriculum/${id}`);
    setCurriculum(res.data[0]);
  };

  useEffect(() => {
    const cur = savedCurriculums.filter((x) => x.id === id);

    if (cur.length > 0) {
      setCurriculum(cur[0]);
      setCourses(cur[0].courses);
    } else {
      getCurriculumById();
    }
  }, [savedCurriculums]);

  const onDropItem = (item, complete) => {
    completeCourse(item, complete);
  };

  /*   useEffect(() => {
    setCourses(savedCurriculums.courses)
  },[savedCurriculums]) */

  console.log(curriculum);
  return (
    <Cont>
      {viewCourse ? (
        <CourseDetailCard
          setViewCourse={setViewCourse}
          course={activeCourse}
          courseName={activeCourse && activeCourse["Course Name"]}
        />
      ) : (
        <></>
      )}
      {/*       currciculm{id} */}
      <TopCont>
        <Greeting onClick={() => completeCourse()}>
          Welcome to <br></br>{" "}
          {curriculum && curriculum.username == user.name
            ? "Your"
            : curriculum && curriculum.username + "'s"}{" "}
          {curriculum && curriculum.name} Curriculum👋
        </Greeting>
        <QuestionButton />
      </TopCont>
      <BtCot>
        {courses ? (
          <>
            <SubHeading>
              <Bar></Bar>
              <SubText>Curriculum Progress ✔️</SubText>
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
                            key={x["Course Name"]}
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
                            key={x["Course Name"]}
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
                            key={x["Course Name"]}
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
              </DragCont>
            </DndProvider>
          </>
        ) : (
          <CurriculumSliderBasic
            favouriteCount={curriculum && curriculum["likes"]}
            handleViewCourse={handleViewCourse}
            curriculum={curriculum && curriculum}
            courses={curriculum && curriculum.courses}
          />
        )}
        <SubHeading style={{ margin: " 0 0 40px 0" }} id="chat">
          <Bar></Bar>
          <SubText>Chat 💬</SubText>
        </SubHeading>
        <ChatCont>
          <Chat />
        </ChatCont>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: 92px;
  padding: 0 15%;
`;
const BtCot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SubHeading = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 62px;
  padding: 0 15%;
`;
const DragCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 0 97px 0;
  padding: 0 15%;

  justify-content: space-between;
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
const ChatCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  padding: 0 15%;
`;

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

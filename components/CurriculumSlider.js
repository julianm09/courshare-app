import styled from "styled-components";
import { useState } from "react";
import RatingStars from "@/components/RatingStars";
import DifficultyBar from "@/components/DifficultyBar";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useRouter } from "next/router";
import {
  useActiveCurriculum,
  useSavedCurriculums,
  useServer,
  useTheme,
  useUser,
} from "@/utils/provider";
import { comp_themes } from "@/utils/variables";
import ax from "axios";
import ScrollContainer from "react-indiana-drag-scroll";

export default function CurriculumSlider({
  avasrc = "/avatar.png",
  avaText = "Juhee's UX/UI DesignCurriculum",
  favouriteCount = "",
  courses,
  handleViewCourse,
  curriculum,
}) {
  const { theme, setTheme } = useTheme();
  const { user } = useUser();
  const { savedCurriculums, setSavedCurriculums } = useSavedCurriculums();
  const { server } = useServer();


  const r = useRouter();

  const [likes, setLikes] = useState(null);

  const saveCurriculum = async (curriculum) => {
    await ax
      .post(`${server}/user/saveCurriculum`, {
        curriculum: curriculum,
        uid: user.uid,
      })
      .then(function (response) {
        console.log(response.data.curriculums);
        setSavedCurriculums(response.data.curriculums);
        setLikes(response.data.likes);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSaveCurriculum = () => {
    saveCurriculum(curriculum);
    console.log(curriculum);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <Cont>
      <TitleCont>
        <LeftCont>
          <AvatarText
            color={comp_themes[theme].switch_text}
            onClick={() => r.push(`/curriculum/${curriculum.id}`)}
          >
            {curriculum && curriculum.uid === user.uid
              ? avaText + " by " + "me"
              : avaText + " by " + curriculum.username}
          </AvatarText>
        </LeftCont>
        <RightCont color={comp_themes[theme].switch_text}>
          {/* {user.uid === curriculum.uid ? "delete" : ""} */}
          {likes ? likes : favouriteCount}
          <Checkbox
            checked={
              savedCurriculums &&
              savedCurriculums.some((i) => i["id"].includes(curriculum.id))
            }
            onClick={() => handleSaveCurriculum()}
            sx={{
              color: purple[800],
              height: 30,
              "&.Mui-checked": {
                color: purple[600],
                height: 30,
              },
            }}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </RightCont>
      </TitleCont>
      <Slider className="scroll-container" onMouseDown={handleMouseDown}>
        <InnerSlider>
          {courses.map((x, i) => (
            <BoxCont key={i} onClick={() => handleViewCourse(x)}>
              <Img src={x["Image"]} onMouseDown={handleMouseDown} />
              <InfoCont>
                <Title color={comp_themes[theme].switch_text}>
                  {x["Course Name"].length > 20
                    ? x["Course Name"].slice(0, 20) + "..."
                    : x["Course Name"]}
                </Title>
                <Source>
                  {x["University"].length > 25
                    ? x["University"].slice(0, 25) + "..."
                    : x["University"]}
                </Source>
                <Rating color={comp_themes[theme].switch_text}>
                  <RatingStars />
                  {x["Course Rating"]}
                </Rating>
                <Challenge color={comp_themes[theme].switch_text}>
                  <DifficultyBar difficulty="beginner" />
                  {x["Difficulty Level"]}
                </Challenge>
              </InfoCont>
            </BoxCont>
          ))}
        </InnerSlider>
      </Slider>
    </Cont>
  );
}

const Cont = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  width: 100%;
  margin: 0 0 112px 0;
`;

const TitleCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 32px 0;
  padding: 0 10%;
`;

const LeftCont = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarText = styled.div`
  font-size: 20px;
  white-space: nowrap;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const RightCont = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${(props) => props.color};
`;

const Slider = styled(ScrollContainer)`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
`;

const InnerSlider = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  left: 10%;
`;

const BoxCont = styled.div`
  height: 124px;
  display: flex;
  box-shadow: 0px 0px 8px rgba(185, 185, 185, 0.52);
  border-radius: 10px;
  margin: 0 45px 0 0;
  cursor: pointer;
`;

const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 14px 30px;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  white-space: nowrap;
  width: 155px;
  padding: 10px 0;
`;

const Img = styled.img`
  width: 236px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 14px;
  color: ${(props) => props.color};
`;

const Source = styled.div`
  font-size: 12px;
  color: #aaa;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15%;
  font-size: 12px;
  color: ${(props) => props.color};
`;

const Challenge = styled.div`
  font-size: 12px;
  color: ${(props) => props.color};
`;

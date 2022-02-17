import styled from "styled-components";
import ExploreButton from "@/components/ExploreButton";
import { style } from "@mui/system";

export default function Home() {
  return (
    <BigCont>
      <LeftCont>
        <Header>Welcome, Juhee!</Header>
        <Name>
          Build Your Skills and explore our students' all-in-one curriculums.
        </Name>

        <ExploreButton />
      </LeftCont>
      <RightCont>
        <GroupImg src="/icons/Group.png" />
      </RightCont>
    </BigCont>
  );
}

const BigCont = styled.div`
  width: 100%;
height:80%
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  align-items: flex-start;
`;
const RightCont = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;

const Header = styled.div`
  font-family: General Sans;

  font-size: 30px;
  line-height: 70px;
  /* identical to box height, or 175% */

  color: #000000;
`;

const Name = styled.div`
  line-height: 50px;
  font-family: General Sans;
  font-size: 20px;
  color: #000000;
`;

const ExploreBtn = styled.button``;

const GroupImg = styled.img``;

import styled from "styled-components";
import ExploreButton from "@/components/ExploreButton";

export default function Home() {
  return (
    <Cont>
      <Header>Welcome,Juhee!</Header>
      <Name>
        Build Your Skills and explore our students' all-in-one curriculums.
      </Name>

      {/* <ExploreBtn> */}
      <ExploreButton />
      {/* </ExploreBtn> */}

      <GroupImg src="/icons/Group.png" />
    </Cont>
  );
}

const Cont = styled.div`
  position: flex;
`;

const Header = styled.div`
  position: relative;
  left: 67px;
  top: 140px;

  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 70px;
  /* identical to box height, or 175% */

  color: #000000;
`;

const Name = styled.div`
  width: 551px;
  height: 100px;
  line-height: 50px;
  left: 70px;
  top: 220px;
  position: relative;
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  color: #000000;
  word-break: break-word;
`;

const ExploreBtn = styled.button`
  position: relative;
  left: 74px;
  top: -250px;
`;

const GroupImg = styled.img`
  position: relative;
  left: 550px;
  top: -120px;
`;

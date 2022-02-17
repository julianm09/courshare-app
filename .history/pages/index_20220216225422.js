import styled from "styled-components";
import ExploreButton from "@/components/ExploreButton";
import { style } from "@mui/system";

export default function Home() {
  return (
    <BigCont>
      <Cont>
        <Header>Welcome,Juhee!</Header>
        <Name>
          Build Your Skills and explore our students' all-in-one curriculums.
        </Name>

        <ExploreButton />
      </Cont>
      <Cont>
        <GroupImg src="/icons/Group.png" />
      </Cont>
    </BigCont>
  );
}

const BigCont = styled.div`
  width: 90%;
  margin: 0 5%;
  padding: 0 0 0 8%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 70px;
  /* identical to box height, or 175% */

  color: #000000;
`;

const Name = styled.div`
  line-height: 50px;

  font-family: General Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  color: #000000;
  word-break: break-word;
`;

const ExploreBtn = styled.button``;

const GroupImg = styled.img``;

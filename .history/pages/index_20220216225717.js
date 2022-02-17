import styled from "styled-components";
import ExploreButton from "@/components/ExploreButton";
import { style } from "@mui/system";

export default function Home() {
  return (
    <BigCont>
      <Cont>
        <Header>Welcome, Juhee!</Header>
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
  width: 100%;
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.div`
  font-family: General Sans;

  font-size: 36px;
  line-height: 70px;
  /* identical to box height, or 175% */

  color: #000000;
`;

const Name = styled.div`
  line-height: 50px;
  font-family: General Sans;
  font-size: 24px;
  color: #000000;
`;

const ExploreBtn = styled.button``;

const GroupImg = styled.img``;

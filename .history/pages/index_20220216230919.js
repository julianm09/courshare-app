import styled from "styled-components";
import ExploreButton from "@/components/ExploreButton";
import { useState } from "react";
import { style } from "@mui/system";
import { useRouter } from "next/router";

export default function Home() {
  const r = useRouter();

  const [menu, setMenu] = useState(false);

  const handleLink = (t) => {
    setMenu(false);
    r.push(t);
  };
  return (
    <BigCont>
      <LeftCont>
        <Header>Welcome, Juhee!</Header>
        <Name>
          Build Your Skills and explore our students' all-in-one curriculums.
        </Name>

        <ExploreButton onClick={() => handleLink("/explore")} />
      </LeftCont>
      <RightCont>
        <GroupImg src="/icons/Group.png" />
      </RightCont>
    </BigCont>
  );
}

const BigCont = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2% 5%;
`;
const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
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

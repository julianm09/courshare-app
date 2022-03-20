import styled from "styled-components";
import ExploreButton from "@/components/ExploreButton";
import { useTheme, useUser } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Login from "@/components/Login";
import DragComp from "@/components/DragComp";
import ChatInput from "@/components/ChatInput";

export default function Home({}) {
  const r = useRouter();

  const { theme } = useTheme();

  const { user, setUser } = useUser();

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    if (localUser) {
      setUser(JSON.parse(localUser));
    } else {
      return;
    }
  }, []);

  return (
    <>
      {!user ? <Login /> : <></>}
      <BigCont>
        <LeftCont>
          <Header color={comp_themes[theme].switch_text}>
            Welcome, {user && user.name}!
          </Header>
          <Name color={comp_themes[theme].switch_text}>
            Build Your Skills and explore our students' all-in-one curriculums.
          </Name>

          <ExploreButton onClick={() => r.push("/explore")} />
        </LeftCont>
        <RightCont>
          <GroupImg src="/landingvector.svg" />
        </RightCont>
      </BigCont>
    </>
  );
}

const BigCont = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
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

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 5% 0 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Header = styled.div`
  font-family: General Sans;
  font-size: 36px;
  line-height: 70px;
  color: ${(props) => props.color};
`;

const Name = styled.div`
  line-height: 50px;
  font-family: General Sans;
  font-size: 24px;
  color: ${(props) => props.color};
`;

const GroupImg = styled.img`
  width: 70%;
`;

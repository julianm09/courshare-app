import styled from "styled-components";
import ExploreButton from "@/components/ExploreButton";
import Link from "next/link";
import { style } from "@mui/system";
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";
import { useRouter } from "next/router";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const r = useRouter();


  return (
    <BigCont>
      <LeftCont>
        <Header color={comp_themes[theme].switch_text}>Welcome, Juhee!</Header>
        <Name color={comp_themes[theme].switch_text}>
          Build Your Skills and explore our students' all-in-one curriculums.
        </Name>
        <Link href="/explore">
          <ExploreButton onClick={() => r.push("/explore")}/>
        </Link>
      </LeftCont>
      <RightCont>
        <GroupImg src="/landingvector.svg" />
      </RightCont>
    </BigCont>
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

  @media(max-width: 1000px){
    width: 100%;
  }
`;
const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 5% 0 0;

  @media(max-width: 1000px){
    display: none;
  }
`;

const Header = styled.div`
  font-family: General Sans;

  font-size: 36px;
  line-height: 70px;
  /* identical to box height, or 175% */

  color: ${(props) => props.color};
`;

const Name = styled.div`
  line-height: 50px;
  font-family: General Sans;
  font-size: 24px;
  color: ${(props) => props.color};
`;

const ExploreBtn = styled.button``;

const GroupImg = styled.img`
  width: 70%;
`;

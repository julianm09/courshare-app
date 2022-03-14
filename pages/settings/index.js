import * as React from "react";
import styled from "styled-components";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Divider from "@mui/material/Divider";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import { useTheme, useUser } from "@/utils/provider";
import { useView } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { view, setView } = useView();

  const r = useRouter();

  const { user, setUser } = useUser();

  useEffect(() => {
    const localUser = localStorage.getItem("user");

    if (localUser) {
      setUser(JSON.parse(localUser));
      console.log(JSON.parse(localUser));
    } else {
      return;
    }
  }, []);

  const handleSignOut = async (e) => {
    if (user) {
      signOut(auth)
        .then(() => {
          setUser(null);
          localStorage.clear();
          r.push("/");
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <BigCont>
      <HeadingCont>
        <Heading color={comp_themes[theme].switch_text}>Settings</Heading>
      </HeadingCont>
      <Divider light />
      <ContentCont>
        <Cont>
          <Heading2 color={comp_themes[theme].switch_text}>Appearance</Heading2>
          <RowCont>
            <LeftCont>
              <NightlightIcon style={{ color: "#8c8c8c" }} />
              <BodyText color={comp_themes[theme].switch_text}>
                Night Mode
              </BodyText>
            </LeftCont>
            <RightCont>
              <Switch
                checked={theme === "dark" ? true : false}
                color="secondary"
                onClick={() => setTheme(theme === "dark" ? "default" : "dark")}
              />
            </RightCont>
          </RowCont>
        </Cont>
        <Divider light />
        <Cont>
          <Heading2 color={comp_themes[theme].switch_text}>View</Heading2>
          <RowCont>
            <LeftCont>
              <FormatListBulletedIcon style={{ color: "#8c8c8c" }} />
              <BodyText color={comp_themes[theme].switch_text}>List</BodyText>
            </LeftCont>
            <RightCont>
              <Radio
                onClick={() => setView("list")}
                size="small"
                color="secondary"
                checked={view === "list" ? true : false}
              />
            </RightCont>
          </RowCont>
          <RowCont>
            <LeftCont>
              <GridViewIcon style={{ color: "#8c8c8c" }} />
              <BodyText color={comp_themes[theme].switch_text}>Grid</BodyText>
            </LeftCont>

            <RightCont>
              {" "}
              <Radio
                onClick={() => setView("grid")}
                checked={view === "grid" ? true : false}
                size="small"
                color="secondary"
              />
            </RightCont>
          </RowCont>
        </Cont>
        <Divider light />
        <Cont></Cont>
        <div onClick={handleSignOut}>sign out</div>
      </ContentCont>
    </BigCont>
  );
}

const BigCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 291px;
  font-family: General Sans;
  margin-top: 5%;
`;

const HeadingCont = styled.div`
  margin: 40px 0;
`;
const Heading = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-weight: 400;
  color: ${(props) => props.color};
`;
const ContentCont = styled.div``;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;
const Heading2 = styled.p`
  font-size: 16px;
  color: ${(props) => props.color};
`;
const RowCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
`;
const LeftCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RightCont = styled.div``;

const BodyText = styled.div`
  font-size: 14px;
  color: #8c8c8c;
  margin-left: 10px;
  color: ${(props) => props.color};
`;

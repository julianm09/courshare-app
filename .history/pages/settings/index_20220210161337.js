import * as React from "react";
import styled from "styled-components";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Divider from "@mui/material/Divider";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const BigCont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 291px;
  font-family: General Sans;
  margin-top: 5%;
`;

const HeadingCont = styled.div``;
const Heading = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-weight: 400;
`;
const ContentCont = styled.div``;
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
const Heading2 = styled.p`
  font-size: 16px;
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
`;

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function Settings() {
  return (
    <BigCont>
      <HeadingCont>
        <Heading>Settings</Heading>
      </HeadingCont>
      <Divider light />
      <ContentCont>
        <Cont>
          <Heading2>Appearance</Heading2>
          <RowCont>
            <LeftCont>
              <NightlightIcon style={{ color: "#8c8c8c" }} />
              <BodyText>Night Mode</BodyText>
            </LeftCont>
            <RightCont>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </RightCont>
          </RowCont>
        </Cont>
        <Divider light />
        <Cont>
          <Heading2>View</Heading2>
          <RowCont>
            <LeftCont>
              <GridViewIcon style={{ color: "#8c8c8c" }} />
              <BodyText>Grid</BodyText>
            </LeftCont>
            <RightCont></RightCont>
          </RowCont>
          <RowCont>
            <LeftCont>
              <FormatListBulletedIcon style={{ color: "#8c8c8c" }} />
              <BodyText>List</BodyText>
            </LeftCont>
            <RightCont></RightCont>
          </RowCont>
        </Cont>
        <Divider light />
        <Cont></Cont>
      </ContentCont>
    </BigCont>
  );
}

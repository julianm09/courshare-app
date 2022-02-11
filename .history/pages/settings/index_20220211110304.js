import * as React from "react";
import styled from "styled-components";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Divider from "@mui/material/Divider";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { green } from "@mui/material/colors";

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

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: green[600],
    "&:hover": {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: green[600],
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
              <GreenSwitch {...label} defaultChecked />
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

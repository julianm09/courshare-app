import * as React from "react";
import styled from "styled-components";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Divider from "@mui/material/Divider";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import { useTheme } from "@/utils/provider";
import { useView } from "@/utils/provider";
import { comp_themes } from "@/utils/variables";

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

// const GreenSwitch = styled(Switch)(({ theme }) => ({
//   "& .MuiSwitch-switchBase.Mui-checked": {
//     color: yellow[600],
//   },
//   "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
//     backgroundColor: yellow[600],
//   },
// }));

export default function Settings() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const { theme, setTheme } = useTheme();
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
              <Radio {...controlProps("a")} size="small" color="secondary" />
            </RightCont>
          </RowCont>
          <RowCont>
            <LeftCont>
              <GridViewIcon style={{ color: "#8c8c8c" }} />
              <BodyText color={comp_themes[theme].switch_text}>Grid</BodyText>
            </LeftCont>

            <RightCont>
              {" "}
              <Radio {...controlProps("b")} size="small" color="secondary" />
            </RightCont>
          </RowCont>
        </Cont>
        <Divider light />
        <Cont></Cont>
      </ContentCont>
    </BigCont>
  );
}

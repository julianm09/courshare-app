import styled from "styled-components";
import { useState } from "react";
import Checkbox from "./Checkbox";
import AddedBadge from "./AddedBadge";
import CloseIcon from "@mui/icons-material/Close";

export default function AddCurriculumForm({
  setAddCurriculum,
  name = "",
  categories = [
    "Design and Product",
    "Accounting",
    "Data Analysis",
    "Management",
    "Logistics",
    "Business Analysis",
    "Programming",
    "Web Development",
    "Sales",
    "Data Management",
    "Communication",
    "Databases",
    "Computer Networking",
    "Computer Science",
    "Finance",
    "Machine Learning",
    "Software Engineering",
    "Computer Interaction",
    "Probability & Statistics",
    "Business Psychology",
    "Security Engineering",
    "Human Resources",
    "Entrepreneurship",
    "Computer Architecture",
    "Operations",
    "Research and Design",
    "Cloud Computing",
    "Marketing",
    "Computer Graphics",
    "Data Visualization",
    "DevOps",
    "Operating Systems",
  ],
}) {
  const [showCategory, setShowCategory] = useState(false);

  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState("");
  const [addedCurriculum, setAddedCurriculum] = useState(false);

  const handleSelect = (x) => {
    setSelected(x);
  };

  const handleAddCurriculum = () => {
    setAddedCurriculum(true);

    setTimeout(() => {
      setAddCurriculum(false);
      setAddedCurriculum(true);
    }, 1000);
  };

  return (
    <Overlay onClick={() => setAddCurriculum(false)}>
      {addedCurriculum ? (
        <AddedBadge />
      ) : (
        <Cont onClick={(e) => e.stopPropagation()}>
          <ButtonCont>
            <CloseIcon />
          </ButtonCont>
          <ContentCont>
            <Title>Add curriculum</Title>
            <Label>Name</Label>
            <Input />
            <Label>Category</Label>
            <Drowpdown onClick={() => setShowCategory(!showCategory)}>
              Select your curriculum category
              <Icon>
                {showCategory ? (
                  <img src="/icons/up-caret.svg" />
                ) : (
                  <img src="/icons/down-caret.svg" />
                )}
              </Icon>
            </Drowpdown>
            {showCategory ? (
              <DrowpdownBox>
                <CategoryCont>
                  {categories.slice(0, showAll ? 32 : 8).map((x) => (
                    <Category>
                      <Checkbox
                        handleSelect={handleSelect}
                        x={x}
                        setSelected={setSelected}
                        selected={selected}
                      />
                      <div>{x}</div>
                    </Category>
                  ))}
                </CategoryCont>
                {showAll ? (
                  <ShowAll onClick={() => setShowAll(!showAll)}>
                    Show Less
                  </ShowAll>
                ) : (
                  <ShowAll onClick={() => setShowAll(!showAll)}>
                    Show All
                  </ShowAll>
                )}
              </DrowpdownBox>
            ) : (
              <></>
            )}

            <AddButton onClick={handleAddCurriculum}>Add</AddButton>
          </ContentCont>
        </Cont>
      )}
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.74);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const Cont = styled.div`
  width: 100%;
  max-width: 419px;
  min-height: 432px;
  background: #ffffff;
  filter: drop-shadow(4px 4px 20px rgba(58, 58, 58, 0.61));
  border: 1px solid rgba(117, 117, 117, 0.003);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  padding: 40px 0;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

const Title = styled.div`
  width: 80%;
  max-width: 295px;
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  margin: 0 0 26px 0;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 20px;
`;

const Label = styled.div`
  width: 80%;
  max-width: 295px;
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin: 0 0 9px 0;
`;

const Input = styled.input`
  height: 46px;
  width: 80%;
  max-width: 295px;
  height: 40px;
  border: 0.5px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 0 22px 0;
  background: #ffffff;
  padding: 0 18px;
  font-family: General Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

const Drowpdown = styled.div`
  height: 46px;
  width: 80%;
  max-width: 295px;
  height: 40px;
  border: 0.5px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 18px;
  font-family: General Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 0 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DrowpdownBox = styled.div`
  min-height: 162px;
  height: auto;
  width: 295px;
  width: 80%;
  max-width: 295px;
  border: 0.5px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 18px 36px 18px;
  font-family: General Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  z-index: 100;
  background: #ffffff;
`;

const CategoryCont = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 12px 0;
  grid-template-rowss: auto;

  @media (max-width: 800px) {
    grid-template-columns: 2fr;
  }
`;

const Category = styled.div`
  font-family: General Sans;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ShowAll = styled.div`
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 19px;
  color: #ffc403;
  cursor: pointer;
  position: absolute;
  right: 18px;
  bottom: 12px;
`;

const AddButton = styled.div`
  width: 121px;
  height: 41px;
  background: #ffc403;
  border-radius: 10px;
  cursor: pointer;
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 49px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

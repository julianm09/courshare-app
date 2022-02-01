import styled from "styled-components";
import { useState } from "react";

export default function AddCurriculumForm({}) {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <Cont>
      <Title>Add curriculum</Title>
      <Label>Name</Label>
      <Input />

      <Label>Category</Label>
      <Drowpdown onClick={() => setShowCategory(!showCategory)}>
        Select your curriculum category
      </Drowpdown>
      {showCategory ? <DrowpdownBox /> : <></>}
    </Cont>
  );
}

const Cont = styled.div`
  width: 90%;
  max-width: 519px;
  height: 528px;
  background: #fffdf8;
  filter: drop-shadow(4px 4px 20px rgba(58, 58, 58, 0.61));
  border: 1px solid rgba(117, 117, 117, 0.003);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 69px 0 49px 0;
`;

const Title = styled.div`
  width: 75%;
  max-width: 395px;
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 26px 0;
`;

const Label = styled.div`
  width: 75%;
  max-width: 395px;
  font-family: General Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 9px 0;
`;

const Input = styled.input`
  height: 46px;
  width: 75%;
  max-width: 395px;
  border: 0.5px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 0 22px 0;
  background: #fffdf8;
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
  width: 75%;
  max-width: 395px;
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
  height: 162px;
  width: 395px;
  width: 75%;
  max-width: 395px;
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
`;

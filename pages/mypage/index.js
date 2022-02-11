import SectionTabs from "@/components/SectionTabs";
import { useState } from "react";
import styled from "styled-components";

export default function MyPage() {
  const [section, setSection] = useState("One");

  return (
    <Cont>
      <SectionTabs
        value={section}
        setValue={setSection}
        one="Saved"
        two="Your Curriculums"
      />
    </Cont>
  );
}

const Cont = styled.div`
  width: 90%;
  margin: 0 5%;
  padding: 0 0 0 8%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

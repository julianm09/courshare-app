import styled from "styled-components";
import AddCurriculumForm from "@/components/AddCurriculumForm";

export default function julian() {
  return (
    <Cont>
      <AddCurriculumForm />
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
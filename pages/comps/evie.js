import styled from "styled-components";
import RegisterButton from "@/components/RegisterButton";
import AddCurriculum from "@/components/AddCurriculum";

export default function Evie() {
  return (
    <Cont>
      <RegisterButton/>
      <AddCurriculum/>
    </Cont>
  )
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
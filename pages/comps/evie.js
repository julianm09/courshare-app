import styled from "styled-components";
import RegisterButton from "@/components/RegisterButton";
import AddCurriculum from "@/components/AddCurriculum";
import InformCard from "@/components/InformCard";
import CourseCard from "@/components/CourseCard";
import Search from "@/components/search";

export default function Evie() {
  return (
    <Cont>
      <RegisterButton/>
      <AddCurriculum/>
      <InformCard/>
      <CourseCard/>
      <Search/>
    </Cont>
  )
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
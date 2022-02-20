import styled from "styled-components";
import CourseDetailCard from "@/components/CourseDetailCard";
import PageNavigation from "@/components/PageNavigationCourse";
import FilterBar from "@/components/FilterBar";

export default function Juhee() {
  return (
    <Cont>
      {/* make components here */}
{/*       <CourseDetailCard></CourseDetailCard>
      <Space />
      <PageNavigation></PageNavigation>
      <Space />
      <FilterBar></FilterBar> */}
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Space = styled.div`
  height: 100px;
`;

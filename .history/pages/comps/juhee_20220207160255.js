import styled from "styled-components";
import CourseDetailCard from "@/components/CourseDetailCard";
import PageNavigation from "@/components/PageNavigation";
import FilterBar from "@/components/FilterBar";

export default function Juhee() {
  return (
    <Cont>
      {/* make components here */}
      <CourseDetailCard></CourseDetailCard>
      <PageNavigation></PageNavigation>
      <FilterBar></FilterBar>
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

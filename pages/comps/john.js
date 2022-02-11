import AddedBadge from "@/components/AddedBadge";
import CourseCardLV from "@/components/CourseCardLV";
import CurriculumDropdown from "@/components/CurriculumDropdown";
import CurriculumSlider from "@/components/CurriculumSlider";
import ExploreButton from "@/components/ExploreButton";
import SortDropdown from "@/components/SortDropdown";
import styled from "styled-components";

export default function John() {
  return (
    <Cont>
      <AddedBadge/>
      <ExploreButton/>
      <SortDropdown/>
      <CurriculumDropdown />
      <CourseCardLV />
      <CurriculumSlider />
    </Cont>
  )
}

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`
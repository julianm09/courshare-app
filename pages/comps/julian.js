import styled from "styled-components";
import AddCurriculumForm from "@/components/AddCurriculumForm";
import FilterDropdown from "@/components/FilterDropdown";
import FilterDropdownSingle from "@/components/FilterDropdownSingle";
import RatingStars from "@/components/RatingStars";
import DifficultyBar from "@/components/DifficultyBar";

export default function julian() {
  return (
    <Cont>
{/*       <FilterDropdown />
      <Space />
      <FilterDropdownSingle />
      <Space />
      <RatingStars
        defaultValue={4.6}
        precision={0.5}
        readOnly={true}
        size={"small"}
        color={"black"}
      />
      <Space />
      <DifficultyBar difficulty={"Beginner"} size={"large"} />
      <Space /> */}
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

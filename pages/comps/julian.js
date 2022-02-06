import styled from "styled-components";
import AddCurriculumForm from "@/components/AddCurriculumForm";
import FilterDropdown from "@/components/FilterDropdown";

export default function julian() {
  return (
    <Cont>
      <AddCurriculumForm />
      <Space/>
      <FilterDropdown/>
    </Cont>
  );
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Space = styled.div`
  height: 100px;
`
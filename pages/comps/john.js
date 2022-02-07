import AddedBadge from "@/components/AddedBadge";
import ExploreButton from "@/components/ExploreButton";
import SortDropdown from "@/components/SortDropdown";
import styled from "styled-components";

export default function John() {
  return (
    <Cont>
      <AddedBadge/>
      <ExploreButton/>
      <SortDropdown/>
    </Cont>
  )
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
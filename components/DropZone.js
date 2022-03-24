import styled from "styled-components";
import { useDrag, useDrop } from "react-dnd";
import { useServer, useUser } from "@/utils/provider";

const DropZone = ({
  complete = 0,
  children = null,
  onDropItem = () => {},
  completeCourse = () => {},
}) => {
  const { user } = useUser();
  const { server } = useServer();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "DragCont",
    drop: (item, monitor) => {
      onDropItem(item.course);
    },
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <Cont ref={drop} bg={canDrop && isOver ? "#F3F3F3" : "#FcFcFc"}>
      {children}
    </Cont>
  );
};

export default DropZone;

const Cont = styled.div`
  width: 296px;
  min-height: 314px;
  background: ${({ bg }) => bg || "#FcFcFc"};
  border-radius: 10px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  margin: 20px 20px 20px 0;
  padding: 20px;
`;

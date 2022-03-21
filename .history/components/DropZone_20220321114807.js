import styled from "styled-components";

const DropZone = ({ props, children = null }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "",
    drop: (item, monitor) => {},
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return <Cont>{props.children}</Cont>;
};

export default DropZone;

const Cont = styled.div`
  width: 296px;
  height: 1014px;
  background: #fcfcfc;
  border-radius: 10px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  margin: 20px 20px 20px 0;
  padding: 20px;
`;

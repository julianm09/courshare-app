import styled from "styled-components";

const ChatInput = ({}) => {
  return <Input></Input>;
};

export default ChatInput;

const Input = styled.input.attrs({ type: "text" })`
  width: 944px;
  height: 82px;
  border: 1px solid #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
`;

const Text = styled.p`
  font-size: 16px;
`;

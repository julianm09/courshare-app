import styled from "styled-components";

const ChatInput = ({}) => {
  return (
    <InputChat>
      <Text>Hello</Text>
    </InputChat>
  );
};

export default ChatInput;

const InputChat = styled.input`
  type: text;
  width: 944px;
  height: 82px;
  border: 1px solid #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
`;

const Text = styled.p`
  font-size: 16px;
`;

import styled from "styled-components";

const ChatInput = ({}) => {
  return (
    <Cont>
      <Text>You got questions? Let's chat 💬</Text>
    </Cont>
  );
};

export default ChatInput;

const Cont = styled.div`
  width: 188px;
  height: 30px;
  background: #fcfcfc;
  border: 0.8px solid #d4d4d4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
`;

const Text = styled.p`
  font-size: 16px;
`;

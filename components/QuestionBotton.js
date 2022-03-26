import styled from "styled-components";
import Link from "next/link";

const QuestionButton = ({}) => {
  return (
    <Link href="#chat">
      <Cont>
        <Text>You got questions? Let's chat 💬</Text>
      </Cont>
    </Link>
  );
};

export default QuestionButton;

const Cont = styled.div`
  width: 265px;
  height: 30px;
  background: #fcfcfc;
  border: 0.8px solid #d4d4d4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 16px;
`;

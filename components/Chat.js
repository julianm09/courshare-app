import styled from "styled-components";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { textAlign } from "@mui/system";
import { useUser } from "@/utils/provider";
import { ConstructionOutlined } from "@mui/icons-material";

export default function Chat() {
  const [mySoc, setMySoc] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [txt, setTxt] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const { user, setUser } = useUser();

  useEffect(() => {
    const socket = io("http://localhost:8888");

    socket.on("change", (id, txt, uid, name) => {
      console.log(uid);
      setBlocks((prev) => [
        ...prev,
        { txt: txt, uid: uid, name: name },
        // <Text>{txt}</Text>,
        // <TextShow>
        //     {id} is typing...
        // </TextShow>
      ]);
    });

    setMySoc(socket);
    setTxt("");
  }, []);

  const AlertPpl = async () => {
    mySoc.emit("alert", txt, user.uid, user.name);
  };

  return (
    <>
      <TextCont>
        {blocks.map((o, i) => (
          <TextRow
            key={i.txt}
            justify={o.uid === user.uid ? "flex-end" : "flex-start"}
          >
            <TextBox>
              {o.name !== user.name && <Name>{o.name}</Name>}
              <Text color={o.uid === user.uid ? "#fff0da" : "grey"}>
                {o.txt}
              </Text>
            </TextBox>
          </TextRow>
        ))}
      </TextCont>
      <InputCont>
        <Input
          type="text"
          placeholder="Send any questions!"
          onChange={(e) => setTxt(e.target.value)}
        />
        <Btn onClick={AlertPpl}>
          <img src="/icons/bi_send-fill.png" />
        </Btn>
      </InputCont>
    </>
  );
}

const Cont = styled.div``;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 503px;
  background: #fcfcfc;
  box-shadow: 0px 2px 8px rgba(185, 185, 185, 0.52);
  border-radius: 10px;
  overflow: auto;
`;

const TextRow = styled.div`
  width: 100%;
  display: flex;
  align-items: ${(props) => props.justify};
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 30px;
`;

const Name = styled.div`
  margin: 0 0 5px 0;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  height: 31px;

  padding: 6px 9px;
  background: ${(props) => props.color};
  border-radius: 10px;
`;

const InputCont = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 39px 0 0 0;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 82px;
  border: 1px solid #d0d0d0;
  border-radius: 20px;
  padding: 0 0 0 26px;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 43px;
  position: absolute;
  right: 26px;
  background: #ffc403;
  border-radius: 14px;
  cursor: pointer;
`;

const TextShow = styled.div`
  position: fixed;
  left: 30px;
  top: 570px;
  font-family: "General Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

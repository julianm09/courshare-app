import styled from "styled-components";
import { io } from "socket.io-client";
import { useEffect,useState } from "react";
import { textAlign } from "@mui/system";

const Cont = styled.div`

`

const TextCont = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    width: 944px;
    height:503px;
    background: #FCFCFC;
    box-shadow: 0px 2px 8px rgba(185, 185, 185, 0.52);
    border-radius: 10px;
    overflow: auto;
`
const Text = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    height: 31px;
    margin-top: 10px;
    margin-right:30px;
    background: #FFF0DA;
    border-radius: 10px;
` 

const InputCont = styled.div`
    display:flex;
    align-items: center;
`

const Input = styled.input`
    width: 944px;
    height:82px;
    border: 1px solid #d0d0d0;
    border-radius:20px;
`

const Btn = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:43px;
    height:43px;
    margin-left: -60px;
    background: #ffc403;
    border-radius: 14px;
    cursor: pointer;
`

const TextShow = styled.div`
    position: fixed;
    left: 30px;
    top: 570px;
    font-family: 'General Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`

export default function Sockets() {
    const [mySoc, setMySoc] = useState(null)
    const [blocks, setBlocks] = useState([])
    const [txt, setTxt] = useState("")
    const [isTyping, setIsTyping] = useState(false)

    useEffect(()=>{
        const socket = io("http://localhost:8888")

        socket.on("change", (id, txt)=>{
            setBlocks((prev)=>[
                ...prev,
                <Text>
                   {txt} 
                </Text>,
                // <TextShow>
                //     {id} is typing...
                // </TextShow>
                
            ])
        })

        setMySoc(socket)
        setTxt("")
    },[])

    const AlertPpl = async ()=>{
        mySoc.emit("alert", txt)
    }

    return(
        <Cont>
            <TextCont>
               {blocks.map((o,i)=><div>
                {o}
            </div>)} 
            </TextCont>
            <InputCont>
            <Input type='text' placeholder="Send any questions!" onChange={(e)=>setTxt(e.target.value)} />
            <Btn onClick={AlertPpl}>
                <img src="/icons/bi_send-fill.png"/>
            </Btn>
            </InputCont>
        </Cont>
    )
}
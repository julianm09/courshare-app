import styled from "styled-components";

const InformCard = styled.div`
   width: 315px;
  height: 380px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  border-radius: 20px;

`

const BlueImg = styled.img`
position:relative;
top:10px;
left:15px;
`
const YellowImg = styled.img`
position:relative;
top:0px;
left:15px;
`

const Header = styled.div`
position:relative;
font-family: General Sans;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
left:25px;
top:10px;

`
const Name = styled.div`
position:relative;
font-family: General Sans;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
left:25px;
top:15px;
color: #8A8A8A;

`





const InformCd = ({
text="Juhee's Figma Curriculum",
data="Added by Juhee Kim",
}) =>{
    return (
        <InformCard> 
        <BlueImg src="/icons/bluecard.png"/>
        <YellowImg src="/icons/yellowcard.png"/>
        <Header>{text}</Header>
        <Name>{data}</Name>
        
        
        </InformCard>

        
    )
}






export default InformCd;
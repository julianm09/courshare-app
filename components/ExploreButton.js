import styled from "styled-components";

const ExploreBtn = styled.button`
    width:188px;
    height: 60px;
    background-color: ${props=>props.background};
    color: #fff;
    border-radius: 10px;
    border: none;
    font-size: 24px;
    font-weight: 400;
`

const ExploreButton = ({
    text = "Explore",
    background = "#4d328a"
}) =>{
    return (
        <ExploreBtn background={background}>{text}</ExploreBtn>
    )
}

export default ExploreButton
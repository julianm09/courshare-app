import styled from "styled-components";

const AddedBtn = styled.button`
    width: 253px;
    height: 79px;
    background-color: ${props=>props.background};
    font-size: 20px;
    border: none;
`

const AddedBadge = ({
    text = "Added to Curriculum",
    background = "#ffecad"
}) =>{
    return (
        <AddedBtn background={background}>{text}</AddedBtn>
    )
}

export default AddedBadge
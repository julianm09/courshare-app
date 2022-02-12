import styled from "styled-components";



const SearchBar = styled.div`
width: 503px;
height: 50px;
  background-color: #FFFFFF;
  box-shadow: 0px 2px 8px 0px rgba(185, 185, 185, 0.52);
  border-radius: 20px;

`
const Searchimg = styled.img`
position:relative;
left:470px;
top:13px;

`


const SearchPart = ({
    
    }) =>{
        return (
            <SearchBar> 
            
            <Searchimg src="/icons/search.png"/>
            
            </SearchBar>
    
            
        )
    }

    export default SearchPart





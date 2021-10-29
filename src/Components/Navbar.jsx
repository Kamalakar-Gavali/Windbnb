import styled from "styled-components";
import logo from '../resources/logo.svg'
import SearchBar from "./SearchBar";
const StyledNavbar=styled.div`
display:flex;
justify-content:space-between;  

& img{
    width:130px;
}
`;
const Navbar=()=>{

    return (
<StyledNavbar>
<img src={logo}/>
<SearchBar/>
</StyledNavbar>
    
    );

}

export default Navbar;

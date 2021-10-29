import styled from 'styled-components'
import {Search as SearchIcon} from '@mui/icons-material'

const StyledSearchBar=styled.div`
display:flex;
padding:5px;
background: #FFFFFF;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
border-radius: 16px;    
color:#BDBDBD;
& p{
    
    //  border-right:1px solid #F2F2F2;
    
}
& div{
width: 52px;
height: 0px;
margin-top:23px;
border: 1px solid #F2F2F2;
transform: rotate(90deg);
}

& span{
    display: flex;
    align-items: center;
    padding-right: 25px;
}

`;
const SearchBar=()=>{

    return (
<StyledSearchBar>
    <p>Search a City </p>
    <div></div>
    <p>Add guests</p>
    <div></div>
    <span><SearchIcon style={{color:'#EB5757',fontSize:'30px'}}/></span>
</StyledSearchBar>
    )
}
export default SearchBar;
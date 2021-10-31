import React from 'react';
import styled from 'styled-components'
import {Search as SearchIcon} from '@mui/icons-material'
import FilterBox from './FilterBox';
import { useContext } from 'react';
import {FilterContext} from'../Components/MainScreen'
const StyledSearchBar=styled.div`
display:flex;
padding:5px;
background: #FFFFFF;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
border-radius: 16px;    
color:#BDBDBD;
& p{
    
    //  border-right:1px solid #F2F2F2;
    &.active{
        color:#333333;
    }
    
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
const context=useContext(FilterContext);
    return (
<StyledSearchBar onClick={()=>{console.log("clicked");context.setShowFilter(true)}}>
    <p className={context.selectedCity && 'active'} onClick={()=>context.setShowCities(true)}>{context.selectedCity?context.selectedCity+', Finland':'Search a City'}</p>
    <div></div>
    <p className={(context.childrenCount+context.adultsCount)>0 && 'active'} onClick={()=>context.setShowGuestBox(true)}>{(context.childrenCount+context.adultsCount)>0?context.childrenCount+context.adultsCount:'Add guests'}</p>
    <div></div>
    <span><SearchIcon style={{color:'#EB5757',fontSize:'30px'}}/></span>
    
    {
        console.log('context Val',context)
    }
    
    {/* <FilterBox/> */}
</StyledSearchBar>
    )
}
export default SearchBar;
import React,{useState,createContext} from 'react'
import styled from "styled-components";
import Navbar from "./Navbar";
import Card from './Card'
import Footer from './Footer'
import stays from '../stays.json'
import FilterBox from "./FilterBox";

export const FilterContext=createContext('');

const StyledMainwrapper=styled.main`
font-family: Mulish;
font-style: normal;
font-weight: normal;
`;
const Wrapper=styled.div`
padding:32px 50px 10px;
max-width:2000px;
margin:0 auto;
@media (max-width:600px)
{
    padding:32px 5px 10px;
}
`;
const CardWrapper=styled.div`
display:flex;
// justify-content:space-between;
flex-wrap:wrap;
`;
const StaysInfo=styled.div`
width:100%;
font-family: Montserrat;

display:flex;
justify-content:space-between;
& p:first-child{
    font-size:24px;
}
& p:last-child{
    margin-top:28px;
}
`;


const MainScreen=()=>{

    const [showFilter,setShowFilter]=useState(false);
    const [a,setA]=useState(10);
    const [selectedCity,setSelectedCity]=useState('');
    const [adultsCount,setAdultsCount]=useState(0);
    const [childrenCount,setChildrenCount]=useState(0);
    const [staysData,setStaysData]=useState(stays)
    const [showCities,setShowCities]=useState(false);
    const [showGuestBox,setShowGuestBox]=useState(false);
    return(
    <FilterContext.Provider value={{showFilter,setShowFilter,staysData,setStaysData,selectedCity,setSelectedCity,adultsCount,setAdultsCount,childrenCount,setChildrenCount,showCities,setShowCities,showGuestBox,setShowGuestBox}}>
    <StyledMainwrapper >
    {showFilter  &&
    <FilterBox/>    
    }
    
    <Wrapper>
    {!showFilter  &&
    <Navbar/>
       }
    
    <StaysInfo>
<p>Stays in {} Finland</p>
<p>{staysData.length} stays</p>
    </StaysInfo>
    <CardWrapper>
    {
        staysData.map((stay)=>
        <Card data={stay}/>
        )
    }
    
    </CardWrapper>
    <Footer/>
    </Wrapper>
    </StyledMainwrapper>
    </FilterContext.Provider>
    );
}
export default MainScreen;
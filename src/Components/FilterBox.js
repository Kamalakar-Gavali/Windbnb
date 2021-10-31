import React, {useState,useContext} from 'react'
import styled from "styled-components";
import { Dialog,DialogTitle } from "@mui/material";
import {FilterContext} from '../Components/MainScreen'
import {LocationOn as LocationOnIcon,Search as SearchIcon,Close as CloseIcon } from '@mui/icons-material';
import stays from '../stays.json'
let darkGrey='#394753';
let lightGrey='#394753c7';
let tomato='tomato';
const Overlay=styled.div`
position:fixed;
width:100%;
height:45%;
background:black;
bottom:0;
opacity:0.5;
@media (max-width:510px)
{
    height:33%;
}
`;
const StyledFilterContainer=styled.div`
position:fixed;
background:white;
width:100%;
height:55%;
padding:20px 97px;//70 97
box-sizing:border-box;
display:flex;
justify-content:center;

@media (max-width:600px)
{
    padding:20px 10px;
}

& .wrapper{
width:100%;
max-width:2000px;    
}
& div.close{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 50px;
    width: calc(100% + 30px);

    @media (max-width:600px)
    {
        width: calc(100%);
    }
    & span{
        cursor:pointer;
    }
}

& .container{
    display:flex;

&:nth-child(2){
    box-shadow:0px 1px 6px rgb(0 0 0 / 10%);
    border-radius:16px;
}
&:nth-child(3){
    height:214px;
}

& div{
    width:40%;
    

    @media (max-width:510px)
{
    width:50%;
}
}
& div:nth-child(3){
    width:20%;
}
}
@media (max-width:510px)
{
    height:67%;
}


`;
const StyledFilterBox=styled.div`
// & div:first-child{
//     margin-top: 20px;
//     width: 95%;
//     display: flex;
//     justify-content: flex-end;
// }

`;
const StyledSearchStrip=styled.div`

`;
const StyledLocationBox=styled.div`
// position:absolute;
width:40%;
// height:50px;
display:flex;
padding:5px;
flex-direction:column;
// box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
// border-radius: 16px;

border-right:1px solid rgb(0 0 0 / 10%);
font-size: 14px;
&:focus-within{
border: 1px solid #333333;
box-sizing: border-box;
border-radius: 16px;
color:#828282;
}
& div{
    width:100% !important;
    display:flex;

    & input{
        height:25px;
        outline:none;
        border:none;
        width:100%;
    
    }
    & span{
        color:#333333;
        cursor:pointer;
    }
}
& p{
font-weight: 800;
font-size: 9px;
line-height: 11px;
text-transform: uppercase;
margin:2px;
}

`;
const StyledGuestBox=StyledLocationBox;

const StyledLocationBoxResult=styled.div`
display:flex;

 & ul{
     list-style-type:none;
     width:160px;
     color: #4F4F4F;
    font-size: 14px;
    // padding-left:25px;
    padding:0px;
    & li{
        display:flex;
        // justify-content:space-between;
        align-items:center;
        padding:10px 0px;
        margin:2px 0px;
        &:hover{
            background:${darkGrey};//7darkGrey;
            color:white;
            border:1px solid ${darkGrey};//#394753;
            border-radius:5px;
            font-size:16px;
        }
        &.active{
            background:${tomato};//#394753;
            color:white;        
            border:1px solid ${tomato};//#394753;
            border-radius:5px;
            font-size:16px;
        }
    }
     & span{
         margin-left:10px;
     }

     @media (max-width:600px)
{
    padding-left:0px;
}
 }

`;
const StyledGuestBoxResult=styled(StyledLocationBoxResult)`

justify-content:flex-start;
flex-direction:column;
justify-content:space-between;
// width:50%;
padding:27px 10px;
& div{
display:flex;
flex-direction:column;
width:50% !important;
// margin-top:10px;


p{
    margin:0px;
    font-weight:bold;
    font-size:14px;
    white-space:nowrap !important;
    &:nth-of-type(2){
        color:grey;    
        font-weight:normal;
        
    }
    }

& div{
display: flex;
flex-direction:row !important;
justify-content: space-between !important;
// width: 65% !important;
width:100px !important;
align-items: center !important;
height: 30px;

& button{
    color:#828282;
    background:white;
    border:1px solid #828282;
    border-radius: 4px;
    cursor:pointer;
}
& p{
  color:#333333 ;//!important;
  font-weight:600; //!important;
}
}



}

`;
const StyledSearchButton=styled.div`
// padding:10px;
background: #EB5757;
color:white;
font-weight:bold;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
border-radius: 16px;
justify-content: space-evenly;
display: flex;
align-items: center;
padding: 5px;
max-width: 110px;
height: 40px;
// margin-left:15px;
margin:5px 5px;
cursor:pointer;
& span{
height:26px;
}
@media (max-width:510px)
{
    display:none;
}
`;
const StyledSearchButtonForMobile=styled(StyledSearchButton)`
display:none;
margin-left:0px;
margin:0 auto;
@media (max-width:510px)
{
    display:flex;
}
`;
const FilterBox=()=>{
        const context=useContext(FilterContext)
        const cities=['Helsinki','Turku','Vaasa','Oulu']//context.staysData.map(stay=>stay.city).filter((stay,index,arr)=>arr.indexOf(stay)==index);
        
        

    const setFilterdata=()=>{

        let filtereddData=stays.filter((stay)=>(context.selectedCity &&(context.adultsCount+context.childrenCount)>0)?context.selectedCity &&stay.maxGuests>=(context.adultsCount+context.childrenCount): context.selectedCity|| stay.maxGuests>=(context.adultsCount+context.childrenCount));
        context.setShowFilter(false)
        
        console.log('Data',context.staysData)
        console.log('filtereddData',filtereddData)
        context.setStaysData(filtereddData)
        
    }
        
    return(
        
        <StyledFilterBox>
            
            <StyledFilterContainer 
            // onClick={(e)=>{e.preventDefault();context.setShowCities(false);context.setShowGuestBox(false)}}
            >
                <div className='wrapper'>
                <div className='close' >
                <span onClick={()=>context.setShowFilter(false)}><CloseIcon/></span>
                </div>
                
                <div className='container'>
            <StyledLocationBox>
            <p>Location</p>
            <div>
            <input placeholder='Add Location' value={context.selectedCity && context.selectedCity+', Finland'} onClick={(e)=>context.setShowCities(!context.showCities)}/>
            {
                context.selectedCity &&
            <span onClick={()=>{context.setSelectedCity('');context.setShowCities(true)}}><CloseIcon/></span>
            }
            </div>
            {/* <ul> */}
            
            {/* </ul> */}
            </StyledLocationBox>
            <StyledGuestBox>
            <p>Guest</p>
            <div>
            <input placeholder='Add Guest' value={(context.childrenCount+context.adultsCount)>0?(context.childrenCount+context.adultsCount)+' guests':''} onClick={(e)=>context.setShowGuestBox(!context.showGuestBox)}/>
            {
                (context.childrenCount+context.adultsCount)>0 &&
            <span onClick={()=>{context.setChildrenCount(0);context.setAdultsCount(0);context.setShowGuestBox(true)}}><CloseIcon/></span>
           }
            </div>
            </StyledGuestBox>
            <StyledSearchButton onClick={setFilterdata}>
            {/* <button onClick={setFilterdata}>Search</button> */}
            <span><SearchIcon style={{color:'white',fontSize:'30px'}}/></span>
            <p>Search</p>
            </StyledSearchButton>
            </div>
            <div class='container'>
            <StyledLocationBoxResult>
            <ul>
                    
            { context.showCities &&

                cities.map((city)=><li className={city==context.selectedCity && 'active'} onClick={()=>{context.setSelectedCity(`${city}`);context.setShowCities(false)}}><LocationOnIcon/><span>{city}, Finland</span> </li>
                )

            }
            </ul>
            </StyledLocationBoxResult>
            { context.showGuestBox &&
            <StyledGuestBoxResult>
                <div>
                    <p>Adults</p>
                    <p>Ages 13 or above</p>
                    <div>
                        <button onClick={()=>context.adultsCount>=1 &&context.setAdultsCount(context.adultsCount-1)}>-</button>
                        <p>{context.adultsCount}</p>
                        <button onClick={()=>context.setAdultsCount(context.adultsCount+1)}>+</button>
                    </div>
                </div>
                <div>
                    <p>Children</p>
                    <p>Ages 2-12</p>
                    <div>
                        <button onClick={()=>context.childrenCount>=1 &&context.setChildrenCount(context.childrenCount-1)} >-</button>
                        <p>{context.childrenCount}</p>
                        <button onClick={()=>context.setChildrenCount(context.childrenCount+1)}>+</button>
                    </div>
                </div>
                
                </StyledGuestBoxResult>  
                
             }
             {/* <div></div> */}
            </div>
            <StyledSearchButtonForMobile onClick={setFilterdata}>
            {/* <button onClick={setFilterdata}>Search</button> */}
            <span><SearchIcon style={{color:'white',fontSize:'30px'}}/></span>
            <p>Search</p>
            </StyledSearchButtonForMobile>
            </div>
            </StyledFilterContainer>
            <Overlay onClick={()=>{context.setShowFilter(false);context.setShowCities(false);context.setShowGuestBox(false)}}>

            </Overlay>
            
        </StyledFilterBox>
    );
}
export default FilterBox;
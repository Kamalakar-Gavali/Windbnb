import styled from "styled-components";
import Navbar from "./Navbar";
import Card from './Card'
import Footer from './Footer'
import stays from '../stays.json'

const Wrapper=styled.div`
padding:32px 50px 10px;
max-width:2000px;
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

    return(
    <>
    <Wrapper>
    <Navbar/>
    <StaysInfo>
<p>Stays in {} Finland</p>
<p>{} stays</p>
    </StaysInfo>
    <CardWrapper>
    {
        stays.map((stay)=>
        <Card data={stay}/>
        )
    }
    
    </CardWrapper>
    <Footer/>
    </Wrapper>
    </>
    );
}
export default MainScreen;
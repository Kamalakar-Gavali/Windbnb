import styled from "styled-components"
import {Star as StarIcon} from '@mui/icons-material'
const StyledCard=styled.div`

width: 32%;
//height: 269px;
//border-radius: 24px;
//  background:url(${props=>props.img});
padding:5px;
margin-top:20px;

`;
const Img=styled.img`

width: 100%;
height: 269px;
border:1px solid white;
border-radius: 24px;
//  background:url(${props=>props.img});
transition:transform 0.30s;
:hover{
    transform:scale(1.03,1.03);
}

`;

const SuperHostDiv=styled.div`
width: 100px;
height: 28px;
border: 1px solid #4F4F4F;
box-sizing: border-box;
border-radius: 12px;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 15px;
text-align:center;
padding:4px;
color:#4F4F4F;
`

const P=styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

/* Gray 3 */
color: #828282;
`
const CardTitle=styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
/* identical to box height */

color: #333333;
`;
const Card=({data})=>{

return (
<StyledCard img={data.photo}>
    <Img src={data.photo}/>
<div style={{height:'50px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
{
    data.superHost && <SuperHostDiv>Super Host</SuperHostDiv>
}
<P>{data.type} {data.beds}</P>
<div style={{display:'flex',alignItems:'center'}}><StarIcon style={{color:'#EB5757'}}/> <P >{data.rating}</P></div >
</div>
<CardTitle>

    {
        data.title
    }
</CardTitle>
</div>
</StyledCard>
)


}

export  default Card
import styled from 'styled-components';

const StyledFooter=styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 17px;
/* identical to box height */

text-align: center;
margin-top:25px;

color: #828282;
`;

const Footer=()=>{

    return(
        <StyledFooter>
            Developed with love by - <b>Kamalakar Gavali</b>
        </StyledFooter>
    )
}
export default Footer;
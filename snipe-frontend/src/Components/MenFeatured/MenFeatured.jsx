import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import '@fontsource/poppins';
import styled from 'styled-components'
import MenD from '../../Images/menD.svg'


const useStyles = makeStyles({

});

const Wrapper = styled.div `
   width:100%;
   height:80vh;
   margin:8% 0;
   position:relative;
`;
const Header = styled.h2 `
   font-size:40px;
   color:black;
   font-family:poppins;
   font-weight:300;
   letter-spacing:1px;
   margin-left:50px;
   margin-bottom:20px;
`;
const Image = styled.img `
    width:93%;
    height:80vh;
    border-radius:20px;
    object-fit:cover;
    margin-left:50px;
    position:relative;
`;
const FTextContainer = styled.div `
   position:absolute;
   top:85%;
   left:7rem;
`;
const Text = styled.div `
font-family:poppins;
font-weight:500;
letter-spacing:1px;
color:white;
font-size:25px;
margin-bottom:20px;
`;
const TextButton = styled.button `
background: #E5E5E5;
color: black;;
padding: 10px 15px;
border-radius: 20px;
border:none;
cursor: pointer;
font-family: 'Poppins' sans-serif;
font-weight: 300;
font-size: 20px;
letter-spacing: 1px;
transition: all 0.3s linear; 
&:hover {
    background-color:#FCA311;
    color:black;
  }
`;



const MenFeatured = () => {
    const classes = useStyles();
    return (
        <Wrapper>
              <Header>Snipe For Sports</Header>
                  <Image src={MenD}/>
                  <FTextContainer>
                      <Text>Sport sneakers for Men</Text>
                      <TextButton>Shop</TextButton>
                  </FTextContainer>
        </Wrapper>
    )
}

export default MenFeatured 
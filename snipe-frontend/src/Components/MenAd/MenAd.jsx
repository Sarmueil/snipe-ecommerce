import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import '@fontsource/poppins';
import styled from 'styled-components'
import menE from '../../Images/menE.svg'



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
const TextContainer = styled.div ` 
   position:absolute;
   top:80%;
   left:6rem;
`;
const XText = styled.div `
font-family:poppins;
font-weight:900;
letter-spacing:1px;
color:#E5E5E5;
font-size:55px;
margin-bottom:20px;
`;
const XTextButton = styled.button `
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
    background-color: black;
    color:#E5E5E5;
  }
`;



const MenAd = () => {
    const classes = useStyles();
    return (
        <Wrapper>
              <Header>Explore</Header>
                  <Image src={menE}/>
                  <TextContainer>
                      <XText>GO RUN GO EASY</XText>
                     <a href='./menProducts'> <XTextButton>Shop</XTextButton> </a>
                  </TextContainer>
        </Wrapper>
    )
}

export default MenAd;
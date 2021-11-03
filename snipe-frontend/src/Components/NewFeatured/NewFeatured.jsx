import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import '@fontsource/poppins';
import styled from 'styled-components'
import { featuredProducts } from '../../data'


const useStyles = makeStyles({

});

const Wrapper = styled.div `
   width:100%;
   height:80vh;
   margin:8% 0;
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
    object-fit:cover;
    margin-left:50px;
    position:relative;
`;
const TextContainer = styled.div `
   position:absolute;
   top:190rem;
   left:50rem;
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
    background-color: black;
    color:#E5E5E5;
  }
`;



const NewFeatured = () => {
    const classes = useStyles();
    const featuredB = featuredProducts[1];
    return (
        <Wrapper>
              <Header>Don't Miss</Header>
                  <Image src={featuredB.image}/>
                  <TextContainer>
                      <Text>{featuredB.description}</Text>
                      <TextButton>Shop</TextButton>
                  </TextContainer>
        </Wrapper>
    )
}

export default NewFeatured
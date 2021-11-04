import React from 'react'
import '@fontsource/poppins';
import styled from 'styled-components'
import { featuredProducts } from '../../data'


const MenBrand = () => {
    const featuredF = featuredProducts[5];
    return (
        <MWrapper>
              <Header>Featured</Header>
               <Container>
                <Item>
                <Image src={featuredF.image}/>
                  <TextContainer>
                      <Text>{featuredF.name}</Text> 
                      <TextButton>Shop</TextButton>
                  </TextContainer> 
                </Item>
               </Container>
        </MWrapper>
    )
}

export default MenBrand

const MWrapper = styled.div `
width:100%;
height:90vh;
margin:10% 0 20% 0;
`;
const Container = styled.div `
  width:100%;
`;
const Item = styled.div `
  flex:1;
  margin:30px;
`;
const Header = styled.h2 `
   font-size:40px;
   color:black;
   font-family:poppins;
   font-weight:300;
   letter-spacing:1px;
   margin-left:50px;
   margin-bottom:5px;
`;
const Image = styled.img `
    width:100%;
    height:90vh;
    border-radius:20px;
    object-fit:cover;
    position:relative;
`;
const TextContainer = styled.div `
 text-align:center;
`;
const Text = styled.div `
font-family:poppins;
font-weight:500;
letter-spacing:1px;
color:black;
font-size:35px;
margin-bottom:20px;
`;
const TextButton = styled.button `
background:black;
color: #E5E5E5;
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
    background-color: #FCA311;
    color:black;
  }
`;



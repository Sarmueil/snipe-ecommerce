// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import '@fontsource/poppins';
// import styled from 'styled-components'
// import { featuredProducts } from '../../data'


// const useStyles = makeStyles({

// });

// const Wrapper = styled.div `
// width:100%;
// height:90vh;
// margin:5% 0 20% 0;
// `;
// const Container = styled.div `
//    display:flex;
//    justify-content:center;
//    alight-item:center;
// `;
// const Item = styled.div `
//   flex:1;
//   margin:30px;
// `;
// const Header = styled.h2 `
//    font-size:40px;
//    color:black;
//    font-family:poppins;
//    font-weight:300;
//    letter-spacing:1px;
//    margin-left:50px;
//    margin-bottom:5px;
// `;
// const Image = styled.img `
//     width:100%;
//     height:90vh;
//     object-fit:cover;
//     position:relative;
// `;
// const TextContainer = styled.div `
// //    position:absolute;
// //    top:268rem;
// //    left:6rem;
// `;
// const Text = styled.div `
// font-family:poppins;
// font-weight:500;
// letter-spacing:1px;
// color:black;
// font-size:25px;
// margin-bottom:20px;
// `;
// const TextButton = styled.button `
// background:black;
// color: #E5E5E5;
// padding: 10px 15px;
// border-radius: 20px;
// border:none;
// cursor: pointer;
// font-family: 'Poppins' sans-serif;
// font-weight: 300;
// font-size: 20px;
// letter-spacing: 1px;
// transition: all 0.3s linear; 
// &:hover {
//     background-color: #FCA311;
//     color:black;
//   }
// `;



// const WomenBrand = () => {
//     const classes = useStyles();
//     const featuredD = featuredProducts[3];
//     const featuredE = featuredProducts[4];
//     return (
//         <Wrapper>
//               <Header>Featured</Header>
//                <Container>
//                 <Item>
//                 <Image src={featuredD.image}/>
//                   <TextContainer>
//                       <Text>{featuredD.name}</Text> 
//                       <TextButton>Shop</TextButton>
//                   </TextContainer> 
//                 </Item>

//                 <Item>
//                 <Image src={featuredE.image}/>
//                   <TextContainer>
//                       <Text>{featuredE.name}</Text> 
//                       <TextButton>Shop</TextButton>
//                   </TextContainer> 
//                 </Item>
//                </Container>
//         </Wrapper>
//     )
// }

// export default WomenBrand

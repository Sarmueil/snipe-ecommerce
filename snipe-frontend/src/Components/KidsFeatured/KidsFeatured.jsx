// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import '@fontsource/poppins';
// import styled from 'styled-components'
// import { featuredProducts } from '../../data';

// const useStyles = makeStyles({

// });

// const MWrapper = styled.div `
// width:100%;
// height:90vh;
// margin:10% 0 20% 0;
// `;
// const Container = styled.div `
//    display:flex;
//    justify-content:center;
//    alight-item:center;
// `;
// const Item = styled.div `
//   flex:1;
//   margin-left:5%;
// `;
// const KHeader = styled.h2 `
//    font-size:40px;
//    color:black;
//    font-family:poppins;
//    font-weight:300;
//    letter-spacing:1px;
//    margin-left:80px;
//    margin-bottom:10px;
// `;
// const Image = styled.img `
//     width:95%;
//     height:100vh;
//     object-fit:cover;
//     border-radius:20px;
//     // position:relative;
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
// const KItem = styled.div `
//    flex:1;
// `;
// const KImage = styled.img `
//     width:90%;
//     height:49vh;
//     border-radius:20px;
//     margin-bottom:20px;
//     object-fit:cover;
// `;



// const KidsFeatured = () => {
//     const classes = useStyles();
//     const featuredJ = featuredProducts[9];
//     const featuredK = featuredProducts[10];
//     const featuredL = featuredProducts[11];
//     return (
//         <MWrapper>
//               <KHeader>Don't Miss</KHeader>
//                <Container>
//                 <Item>
//                 <Image src={featuredJ.image}/>
//                   <TextContainer>
//                       <Text>{featuredJ.name}</Text> 
//                       <TextButton>Shop</TextButton>
//                   </TextContainer> 
//                 </Item>

//             <KItem>
//                 <KImage src={featuredK.image}/>
//                 <KImage src={featuredL.image}/>
//                 </KItem>
//                </Container>
//         </MWrapper>
//     )
// }

// export default KidsFeatured

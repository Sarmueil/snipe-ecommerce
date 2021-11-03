// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import '@fontsource/poppins';
// import styled from 'styled-components'
// import { featuredProducts } from '../../data'


// const useStyles = makeStyles({

// });

// const Wrapper = styled.div `
//    width:100%;
//    height:90vh;
//    margin:8% 0;
// `;
// const Header = styled.h2 `
//    font-size:40px;
//    color:black;
//    font-family:poppins;
//    font-weight:300;
//    letter-spacing:1px;
//    margin-left:50px;
//    margin-bottom:20px;
// `;
// const Image = styled.img `
//     width:93%;
//     height:90vh;
//     object-fit:cover;
//     margin-left:50px;
//     position:relative;
// `;
// const TextContainer = styled.div `
//    position:absolute;
//    top:285rem;
//    left:6rem;
// `;
// const Text = styled.div `
// font-family:poppins;
// font-weight:500;
// letter-spacing:1px;
// color:white;
// font-size:25px;
// margin-bottom:20px;
// `;
// const TextButton = styled.button `
// background: #E5E5E5;
// color: black;;
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
//     background-color: black;
//     color:#E5E5E5;
//   }
// `;



// const NewBrand = () => {
//     const classes = useStyles();
//     const featuredC = featuredProducts[2];
//     return (
//         <Wrapper>
//               <Header>Just In</Header>
//                   <Image src={featuredC.image}/>
//                   <TextContainer>
//                       <Text>{featuredC.name}</Text> 
//                       <TextButton>Shop</TextButton>
//                   </TextContainer>
//         </Wrapper>
//     )
// }

// export default NewBrand
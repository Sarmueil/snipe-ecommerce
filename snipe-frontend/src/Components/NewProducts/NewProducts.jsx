// import React from 'react';
// import styled   from 'styled-components'
// import '@fontsource/poppins';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// const Info = styled.div`
// opacity: 0;
// width: 100%;
// height: 100%;
// position: absolute;
// top: 0;
// left: 0;
// background-color: rgba(0, 0, 0, 0.5);
// z-index: 3;
// display: flex;
// align-items: center;
// justify-content: center;
// transition: all 0.5s ease;
// cursor: pointer;
// border-radius:20px;
// `;

// const Container = styled.div`
// flex: 1;
// margin: 7px;
// border-radius:10%;
// min-width: 280px;
// height: 370px;
// display: flex;
// align-items: center;
// justify-content: center;
// background-color: #F7F6F2;
// position: relative;
// &:hover ${Info}{
//   opacity: 1;
// }
// `;

// const Circle = styled.div`
// width: 200px;
// height: 200px;
// border-radius: 50%;
// background-color: white;
// position: absolute;
// `;

// const Image = styled.img`
// height: 95%;
// z-index: 2;
// `;

// const Icon = styled.div`
// width: 40px;
// height: 40px;
// border-radius: 50%;
// background-color: white;
// display: flex;
// align-items: center;
// justify-content: center;
// margin: 10px;
// transition: all 0.5s ease;
// &:hover {
//   background-color: #E5E5E5;
//   transform: scale(1.1);
// }
// `;
// const Text = styled.div`
//    background-color: #E5E5E5;    
//    color:black;
//    padding:7px;
//    font-size:20px;
//    font-family:'poppins';
//    border-radius:20px;
//    transition: all 0.3s linear; 
//    &:hover {
//     background-color: black;
//     color:#E5E5E5;
//   }
// `;
// const Description = styled.div `
//    color: #E5E5E5;
//    background-color:black;
//    padding:7px;
//    font-size:15px;
//    font-family:'poppins';
//    border-radius:20px;
//    margin-bottom:15px;
//    transition: all 0.3s linear; 
//    &:hover {
//     background-color: #E5E5E5;
//     color:black;
//   }
// `;
// const Price= styled.div `
//   color:black;
//   background-color:#FCA311;
//   padding:5px;
//   font-size:14px;
//   font-family:'poppins';
//   border-radius:20px;
//   text-align:center;
//   transition: all 0.3s linear; 
//   &:hover {
//    background-color:black;
//    color:#FCA311;
//  }
// `;

// const Main = styled.div `
//    margin-left:11px;
// `


// const NewProducts = ({item}) => {
//     return (
//         <Container>
//             <Circle />
//             <Image src={item.image} />
//             <Info>
//                 <Icon>
//                    <ShoppingCartIcon />
//                 </Icon>
//                 <Text>
//                 <div>Buy</div>
//                 </Text>
//                 <Main>
//                  <Description>
//                     <div>{item.name}</div>
//                 </Description>
//                 <Price>
//                     <div>${item.price}</div>
//                   </Price>
//                 </Main>
                
//             </Info>
//         </Container>
//     )
// }

// export default NewProducts
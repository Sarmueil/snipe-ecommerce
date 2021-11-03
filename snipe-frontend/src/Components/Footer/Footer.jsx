// import React from "react";
// import styled from "styled-components";
// import '@fontsource/roboto';
// import NavLogoI from '../../Images/logo_white_icon.svg'
// import NavLogoW from '../../Images/logo_white.svg'
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import PinterestIcon from '@material-ui/icons/Pinterest';
// import RoomIcon from '@material-ui/icons/Room';
// import PhoneIcon from '@material-ui/icons/Phone';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';

// const Container = styled.div`
//     display:flex;
//     background:#111111;
//     padding:40px 0;
// `;
// const Left = styled.div`
//    flex:1;
//    display:flex;
//    flex-direction:column;
//    padding:20px;

// `;
// const Center = styled.div`
//    flex:1;
//    padding:20px;
//    margin-left:40px;

// `;
// const Title = styled.h3 `
//   margin-bottom:30px;
//   font-family:'poppins';
//   color:white;
// `;
// const List = styled.ul `
//   margin:0;
//   padding:0;
//   list-style:none;
//   display:flex;
//   flex-wrap:wrap;
// `;
// const ListItem = styled.li `
//   width:50%;
//   margin-bottom:14px;
//   font-weight:100;
//   letter-spacing:1px;
//   cursor:pointer;
//   font-family:'roboto';
//   font-size:13px;
//   color:white;
// `;

// const Right = styled.div`
//    flex:1;
//    padding:20px;
//    margin-left:100px;
// `;
// const Logo = styled.img`
// object-fit: contain;
// height: 60px;
// width: 85px;
// color:#E5E5E5;
// margin-bottom:20px;
// `;
// const LogoIcon = styled.img`
//   object-fit: contain;
//   height: 35px;
//   width: 50px;
//   cursor: pointer;
//   color:#E5E5E5;
// `;
// const SocialContainer = styled.div`
//    display:flex;
// `;
// const SocialIcon = styled.div`
//    width:35px;
//    height:35px;
//    border-radius:50%;
//    color:white;
//    background-color: #${props=> props.color};
//    display:flex;
//    align-items:center;
//    justify-content:center;
//    margin-right:15px;
// `;
// const ContactItem = styled.div`
//   margin-bottom:20px;
//   display:flex;
//   align-items:center;
//   cursor:pointer;
//   font-family:'roboto';
//   letter-spacing:1px;
//   font-size:12px;
//   color:white;
// `;
// const Payment = styled.img `
//    width:50%;
// `;
// const icon1={
//   marginRight:'10px'
// }
// const red ={
//     color:'#ff0000'
// }
// const green ={
//     color:'green'
// }
// const mail ={
//     color:'#ff7b7b'
// }
// const Footer= ()=> {

//   return ( 
//        <Container>
//         <Left>
//           <LogoIcon src={NavLogoI}/>
//            <Logo src={NavLogoW}/>
//          <SocialContainer>
//             <SocialIcon color= '3B5999'>
//                 <FacebookIcon />
//            </SocialIcon>
//            <SocialIcon color='E4405F'>
//                <InstagramIcon />
//            </SocialIcon>
//            <SocialIcon color='55ACEE'>
//            <TwitterIcon />
//            </SocialIcon>
//            <SocialIcon color='E60023'>
//            <PinterestIcon  />
//            </SocialIcon>
//          </SocialContainer>
//         </Left> 
//         <Center>
//           <Title>Useful links</Title>
//               <List>
//               <ListItem>Home</ListItem>
//              <ListItem>Cart</ListItem>
//              <ListItem>Man Fashion</ListItem>
//              <ListItem>Women Fashion</ListItem>
//             <ListItem>New Releases</ListItem>
//             <ListItem>My Account</ListItem>
//             <ListItem>Order Tracking</ListItem>
//             <ListItem>Wishlist</ListItem>
//             <ListItem>Terms</ListItem>
//               </List>
//         </Center>
//         <Right>
//          <Title>Contact</Title>
//          <ContactItem>
//            <RoomIcon style={{...icon1, ...red}}  />Edo tech park, Decagon institute Benin.
//          </ContactItem>
//          <ContactItem>
//           <PhoneIcon style={{...icon1, ...green}}/> +2347062837954
//          </ContactItem>
//          <ContactItem>
//            <MailOutlineIcon style={{...icon1, ...mail}}/>adedoyin.adebisi@decagon.dev
//          </ContactItem>
//          <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
//         </Right>
//        </Container>        
       
//   );
// }

// export default Footer
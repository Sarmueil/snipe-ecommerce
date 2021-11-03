// import React, { useState, useEffect} from 'react';
// import axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
// import Carousel from 'react-elastic-carousel'
// import Carol from '../Carol/Carol';
// import Header from '../Header/Header';
// import WomenHero from '../WomenHero/WomenHero';
// import WomenHeader from '../WomenHeader/WomenHeader';
// import WomenFeatured from '../WomenFeatured/WomenFeatured';
// import XclusiveHeader from '../XclusiveHeader/XclusiveHeader';
// import HeroHeader from '../HeroHeader/HeroHeader';
// import Brand from '../Brand/Brand';
// import Members from '../Members/Members'
// import Section from '../Section/Section';
// import Footer from '../Footer/Footer';

// const useStlyes = makeStyles({
//     Carousel:{
//         marginTop:'50px',
//     }
// });

// const breakPoints = [
//     {width:1, itemsToShow: 1},
//     {width:550, itemsToShow: 2}, 
//     {width:768, itemsToShow: 3},
//     {width:1200, itemsToShow: 3}
// ]

// const WomenIntro = () => {
//     const [ newProducts, setNewProducts ] = useState([]);
//     useEffect(()=>{
//         const fetchNewProducts =async()=>{
//             const { data } = await(axios.get('/api/womenNew'));
//             setNewProducts(data) 
//         }
//         fetchNewProducts()
//     },[]);
//     const [relatedProducts, setRelatedProducts] = useState([]); 
//     useEffect(()=>{
//         const fetchRelated= async()=>{
//             const { data } = await(axios.get('/api/related'))
//             setRelatedProducts(data)
//         }
//         fetchRelated()
//     },[])
//     const classes = useStlyes()
//     return (
//         <div className='WomenIntro'>
//            <Header /> 
//            <WomenHeader />
//            <WomenHero />
//            <HeroHeader />
//            <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
//                   {newProducts.map((product)=>(
//                     <Carol  product={product}/>
//                   ))} 
//              </Carousel>
//              <WomenFeatured /> 
//              <XclusiveHeader />
//              <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
//                   {relatedProducts.map((product)=>(
//                     <Carol product={product}/>
//                   ))} 
//              </Carousel>
//              <Brand />   
//              <Members />
//              <Section />
//              <Footer />
//         </div>
//     )
// }

// export default WomenIntro
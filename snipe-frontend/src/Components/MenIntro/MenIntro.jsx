// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
// import Carousel from 'react-elastic-carousel'
// import Carol from '../Carol/Carol';
// import Header from '../Header/Header';
// import MenHero from '../MenHero/MenHero';
// import MenHeader from '../MenHeader/MenHeader';
// import MenBrand from '../MenBrand/MenBrand'
// import MenFeatured from '../MenFeatured/MenFeatured';
// import XclusiveHeader from '../XclusiveHeader/XclusiveHeader';
// import HeroHeader from '../HeroHeader/HeroHeader';
// import MenAd from '../MenAd/MenAd';
// import Members from '../Members/Members';
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

// const MenIntro = () => {
//     const [menNew, setmenNew ] = useState([]);
//     useEffect(()=>{
//         const fetchNew = async()=>{
//             const { data } = await(axios.get('/api/menNew'))
//             setmenNew(data)
//         }
//         fetchNew()
//     },[])
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
//         <div className='MenIntro'> 
//            <Header /> 
//            <MenHeader />
//            <MenHero />
//            <HeroHeader />
//            <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
//                   {menNew.map((product)=>(
//                     <Carol  product={product}/> 
//                   ))} 
//              </Carousel>
//              <MenFeatured />
//              <MenBrand /> 
//              <XclusiveHeader />
//              <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
//                   {relatedProducts.map((product)=>(
//                     <Carol  product={product}/>
//                   ))} 
//              </Carousel>
//              <Members />
//              <MenAd /> 
//              <Section />
//              <Footer />
//         </div>
//     )
// }

// export default MenIntro 
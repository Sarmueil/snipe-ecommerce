import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-elastic-carousel'
import Carol from '../Carol/Carol';
import Header from '../Header/Header';
import KidsHero from '../KidsHero/KidsHero';
import KidsHeader from '../KidsHeader/KidsHeader';
import KidsFeatured from '../KidsFeatured/KidsFeatured';
import XclusiveHeader from '../XclusiveHeader/XclusiveHeader';
import HeroHeader from '../HeroHeader/HeroHeader';
import Members from '../Members/Members'
import CatergoryHeader from '../CatergoryHeader/CatergoryHeader';
import KidsCategory from '../KidsCatergory/KidsCatergory';
import KidsAd from '../KidsAd/KidsAd';
import Section from '../Section/Section';
import Footer from '../Footer/Footer';

const useStlyes = makeStyles({
    Carousel:{ 
      marginTop:'50px',
    }
});
 
// const breakPoints = [
//     {width:1, itemsToShow: 1},
//     {width:550, itemsToShow: 2}, 
//     {width:768, itemsToShow: 3},
//     {width:1200, itemsToShow: 3}
// ]

const KidsIntro = () => {
//   const [newProducts, setNewProducts]= useState([]);
//     useEffect(()=>{
//        const fetchNew = async()=>{
//            const { data } = await(axios.get('/api/kidsNew')); 
//            setNewProducts(data)
//        }
//        fetchNew()
//     },[])
//     const [relatedProducts, setRelatedProducts] = useState([]); 
//     useEffect(()=>{
//         const fetchRelated= async()=>{
//             const { data } = await(axios.get('/api/related'))
//             setRelatedProducts(data)
//         }
//         fetchRelated()
//     },[])
    const classes = useStlyes() 
    return (
        <div className='KidsIntro'> 
           <Header /> 
           <KidsHeader />
           <KidsHero />
           <HeroHeader />
           <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
                  {newProducts.map((product)=>(
                    <Carol  product={product}/>
                  ))} 
             </Carousel>
             <KidsFeatured/> 
             <XclusiveHeader />
             <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
                  {relatedProducts.map((product)=>(
                    <Carol  product={product}/>
                  ))} 
             </Carousel>
            <Members />
            <CatergoryHeader /> 
            <KidsCategory /> 
            <KidsAd />
             <Section />
             <Footer />
        </div>
    )
}

export default KidsIntro 
import React, {useState, useEffect}from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-elastic-carousel'
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Carol from '../Carol/Carol';
import Mainsection from '../Mainsection/Mainsection'
import HeroHeader from '../HeroHeader/HeroHeader';
import Category from '../Catergory/Category';
import CatergoryHeader from '../CatergoryHeader/CatergoryHeader'; 
import XclusiveHeader from '../XclusiveHeader/XclusiveHeader'
import Section from '../Section/Section';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer'

// import newproducts from '../../new'; 
 
const useStlyes = makeStyles({
    Carousel:{
        marginTop:'50px',
    },
    Homepage:{
       width:'100%',   
       position:'relative' 
    }
});
  
// const breakPoints = [
//     {width:1, itemsToShow: 1},
//     {width:550, itemsToShow: 2},
//     {width:768, itemsToShow: 3},
//     {width:1200, itemsToShow: 3} 
// ]


const Homepage = () => {
//     const [ newProducts, setNewProducts ] = useState([]);
//    useEffect(()=>{
//        const fetchNewProducts =async()=>{
//            const { data } = await(axios.get('/api/womenNew'));
//            setNewProducts(data)
//        }
//        fetchNewProducts()
//    },[]);
//    const [relatedProducts, setRelatedProducts] = useState([]);  
//    useEffect(()=>{
//        const fetchRelated= async()=>{
//            const { data } = await(axios.get('/api/related'))
//            setRelatedProducts(data)
//        }
//        fetchRelated()
//    },[])
    const classes = useStlyes()   
    return (
        <div className={classes.Homepage}>     
            <Header />
            <Hero /> 
             <HeroHeader />    
        <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
                  {newProducts.map((product)=>(
                    <Carol  product={product}/>
                  ))} 
             </Carousel>
           <Mainsection /> 
           <CatergoryHeader />
          <Category />
          <XclusiveHeader />
          <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
                  {relatedProducts.map((product)=>(
                    <Carol  product={product}/>
                  ))} 
             </Carousel>
             <Featured /> 
            <Section />
            <Footer />
        </div>
    )
}

export default Homepage




import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-elastic-carousel'
import MenHeader from '../MenHeader/MenHeader';
import Carol from '../Carol/Carol';
import Header from '../Header/Header';
import XclusiveHeader from '../XclusiveHeader/XclusiveHeader'
import NewProducts from '../NewProducts/NewProducts';
import Section from '../Section/Section';
import MenProductHero from '../MenProductHero/MenProductHero'
import Footer from '../Footer/Footer'
import MenBrand from '../MenBrand/MenBrand';

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

const MenProductPage = () => {
    // const [products, setProducts]= useState([]); 
    // useEffect(()=>{
    //    const fetchProducts = async()=>{
    //       const { data } = await(axios.get('/api/men'))
    //       setProducts(data)
    //    }
    //    fetchProducts()
    // },[])
    // const [xclusiveProducts, setXclusiveProducts] = useState([]);
    // useEffect(()=>{
    //     const fetchX = async()=>{
    //         const { data } = await(axios.get('/api/mxclusive'))
    //         setXclusiveProducts(data)
    //     }
    //     fetchX()
    // },[])
    // const [menNew, setmenNew ] = useState([]);
    // useEffect(()=>{
    //     const fetchNew = async()=>{
    //         const { data } = await(axios.get('/api/menNew'))
    //         setmenNew(data)
    //     }
    //     fetchNew()
    // },[])
    // const [relatedProducts, setRelatedProducts] = useState([]); 
    // useEffect(()=>{
    //     const fetchRelated= async()=>{
    //         const { data } = await(axios.get('/api/related'))
    //         setRelatedProducts(data)
    //     }
    //     fetchRelated()
    // },[]) 
    const classes = useStlyes()
    return (
        <div className='newProductPage'>
          <Header/> 
          <MenHeader />
          <FilterContainer>
             <Filter><FilterText>Filters</FilterText>
                <Select>
                    <Option disabled selected>Categories</Option>
                    <Option>Sneakers</Option> 
                    <Option>Leather shoes</Option>
                    <Option>Canvas</Option>
                    <Option>Sport shoes</Option>
                </Select>
             </Filter>
             <Filter><FilterText>Sort By</FilterText>
             <Select>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
             </Filter>
          </FilterContainer>
           <Container>
               {products.map((item)=>(
                  <NewProducts item={item} key={item._id}/>   
               ))} 
           </Container>
          <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
                  {menNew.map((product)=>(
                    <Carol  product={product}/> 
                  ))} 
             </Carousel>
             <Container>
               {xclusiveProducts.map((item)=>(
                  <NewProducts item={item} key={item._id}/>   
               ))} 
           </Container> 
           <MenProductHero /> 
           <MenBrand />
           <XclusiveHeader />
           <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
                  {relatedProducts.map((product)=>(
                    <Carol product={product}/>
                  ))} 
             </Carousel>
             <Section />
            <Footer />
        </div>
    )
}

export default MenProductPage
const Container = styled.div `
   padding:20px;
   display:flex;
   flex-wrap:wrap;
`;
const FilterContainer = styled.div `
   display:flex;
   justify-content:flex-end;
`;
const Filter = styled.div `
//    display:flex;
   margin:20px;
`;
const FilterText = styled.span `
   display:flex;
   align-items:center;
   font-size:17px;
    color:black;
    font-family:poppins;
    font-weight:400;
    letter-spacing:1px;
    cursor:pointer;
    margin-right: 20px;
`;
const Select = styled.select `
padding: 10px;
margin-right: 20px;
`; 
const Option = styled.option `
    font-size:15px;
     
`;
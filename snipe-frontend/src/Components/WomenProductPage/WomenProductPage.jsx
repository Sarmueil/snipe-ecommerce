import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Carousel from 'react-elastic-carousel'
import WomenHeader from '../WomenHeader/WomenHeader';
import Carol from '../Carol/Carol';
import Header from '../Header/Header';
import XclusiveHeader from '../XclusiveHeader/XclusiveHeader'
import NewProducts from '../NewProducts/NewProducts';
import Section from '../Section/Section';
import WomenProductHero from '../WomenProductHero/WomenProductHero';
import Footer from '../Footer/Footer'
import MenBrand from '../MenBrand/MenBrand';

const useStlyes = makeStyles({
    Carousel:{
        marginTop:'50px',
    }
});

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
const breakPoints = [
    {width:1, itemsToShow: 1},
    {width:550, itemsToShow: 2},
    {width:768, itemsToShow: 3},
    {width:1200, itemsToShow: 3}
]

const WomenProductPage = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(()=>{
        const fetchProducts = async()=>{
            const { data } = await(axios.get('/api/women'));
            setProducts(data)
        }
        fetchProducts()
    }, [])
   const [ newProducts, setNewProducts ] = useState([]);
   useEffect(()=>{
       const fetchNewProducts =async()=>{
           const { data } = await(axios.get('/api/womenNew'));
           setNewProducts(data) 
       }
       fetchNewProducts()
   },[])
   const [ xclusive, setXclusive ] = useState([]);
   useEffect(()=>{
       const fetchXclusive = async()=>{
           const { data }= await(axios.get('/api/wxclusive'))
           setXclusive(data)
       }
       fetchXclusive()
   },[])
   const [relatedProducts, setRelatedProducts] = useState([]); 
    useEffect(()=>{
        const fetchRelated= async()=>{
            const { data } = await(axios.get('/api/related'))
            setRelatedProducts(data)
        }
        fetchRelated()
    },[])
    const classes = useStlyes()
    return (
        <div className='newProductPage'>
          <Header/> 
          <WomenHeader  />
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
                  {newProducts.map((product)=>(
                    <Carol  product={product}/>
                  ))} 
             </Carousel>
             <Container>
               {xclusive.map((item)=>(
                  <NewProducts item={item} key={item._id}/>    
               ))} 
           </Container> 
           < WomenProductHero />
           <MenBrand /> 
           <XclusiveHeader />
           <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
                  {relatedProducts.map((product)=>(
                    <Carol  product={product}/>
                  ))} 
             </Carousel>
             <Section />
            <Footer />
        </div>
    )
}

export default WomenProductPage
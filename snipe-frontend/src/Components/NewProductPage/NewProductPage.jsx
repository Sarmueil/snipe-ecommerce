import React, {useState, useEffect}from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-elastic-carousel'
import Carol from '../Carol/Carol';
import Header from '../Header/Header';
import NewProductHeader from '../NewProductHeader/NewProductHeader';
import XclusiveHeader from '../XclusiveHeader/XclusiveHeader'
import NewProducts from '../NewProducts/NewProducts';
import NewFeatured from '../NewFeatured/NewFeatured';
import Section from '../Section/Section';
import Footer from '../Footer/Footer'
import NewBrand from '../NewBrand/NewBrand';

const useStlyes = makeStyles({
    Carousel:{
        marginTop:'50px',
    }
});  

const breakPoints = [
    {width:1, itemsToShow: 1},
    {width:550, itemsToShow: 2},
    {width:768, itemsToShow: 3},
    {width:1200, itemsToShow: 3}
]

const NewProductPage = () => {
//    const [ newProducts, setNewProducts ] =useState([]);
//    useEffect(()=>{
//       const fetchNewProducts = async()=>{
//          const { data } = await(axios.get('/api/newProducts'))
//          setNewProducts(data)
//       }
//       fetchNewProducts()
//    },[])
//    const [relatedProducts, setRelatedProducts] = useState([]);  
//     useEffect(()=>{
//         const fetchRelated= async()=>{
//             const { data } = await(axios.get('/api/related'))
//             setRelatedProducts(data)
//         }
//         fetchRelated()
//     },[])
    const classes = useStlyes()
    return (
        <div className='newProductPage'>
          <Header/> 
          <NewProductHeader />
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
               {newProducts.map((item)=>(
                  <NewProducts item={item} key={item._id}/>   
               ))} 
           </Container> 
           <NewFeatured />  
           <XclusiveHeader />
          <Carousel className={classes.Carousel} breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
                  {relatedProducts.map((product)=>(
                    <Carol  product={product}/>
                  ))} 
             </Carousel>
             <NewBrand /> 
             <Section />   
            <Footer />
        </div>
    )
}

export default NewProductPage
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
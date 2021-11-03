import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import '@fontsource/poppins';
import women from '../../Images/women.svg'
import men from '../../Images/men.svg'
import kidsD from '../../Images/KidsD.svg'


const useStlyes = makeStyles({
    Category:{
       marginTop:'30px',
       marginBottom:'50px',
       width:'100%',
       height:'80vh',
       display:'flex',
       alignItems:'center'
    },
    card:{
      width:'100%',
      height:'80vh',
      margin:'0 20px',
      position:'relative',
    },
    card_img:{
        width:'100%',
        height:'80vh',
        objectFit:'cover',
        backgroundRepeat:'no-repeat',
        borderRadius:'20px'
    },
    cardbrand_btn:{
       position:'absolute',
       top:'590px',
       right:'3%',
       background:'#E5E5E5',
       color:'black',
       padding:'10px',
       borderRadius:'20px',
       cursor:'pointer',
       fontSize:'20px',
       letterSpacing:'1px',
       fontFamily:'poppins',
       fontWeight:'300',
        '&:hover': {
            background:'black',
            color:'#E5E5E5',
            transition: 'all 0.3s linear',
         },
    },
});
  
const Category = () => {
    const classes = useStlyes()
    return (
        <div className={classes.Category}>
          <div className={classes.card}>
            <img src={men} alt='woman standing' className={classes.card_img}/>
            <a href='/men'className={classes.cardbrand_btn}>Men</a>
          </div>

          <div className={classes.card}>
            <img src={women} alt='woman standing' className={classes.card_img}/>
            <a href='/women'className={classes.cardbrand_btn}>Women</a>
          </div>

          <div className={classes.card}>
            <img src={kidsD} alt='woman standing' className={classes.card_img}/>
            <a href='/kids'className={classes.cardbrand_btn}>Kids</a>
          </div>
        </div>
    )
}

export default Category

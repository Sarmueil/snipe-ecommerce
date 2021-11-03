import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/poppins';
import Brandpic from '../../Images/Brandpic.svg';
import memeberBG from '../../Images/memberBG.svg'
import './Mainsection.css'

const useStlyes = makeStyles({
    mainsection:{
        margin: '35px 0 0 0',
        padding: '0',
        backgroundColor: 'transparent'
    },
    brand:{
      width:'100%',
      height:'100vh',
      position:'relative'
    },
    brandimg:{
      width:'100%',
      height:'100vh',
      objectFit:'cover',
      backgroundRepeat:'no-repeat',
      position:'relative', 
    //   borderRadius:'70px 70px 0 0'
    },
    brand_text:{
       position:'absolute',
       color:'#E5E5E5',
    top:'0',
    left:'0',
    width:'100%',
    height:'100vh',
    backgroundColor:'rgba(0,0,0,0.4)',
    },
    brand_id:{
      fontSize:'55px',
      fontFamily:'poppins',
      letterSpacing:'2px',
      marginTop:'40%',
      marginLeft:'2%'
      
    },
    brand_idb:{
        fontSize:'19px',
        fontFamily:'poppins',
        letterSpacing:'1px',
        marginLeft:'2%'
    },
    brand_members:{
        width:'100%',
        height:'80vh',
        position:'relative',
    },
    member_bg:{
        width:'100%',
        height:'80vh',
        objectFit:'cover',
        backgroundRepeat:'no-repeat',
        position:'relative',
    },
    member_text:{
        position:'absolute',
        color:'#E5E5E5',
        top:'40%',
        right:'2%',
    },
    member_id:{
        fontSize:'50px',
        fontFamily:'poppins',
        letterSpacing:'2px', 
    },
    member_idb:{
        fontSize:'18px',
        fontFamily:'poppins',
        letterSpacing:'1px',
    }
});
const Mainsection = () => {
    const classes = useStlyes()
    
    
    return ( 
        <div className={classes.mainsection}>
            <div className={classes.brand}>
                <img src={Brandpic} alt='shoe-image' className={classes.brandimg}/> 
                <div className={classes.brand_text}>
                    <h1 className={classes.brand_id}>Snipe It Your Way</h1>
                    <p className={classes.brand_idb}>Our latest brand of shoes for everyday runs, training ,racing and fashion refreshed in a new vibrant color way.</p>
                    <div className='brand_btn'>
                      <div className='explorebrand_btn'>Explore</div>
                      <div className='shopbrand_btn'>Shop</div>
                   </div>
                </div>  
            </div>
            <div className='brand_bg'></div>    
            <div className={classes.brand_members}>
              <img src={memeberBG} alt='woman looking at screen of people' className={classes.member_bg}/>
              <div className={classes.member_text}>
                <h2 className={classes.member_id}>MEMBERS XCLUSIVE TREND.</h2>
                <p className={classes.member_idb}>Join Now Join Free</p>
                <div className='brand_btn'>
                      <div className='explorebrand_btn'>Sign In</div>
                      <div className='shopbrand_btn'>Join</div>  
                   </div>
              </div>
            </div>
        </div>
       
    )
}

export default Mainsection
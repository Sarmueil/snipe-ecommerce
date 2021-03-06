import React from 'react'
import '@fontsource/poppins';
import './HeroHeader.css'
import { makeStyles } from '@material-ui/core/styles';

const useStlyes = makeStyles({
    HeroHeader:{
       display:'flex',
       justifyContent:'space-between',
       alignItems:'center'
    },
    heroTrend:{
        marginTop:'3%',
       marginLeft:'6%',
        fontSize:'40px',
        color:'black',
        fontFamily:'poppins',
       fontWeight:'300',
       letterSpacing:'1px'
    },
    trendBtn:{
        background:'#E5E5E5',
        color:'black',
        letterSpacing:'1px',
        padding:'12px',
        fontFamily:'poppins',
        fontSize:'20px',
        marginRight:'5%',
        marginTop:'3%',
        borderRadius:'25px',
        cursor:'pointer',

        '&:hover': {
            background:'black',
            color:'#E5E5E5',
            transition: 'all 0.3s linear',
         },
    }
});
const HeroHeader = () => {
    const classes = useStlyes()
    return (
        <div className={classes.HeroHeader}>
            <div className={classes.heroTrend}>
               What's Trending
            </div>
            <a href='/new' className={classes.trendBtn}>
               New
            </a>
        </div>
    )
}

export default HeroHeader
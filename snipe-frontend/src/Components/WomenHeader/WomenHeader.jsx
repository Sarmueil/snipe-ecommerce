import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStlyes = makeStyles({
    newProductHeader:{
        display:'flex',
       justifyContent:'space-between',
       alignItems:'center',
       marginTop:'15px', 
       padding:'15px 0',
       position:'sticky',
       top:'0', 
       background:'white',
       zIndex:'100' 
    },
    newTrend:{
        marginTop:'0',
       marginLeft:'4%',
        fontSize:'30px',
        color:'black',
        fontFamily:'poppins',
       fontWeight:'300',
       letterSpacing:'1px',
    },
    newBtn:{
        background:'#E5E5E5',
        color:'black',
        letterSpacing:'1px',
        padding:'10px',
        fontFamily:'poppins',
        fontSize:'15px',
        marginRight:'2%',
        marginTop:'0',
        borderRadius:'25px',
        cursor:'pointer',
           
        '&:hover': {
            background:'black',
            color:'#E5E5E5',
            transition: 'all 0.3s linear',
         },
    },
    center:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
    },
    newCenter:{
        marginTop:'0',
        marginRight:'20px',
        fontSize:'15px',
        color:'black',
        fontFamily:'poppins',
       fontWeight:'300',
       letterSpacing:'1px',
       cursor:'pointer',
    }
});


const WomenHeader = () => {
    const classes = useStlyes()
    return (
        <div className={classes.newProductHeader}>
               <a href='/women' className={classes.newTrend}>
                Women
              </a>
              <div className={classes.center}>
                <a href='/new' className={classes.newCenter}>
                New Releases
                </a>
                <a href='/womenProducts' className={classes.newCenter}>
                 Sales
                </a>
                <div className={classes.newCenter}>
                Member Xclusive
                </div>
              </div>
               <a href='/womenProducts' className={classes.newBtn}>
               Explore
              </a>

        </div>
    )
}

export default WomenHeader 
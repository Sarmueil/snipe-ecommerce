import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import '@fontsource/poppins';
import KidsB from '../../Images/KidsB.svg'
import KidsC from '../../Images/kidsC.svg'
import KidsD from '../../Images/KidsD.svg'


const useStlyes = makeStyles({
    KCategory:{
       marginBottom:'50px',
       width:'100%',
       height:'100vh',
       display:'flex',
       alignItems:'center'
    },
    Kcard:{
      width:'100%',
      height:'90vh',
      margin:'0 20px',
      position:'relative',
    },
    Kcard_img:{
        width:'100%',
        height:'90vh',
        objectFit:'cover',
        backgroundRepeat:'no-repeat',
    },
    Kcardbrand_btn:{
       position:'absolute',
       top:'650px',
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
  
const KidsCategory = () => {
    const classes = useStlyes()
    return (
        <div className={classes.KCategory}>
          <div className={classes.Kcard}>
            <img src={KidsB} alt='woman and child' className={classes.Kcard_img}/>
            <div className={classes.Kcardbrand_btn}>Newbies</div>
          </div>

          <div className={classes.Kcard}>
            <img src={KidsC} alt='woman standing' className={classes.Kcard_img}/>
            <div className={classes.Kcardbrand_btn}>Kids</div>
          </div>

          <div className={classes.Kcard}>
            <img src={KidsD} alt='kid standing' className={classes.Kcard_img}/>
            <div className={classes.Kcardbrand_btn}>Teens</div>
          </div>
        </div>
    )
}

export default KidsCategory
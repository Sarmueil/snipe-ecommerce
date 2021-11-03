// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Header.css'
// import { makeStyles } from '@material-ui/core/styles';
// import NavLogoA from '../../Images/Icon_logo.svg'
// import NavLogoB from '../../Images/logo_black.svg'
// import SearchIcon from '@material-ui/icons/Search';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'; 



// const useStlyes = makeStyles({
//     Header:{
//         width: '100%',
//         position: 'sticky'
//     }
// });
// const Header = () => {
//     const classes = useStlyes() 
//     return (
//         <div className={classes.Header}>
//             {/* Nav1 */}
//             <div className='nav_a'>
//             <Link to='/'>
//               <img className='nav_a_logo' src={NavLogoA} alt='logo'/>
//             </Link>
//             <div className='nav_a_links'>
//                 <div className='explore'>Explore</div>
//                 <div className='sign_up'>Sign Up</div>
//                 <div className='log_in'>Log In</div>
//             </div>
//           </div>

          
//           {/* NAV2 */}
//           <div className='nav_b'>
//            <div className='nav_b_links'>
//            <Link to='/'>
//              <img className='nav_b_logo' src={NavLogoB} alt='logo'/>   
//             </Link>
//                <Link to= '/new'>
//                <div className='new'>New</div> 
//                </Link>
//                <Link to='/men'>
//                <div className='men'>Men</div>
//                </Link>
//               <Link to ='/women'>
//               <div className='women'>Women</div>
//               </Link>
//               <Link to ='/kids'>
//               <div className='kids'>Kids</div> 
//               </Link>
//             </div>
//           <div className ="search" >
//               <div className ='header_search'>  
//                   <input className ="header_searchIn" type ="text" placeholder='Search'/>  
//                   <SearchIcon className ="header_searchIcon"/>
//               </div>
//               <AddShoppingCartIcon className='cart'/>
//          </div>       
//           </div>

//           {/* NAV3 */}
//           <div className='nav_c'>
//               <h3>Snipe our latest brands of footwears <a href='/new'>Click here</a></h3>  
//           </div>
//         </div>
//     ) 
// }

// export default Header
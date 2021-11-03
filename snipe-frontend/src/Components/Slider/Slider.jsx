// import React, {useState} from 'react'
// // import { makeStyles } from '@material-ui/core/styles';
// import 'swiper/css/swiper.css';
// import Swiper from 'react-id-swiper';
// import HeroA from '../../Images/HeroA.svg';
// import './Slider.css';
// // import {SliderData} from '../Slider/SliderData'
// // import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// // import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// const SliderConfigs = {
//     containerClass: 'swiper-container hero-slider',
//     parallax: true,
//     centeredSlides: true,
//     grabCursor: true,
//     speed: 500,
//     spaceBetween: 0,
//     effect: 'slide'

// }
// // const useStlyes = makeStyles({
// //     slider:{
      
// //     }
// // });
// const Slider = () => {
//     const [parallaxSwiper, setParallaxSwiper] = useState(null);
//     const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
//     const parallaxOpacity = 0.5;

//     // const classes = useStlyes()
    
//     return ( 
//         <Swiper {...SliderConfigs} getSwiper={setParallaxSwiper}>
//             <div className='hero-slide'>
//                    <div className='slide-image' data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity={parallaxOpacity}>
//                         <img src={HeroA} />
//                    </div>
//             </div>
//         </Swiper>
       
//     )
// }

// export default Slider


// import React, { useState } from 'react';
// import HeroA from '../../Images/HeroA.svg'
// import HeroB from '../../Images/HeroB.svg'
// import HeroC from '../../Images/HeroC.svg'
// // react-id-swiper
// import 'swiper/css/swiper.css';
// import Swiper from 'react-id-swiper';

// // custom css
// import './Slider.css';

// // images

// // slider configuration
// const HeroSliderConfigs = {
//   containerClass: 'swiper-container hero-slider',
//   parallax: true,
//   centeredSlides: true,
//   grabCursor: true,
//   speed: 500,
//   spaceBetween: 0,
//   effect: 'slide'
// };

// // slider component
// const HeroSlider = () => {
//   const [parallaxSwiper, setParallaxSwiper] = useState(null);
//   const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
//   const parallaxOpacity = 0.5;
//   return (
//     <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
//       <div className="hero-slide">
//         <div
//           className="slide-image"
//           data-swiper-parallax={parallaxAmount}
//           data-swiper-parallax-opacity={parallaxOpacity}
//         >
//           <img src={HeroA} alt="image1"></img>
//         </div>
//         {/* <div className="col-md-6 offset-md-3 my-auto text-center text-white">
//           <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
//           <p className="mb-5 small">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
//             ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
//             ab quia neque, porro laborum error, autem facilis voluptates
//             laboriosam?
//           </p>
//         </div> */}
//       </div>
//       <div className="hero-slide">
//         <div
//           className="slide-image"
//           data-swiper-parallax={parallaxAmount}
//           data-swiper-parallax-opacity={parallaxOpacity}
//         >
//           <img src={HeroB} alt="image2"></img>
//         </div>
//         {/* <div className="col-md-6 offset-md-3 my-auto text-center text-white">
//           <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
//           <p className="mb-5 small">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
//             ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
//             ab quia neque, porro laborum error, autem facilis voluptates
//             laboriosam?
//           </p>
//         </div> */}
//       </div>
//       <div className="hero-slide">
//         <div
//           className="slide-image"
//           data-swiper-parallax={parallaxAmount}
//           data-swiper-parallax-opacity={parallaxOpacity}
//         >
//           <img src={HeroC} alt="image3"></img>
//         </div>
//         {/* <div className="col-md-6 offset-md-3 my-auto text-center text-white">
//           <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
//           <p className="mb-5 small">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
//             ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
//             ab quia neque, porro laborum error, autem facilis voluptates
//             laboriosam?
//           </p>
//         </div> */}
//       </div>
//     </Swiper>
//   );
// };

// export default HeroSlider;
// import React from "react"
// import Heading from "../../common/Heading"
// import { awards } from "../../data/Data"
// import "./awards.css"

// const Awards = () => {
//   return (
//     <>
//       <section className='awards padding'>
//         <div className='container'>
//           <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />

//           <div className='content grid4 mtop'>
//             {awards.map((val, index) => (
//               <div className='box' key={index}>
//                 <div className='icon'>
//                   <span>{val.icon}</span>
//                 </div>
//                 <h1>{val.num}</h1>
//                 <p>{val.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Awards



import React from "react";
import Heading from "../../common/Heading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Awards = () => {
  return (
    <>
      <section className='awards padding'>
        <div className='container'>
          <Heading title='Your feedback matters! Help us enhance your browsing experience by sharing your thoughts' subtitle='Reviews' />
          <div style={{
            display: 'flex',
            justifyContent: 'center', // Center the stars horizontally
            alignItems: 'center' // Center the stars vertically
          }}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '24px', marginRight: '5px' }} />
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '24px', marginRight: '5px' }} />
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '24px', marginRight: '5px' }} />
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '24px', marginRight: '5px' }} />
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '24px' }} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Awards;

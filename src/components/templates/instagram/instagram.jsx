// import React from 'react';
// import Image from 'gatsby-image';
// import useInstagram from './useInstagram';

 
// const Insta = () => {
//   const instaPhotos = useInstagram();
//   const { username } = instaPhotos[0];
//   return (
//     <>
//       <h2>Instagram posts from @{username}</h2>
//       <div>
//         {instaPhotos.map(photo => (
//           <a
//             key={photo.id}
//             href={`https://instagram.com/p/${photo.id}`}
//           >
//             <Image
//               fluid={photo.fluid}
//               alt={photo.caption}
//             />
//           </a>
//         ))}
//       </div>
//       <a href={`https://instagram.com/${username}`}>See more on Instagram</a>
//     </>
//   )
// }
// export default Insta;
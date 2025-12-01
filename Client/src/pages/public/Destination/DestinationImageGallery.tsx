// import React from 'react';

// const DestinationImageGallery = () => {
//   return
//   <section>
//     <h2 className='p-36-bold mb-6'>Gallery</h2>
//     <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
//       {imageGroups.map((group, groupIndex) => (
//         <div key={groupIndex} className='grid gap-4'>
//           {group.map(({ src, index }) => (
//             <div
//               key={index}
//               className='relative group cursor-pointer aspect-[4/3] rounded-lg overflow-hidden'
//               onClick={() => handleGalleryImageClick(index)}
//             >
//               <img
//                 className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
//                 src={src}
//                 alt={`${destination.name} gallery photo ${index + 1}`}
//               />
//               <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center'>
//                 <ZoomIn className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   </section>;
// };

// export default DestinationImageGallery;

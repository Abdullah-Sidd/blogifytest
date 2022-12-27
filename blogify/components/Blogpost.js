// import React from "react";
// import { urlFor } from "../lib/client";
// import Link from 'next/link'
// const Blogpost = ({posts}) => {
//   console.log(posts)
//   return (
//     <div>
//        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 py-6 lg:px-8 lg:py-8">
//           <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
//           {posts.map((item) => {
//             return <div className="overflow-hidden transform duration-500 hover:-translate-y-1 cursor-pointer group bg-white rounded shadow-sm">
//               <img src={urlFor(item.image && item.image[0])} className="object-contain w-full h-64 group-hover:scale-105  transition-transform duration-200 ease-in-out" alt="" />
//               <div className="p-5 border border-t-0">
//                 <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
//                   <a href="/" className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700" aria-label="Category" title="traveling">Published At</a>
//                   <span className="text-gray-600">— {item.publishedAt}</span>
//                 </p>
//                 <a href="/" aria-label="Category" title="Visit the East" className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">{item.title}</a>
//                 <p className="mb-2 font-semibold text-gray-700">
//                   {item.description}
//                 </p>

//                 {/* <a href="/" aria-label="Author" title="Author" className="flex items-center py-2">
//       <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="avatar" className="object-cover w-10 h-10 rounded-full shadow-sm"/>
//       <a href="/" aria-label="Author" title="Author" className="ml-4 font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Andrew Larkin</a>
    
//     </a> */}
//                 <Link href={`/post/${item.slug.current}`} class=" inline-flex items-center mt-3 text-deep-purple-accent-400 hover:text-deep-purple-800 relative px-7 py-2 font-medium text-white transition duration-300 bg-green-400 rounded-md hover:bg-green-500 ease">
// <span class="absolute bottom-0 left-0 h-full -ml-2">
// <svg viewBox="0 0 487 487" class="w-auto h-full opacity-100 object-stretch" xmlns="http://www.w3.org/2000/svg"><path d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
// </span>
// <span class="absolute top-0 right-0 w-12 h-full -mr-3">
// <svg viewBox="0 0 487 487" class="object-cover w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z" fill="#FFF" fill-rule="nonzero" fill-opacity=".1"></path></svg>
// </span>
// <span class="relative">Read Article</span>
// </Link>

//               </div>

//             </div>
//             })}
//           </div>
//         </div> 
//     </div>
//   );
// };

// export default Blogpost;

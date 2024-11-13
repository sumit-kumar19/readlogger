// import React from 'react';

// const Hero = () => {
//     return (
//         <div className="hero">
//             <section class="text-gray-600 body-font">
//                 <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//                     <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                         <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
//                             <br class="hidden lg:inline-block" />readymade gluten
//                         </h1>
//                         <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
//                         <div class="flex justify-center">
//                             <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
//                             <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
//                         </div>
//                     </div>
//                     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//                         <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// // export default Hero;
// import React from 'react';

// const Hero = () => {
//     return (
//         <div className="hero">
//             <section className="text-gray-600 body-font">
//                 <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//                     {/* Text Content */}
//                     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//                             READLOGGER
                           
//                         </h1>
//                         <p className="mb-8 leading-relaxed">
//                         site for reading novels and keeping track of the novels you have read and the ones you want to read
//                         </p>
//                         <div className="flex justify-center">
//                             <a href='/libaray'>
//                             <button className="inline-flex text-white  bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
//                                Vist libary
//                             </button>
//                             </a>
//                             <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
//                                 Progress
//                             </button>
//                         </div>
//                     </div>

//                     {/* img Content */}
//                     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//                         <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Hero;
import React from 'react'


export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              READLOGGER
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Your personal site for reading novels, keeping track of the books you've read, and managing your reading wishlist.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="/library" passHref>
                <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200">
                  Visit Library
                </button>
              </a>
              <a href="/progress" passHref>
                <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200">
                  View Progress
                </button>
              </a>
            </div>
          </div>

          {/* img Content */}
          <div className="flex-1 w-full max-w-lg">
            <img
              src="/placeholder.svg?height=600&width=720"
              alt="Illustration of books and reading"
              width={720}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
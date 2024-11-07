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

// export default Hero;
import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    {/* Text Content */}
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            READLOGGER
                           
                        </h1>
                        <p className="mb-8 leading-relaxed">
                        site for reading novels and keeping track of the novels you have read and the ones you want to read
                        </p>
                        <div className="flex justify-center">
                            <a href='/libaray'>
                            <button className="inline-flex text-white  bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                               Vist libary
                            </button>
                            </a>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Progress
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;

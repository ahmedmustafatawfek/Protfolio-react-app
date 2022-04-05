import React from 'react'

import WorkImg from '../assets/work.JPG'
import WorkImg2 from '../assets/work2.JPG'
import WorkImg3 from '../assets/work3.JPG'
import WorkImg4 from '../assets/work4.JPG'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
            <div className='pb-8'>

                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out of my recent work.</p>

            </div>

            {/* container  */}

            <div className=' grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

            {/* grid item */}
                <div  style={{backgroundImage: `url(${WorkImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center  items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://ahmedmustafatawfek.github.io/food-app-react/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/ahmedmustafatawfek/food-app-react">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div  style={{backgroundImage: `url(${WorkImg2})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center  items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://ahmedmustafatawfek.github.io/Travel-App-React/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/ahmedmustafatawfek/Travel-App-React">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div  style={{backgroundImage: `url(${WorkImg3})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center  items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://ahmedmustafatawfek.github.io/Official-website-app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://github.com/ahmedmustafatawfek/Official-website-app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div  style={{backgroundImage: `url(${WorkImg4})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center  items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://ahmedmustafatawfek.github.io/Dark-Light-Theme-ReactJs/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                            <a href="https://ahmedmustafatawfek.github.io/Dark-Light-Theme-ReactJs/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    
    </div>
  )
}

export default Work
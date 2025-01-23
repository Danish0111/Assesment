import React from 'react'
import about from '../assets/About.jpg'
const About = () => {
    return (
        <>
            <div className="about_container relative lg:static  flex flex-col-reverse lg:flex-row justify-center items-center px-16 py-16 gap-10">
                <div className="left w-[100%] lg:w-[50%]">
                    <div className="welcome absolute top-0 py-4 lg:py-0 lg:static text-[#EB8D15]">WELCOME TO REGISTERKARO.IN</div>
                    <h1 className='absolute top-0 py-8 lg:py-0 lg:static'><span>About</span> <span className='text-[#EB8D15]'>Register Karo</span></h1>
                    <p className=''>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                        their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                        customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.
                        <br/>
                        <br/>
                        I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
                </div>
                <div className="right relative top-6 lg:static py-4 lg:py-0  lg:w-[50%]">
                    {/* <img className='w-[100]' src={about} alt="" /> */}
                </div>
            </div>
        </>
    )
}

export default About

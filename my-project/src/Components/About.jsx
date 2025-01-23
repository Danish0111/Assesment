import React from 'react'
import about from '../assets/About.jpg'
const About = () => {
    return (
        <>
            <div className="about_container flex justify-center items-center px-16 py-16 gap-10">
                <div className="left w-[50%]">
                    <div className="welcome text-[#EB8D15]">WELCOME TO REGISTERKARO.IN</div>
                    <h1><span>About</span> <span className='text-[#EB8D15]'>Register Karo</span></h1>
                    <p>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                        their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                        customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.
                        <br/>
                        <br/>
                        I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
                </div>
                <div className="right w-[50%]">
                    {/* <img className='w-[100]' src={about} alt="" /> */}
                </div>
            </div>
        </>
    )
}

export default About

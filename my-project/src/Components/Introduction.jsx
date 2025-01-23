import React from 'react'
import point1 from '../assets/point1.png'
import point2 from '../assets/point2.png'
import youtube from '../assets/youtube.png'
const Introduction = () => {
    return (
        <>
            <div className="Introduction_container bg-[#1C4670] text-white flex justify-center items-center px-16 py-16 gap-10">
                <div className="left w-[50%] flex flex-col justify-between">
                    <h1>0ur Video Introductions</h1>
                    <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
                    <div className="points flex flex-col justify-between gap-6 py-8">
                        <div className="point flex items-center gap-4">
                            <span>
                                <img className='w-20' src={point1} alt="" />
                            </span>
                            <div className="text">
                                <h2>Explore ideas together</h2>
                                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            </div>
                        </div>
                        <div className="point flex items-center gap-4">
                            <span>
                                <img className='w-20' src={point2} alt="" />
                            </span>
                            <div className="text">
                                <h2>Bring those ideas to life</h2>
                                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right flex justify-center items-center w-[50%]">
                    <img className='w-40' src={youtube} alt="" />
                </div>
            </div>
        </>
    )
}

export default Introduction

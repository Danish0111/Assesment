import React from 'react';

const Email = () => {
    return (
        <>
            <div className="email_conatiner flex flex-col justify-around items-center text-white p-5 sm:p-10 lg:py-8">
                <div className="welcome text-center uppercase text-xs sm:text-sm tracking-widest">
                    1% OF THE INDUSTRY
                </div>
                <h1 className="text-lg sm:text-xl py-3 sm:py-4 text-center font-bold flex flex-col gap-2">
                    <span>Welcome to your new digital</span> 
                    <span>reality. Now.</span>
                </h1>
                
                {/* Email Input & Submit Button */}
                <div className="email w-full sm:w-[70%] md:w-[50%] lg:w-[40%] flex flex-col sm:flex-row">
                    <input 
                        className='text-gray-400 w-full p-2 sm:p-3 rounded-md sm:rounded-l-md' 
                        type="email" 
                        name="email" 
                        placeholder='Enter Your Email' 
                    />
                    <input 
                        className='bg-[#FFA229] p-3 sm:p-4 px-5 rounded-md sm:rounded-r-md mt-2 sm:mt-0' 
                        type="submit" 
                        value="Submit" 
                    />
                </div>

                {/* Ticks Section */}
                <div className="ticks flex flex-wrap justify-center gap-4 sm:gap-8 py-4">
                    {[
                        'Instant results',
                        'User-friendly interface',
                        'Personalized customization'
                    ].map((text, index) => (
                        <div key={index} className="tick flex items-center text-sm sm:text-base gap-2">
                            <span className='p-2 rounded-full'>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z" fill="white" />
                                    <path d="M14.4999 7.5L9.35346 12.6464C9.1582 12.8417 8.84162 12.8417 8.64636 12.6464L6.49991 10.5" stroke="#1C4670" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Email;

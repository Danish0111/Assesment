import React from 'react'
import phone1 from '../assets/phone1.png';
import phone2 from '../assets/phone2.png';

const MobileApp = () => {
    return (
        <>
            <div className="mobile_container bg-[#1C4670] flex justify-around items-center gap-10 p-4 sm:p-8 md:p-0 lg:px-10">
                <div className="left w-full lg:w-[40%] flex flex-col gap-14">
                    <div className=" flex flex-col gap-4">
                        <h1 className='text-white'>
                            Manage Your Services by your
                            Mobile Phone
                        </h1>
                        <p className='text-[#AAB5CD]'>Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </p>
                    </div>
                    <div className="app_link">
                        <h2 className='text-white py-2'>Get the App</h2>
                        <div className="links flex gap-5">
                            <div className="app_store bg-white flex items-center gap-4 rounded-md p-2">
                                <div className="icon">
                                    <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.2057 6.94967C12.1605 4.90565 13.2907 0.654085 18.173 0C18.7154 1.63522 17.088 6.8134 12.2057 6.94967Z" fill="#A5C937" />
                                        <path d="M7.8659 6.94967C3.37187 6.94967 0 10.7465 0 15.262C0 17.942 1.05784 24.2012 5.28914 27.7987C5.35973 27.8483 5.42923 27.8976 5.49784 27.9463C6.74744 28.8325 7.7076 29.5134 9.76457 28.48C10.6616 28.0294 11.4942 27.8582 12.5448 27.8798C13.5953 27.8582 14.428 28.0294 15.325 28.48C17.3819 29.5134 18.3421 28.8325 19.5917 27.9463C19.6313 27.9182 19.6711 27.89 19.7113 27.8615C19.7408 27.8407 19.7705 27.8197 19.8004 27.7987C21.8881 26.0237 23.2033 23.6007 24 21.2794C21.8345 20.217 20.3429 17.9827 20.3429 15.3983C20.3429 13.1107 21.5116 11.0974 23.2818 9.92839C21.8635 8.11763 19.7161 6.94967 17.2236 6.94967C16.7263 6.99509 15.5691 7.1677 14.9181 7.49475C14.1044 7.90355 12.9516 8.17609 12.5448 8.17609C12.1379 8.17609 10.9851 7.90355 10.1714 7.49475C9.52045 7.1677 8.36318 6.99509 7.8659 6.94967Z" fill="#A5C937" />
                                    </svg>
                                </div>
                                <div className="text flex flex-col">
                                    <span className='text-sm text-gray-400'>Get it on</span>
                                    <span className='font-medium '>App Store</span>
                                </div>
                            </div>
                            <div className="play_store bg-white flex items-center gap-4 rounded-md p-2">
                                <div className="icon">
                                    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.6269 9.12414L15.6137 12.3828L4.07844 0.465517L18.6269 9.12414Z" fill="#A5C937" />
                                        <path d="M1.58484 26.7201C1.0041 27.3139 0 26.9002 0 26.0671V0.932943C0 0.101376 1.00095 -0.313096 1.58262 0.277613L13.9152 12.8018C14.2717 13.1638 14.2727 13.7469 13.9174 14.1102L1.58484 26.7201Z" fill="#A5C937" />
                                        <path d="M20.1791 9.96207L23.1923 11.731C24.2711 12.8412 24.2674 13.9689 23.1923 15.0828L20.1791 16.8207L16.7399 13.4379L20.1791 9.96207Z" fill="#A5C937" />
                                        <path d="M18.7486 17.8448L15.5833 14.5862L3.92626 26.4724L18.7486 17.8448Z" fill="#A5C937" />
                                    </svg>
                                </div>
                                <div className="text flex flex-col">
                                    <span className='text-sm text-gray-400'>Get it on</span>
                                    <span>Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right w-[50%] hidden lg:flex justify-center items-end relative">
                    <div className="absolute left-0 bottom-0 w-[40%] h-full overflow-hidden">
                        <div className="phone1 absolute bottom-[-52%] w-[100%]">
                            <img src={phone1} alt="Phone 1" className="w-full" />
                        </div>
                    </div>
                    <div className="phone2 relative left-24 pt-7 w-[40%] ">
                        <img src={phone2} alt="Phone 2" className="w-full" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileApp

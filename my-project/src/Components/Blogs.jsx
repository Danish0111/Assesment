import React from 'react'
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import arrow from '../assets/arrow.png';

const Blogs = () => {
    return (
        <>
            <div className="blogs_container bg-[#FAFAFA] py-8 flex flex-col justify-center items-center p-4 lg:p-10">
                <div className="welcome text-[#EB8D15] uppercase text-sm tracking-widest">
                    Welcome to Registerkaro.in
                </div>
                <h1 className="text-xl py-4 font-semibold">
                    Explore Our Services
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-4 py-8 max-w-7xl">
                    <div className="blog1 card flex flex-col justify-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                        <div className="img"></div>
                        <div className="content text-left">
                            <div href="#" className="blog_info">
                                Prabhash Mishra • 1 Jan 2023 • Today
                            </div>
                            <a href='' className="py-2 text-lg font-medium mb-2 flex justify-between">
                                Small business & Startup
                                <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </span>
                            </a>
                            <p className="text-sm text-gray-600 mb-4">
                                Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
                            </p>
                        </div>
                        <div className="tags flex items-center font-semibold gap-2 w-full">
                            <div className="tag bg-[#F9F5FF] text-[#6941C6]">Tax & Audit</div>
                            <div className="tag bg-[#F8F9FC] text-[#363F72]">Management</div>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                        <img
                            src={blog2}
                            alt=""
                            className="w-[100%] object-contain mb-4"
                        />
                        <div className="content text-left">
                            <div href="#" className="blog_info">
                                Mahesh Kumar • 1 Jan 2023
                            </div>
                            <a href='' className="py-2 text-lg font-medium mb-2 flex justify-between">
                                Scale-Up Company Offer
                                <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </span>
                            </a>
                            <p className="text-sm text-gray-600 mb-4">
                                Mental models are simple expressions of complex processes or relationships.
                            </p>
                        </div>
                        <div className="tags flex items-center font-semibold gap-2 w-full">
                            <div className="tag bg-[#F0F9FF] text-[#026AA2]">Tax</div>
                            <div className="tag bg-[#EEF4FF] text-[#3538CD]">Research</div>
                            <div className="tag bg-[#FFF6ED] text-[#C4320A]">Complience</div>
                        </div>
                    </div>
                    <div className="blog3 card flex flex-col justify-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                        <div className="img"></div>
                        <div className="content text-left">
                            <div href="#" className="blog_info">
                                Rakhi Verma • 1 Jan 2023
                            </div>
                            <a href='' className="py-2 text-lg font-medium mb-2 flex justify-between">
                                Growing Business Package
                                <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </span>
                            </a>
                            <p className="text-sm text-gray-600 mb-4">
                                Introduction to Wireframing and its Principles. Learn from the best in the industry.
                            </p>
                        </div>
                        <div className="tags flex items-center font-semibold gap-2 w-full">
                            <div className="tag bg-[#F9F5FF] text-[#6941C6]">Audit</div>
                            <div className="tag bg-[#EEF4FF] text-[#3538CD]">Money Back</div>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                        <img
                            src={blog3}
                            alt=""
                            className="w-[100%] object-contain mb-4"
                        />
                        <div className="content text-left">
                            <div href="#" className="blog_info">
                                Karan Kumar • 1 Jan 2023
                            </div>
                            <a href='' className="py-2 text-lg font-medium mb-2 flex justify-between">
                                Scale-Up Company Offer
                                <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </span>
                            </a>
                            <p className="text-sm text-gray-600 mb-4">
                                Collaboration can make our teams stronger, and our individual designs better.
                            </p>
                        </div>
                        <div className="tags flex items-center font-semibold gap-2 w-full">
                            <div className="tag bg-[#F9F5FF] text-[#6941C6]">Money</div>
                            <div className="tag bg-[#F8F9FC] text-[#363F72]">Management</div>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                        <img
                            src={blog4}
                            alt=""
                            className="w-[100%] object-contain mb-4"
                        />
                        <div className="content text-left">
                            <div href="#" className="blog_info">
                                Richa Singh • 1 Jan 2023
                            </div>
                            <a href='' className="py-2 text-lg font-medium mb-2 flex justify-between">
                                Scale-Up Company Offer
                                <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </span>
                            </a>
                            <p className="text-sm text-gray-600 mb-4">
                                JavaScript frameworks make development easy with extensive features and functionalities.
                            </p>
                        </div>
                        <div className="tags flex items-center font-semibold gap-2 w-full">
                            <div className="tag bg-[#ECFDF3] text-[#027A48]">Tax Return</div>
                            <div className="tag bg-[#FDF2FA] text-[#C11574]">News</div>
                            <div className="tag bg-[#FFF1F3] text-[#C01048]">Audit</div>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
                        <img
                            src={blog5}
                            alt=""
                            className="w-[100%] object-contain mb-4"
                        />
                        <div className="content text-left">
                            <div href="#" className="blog_info">
                                Miss Nora• 1 Jan 2023
                            </div>
                            <a href='' className="py-2 text-lg font-medium mb-2 flex justify-between">
                                Scale-Up Company Offer
                                <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                </span>
                            </a>
                            <p className="text-sm text-gray-600 mb-4">
                                Starting a community doesn’t need to be complicated, but how do you get started?
                            </p>
                        </div>
                        <div className="tags flex items-center justify-start font-semibold gap-2">
                            <div className="tag bg-[#F9F5FF] text-[#6941C6]">Private Limited Company</div>
                            <div className="tag bg-[#F8F9FC] text-[#363F72]">Customer Success</div>
                        </div>
                    </div>
                </div>
                <div className="show_more">
                    <div className="button bg-[#1C4670]  rounded-md">
                        <button className='flex items-center gap-2 p-3 text-white'>
                            <span>Show more blogs</span>
                            <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16667 10H15M10.8333 5L15.2441 9.41074C15.5695 9.73618 15.5695 10.2638 15.2441 10.5893L10.8333 15" stroke="white" strokeWidth="1.67" strokeLinecap="round" />
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs

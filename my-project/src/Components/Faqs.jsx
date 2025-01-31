import React from 'react'
import 'flowbite';

const Faqs = () => {
    return (
        <>
            <div className="Faqs_container p-5 lg:p-20 py-16">
                <div className="welcome text-[#EB8D15] text-center uppercase text-sm tracking-widest">
                    FAQ
                </div>
                <h1 className="text-xl py-4 pb-10 text-center font-semibold">
                    Frequent Ask Questions
                </h1>
                <div className='flex flex-col gap-4' id="accordion-collapse" data-accordion="collapse">
                    <h2 className='accordian_heading' id="accordion-collapse-heading-1">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium shadow-md border border-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>Can I recover deleted files from desktop with this software?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                        <div class="p-5 border border-gray-200">
                            <p class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa veniam dolore earum doloremque quibusdam, velit sequi quia asperiores, rerum minima. Id, optio itaque!</p>
                        </div>
                    </div>
                    <h2 className='accordian_heading' id="accordion-collapse-heading-2">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium shadow-md border border-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                            <span>Can I recover deleted files from desktop with this software?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                        <div class="p-5 border border-gray-200">
                            <p class="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ipsa placeat, iste cupiditate expedita corrupti possimus eaque libero repellendus, perspiciatis nemo deleniti accusantium itaque.</p>
                        </div>
                    </div>
                    <h2 className='accordian_heading' id="accordion-collapse-heading-3">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium shadow-md border border-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Can I recover deleted files from desktop with this software?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                        <div class="p-5 border border-gray-200">
                            <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptatum praesentium reiciendis rem rerum mollitia optio voluptates? Saepe praesentium reprehenderit ipsam alias, voluptate pariatur?</p>
                        </div>
                    </div>
                    <h2 className='accordian_heading' id="accordion-collapse-heading-3">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium shadow-md border border-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Can I recover deleted files from desktop with this software?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                        <div class="p-5 border border-gray-200">
                            <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptatum praesentium reiciendis rem rerum mollitia optio voluptates? Saepe praesentium reprehenderit ipsam alias, voluptate pariatur?</p>
                        </div>
                    </div>
                    <h2 className='accordian_heading' id="accordion-collapse-heading-3">
                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium shadow-md border border-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>Can I recover deleted files from desktop with this software?</span>
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                        <div class="p-5 border border-gray-200">
                            <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, voluptatum praesentium reiciendis rem rerum mollitia optio voluptates? Saepe praesentium reprehenderit ipsam alias, voluptate pariatur?</p>
                        </div>
                    </div>
                </div>
                <div className="show_more flex justify-center py-8">
                    <div className="button  bg-[#1C4670]  rounded-md">
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

export default Faqs
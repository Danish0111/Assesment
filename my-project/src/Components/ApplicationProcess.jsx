import React from 'react'
import process2 from '../assets/process2.png'
import process3 from '../assets/process3.png'

const ApplicationProcess = () => {
    return (
        <>
            <div className="process_container bg-[#FFA229] flex flex-wrap justify-center sm:justify-between items-center p-6 sm:p-12 gap-6">
                <div className="process flex flex-col items-center text-center gap-3">
                    <span className='bg-[#EB5757] rounded-full inline-block p-4'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.200195 0.199219H21.8002V14.5992L14.6002 21.7992H0.200195V0.199219ZM3.8002 3.79922V4.99922H18.2002V3.79922H3.8002ZM3.8002 8.59922V9.79922H18.2002V8.59922H3.8002ZM11.0002 14.5992V13.3992H3.8002V14.5992H11.0002ZM13.4002 19.3992L19.4002 13.3992H13.4002V19.3992Z" fill="white" />
                        </svg>
                    </span>
                    <span>Fill up Application Form</span>
                </div>

                <div className="process flex flex-col items-center text-center gap-3">
                    <span className='bg-[#27AE60] rounded-full inline-block p-4'>
                        <img className='w-5' src={process2} alt="Process 2" />
                    </span>
                    <span>Make Online Payment</span>
                </div>

                <div className="process flex flex-col items-center text-center gap-3">
                    <span className='bg-[#F2994A] rounded-full inline-block p-4'>
                        <img className='w-5' src={process3} alt="Process 3" />
                    </span>
                    <span>Executive will Process Application</span>
                </div>

                <div className="process flex flex-col items-center text-center gap-3">
                    <span className='bg-[#828282] rounded-full inline-block p-4'>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.75 0.75H1.25C0.835156 0.75 0.5 1.08516 0.5 1.5V16.5C0.5 16.9148 0.835156 17.25 1.25 17.25H20.75C21.1648 17.25 21.5 16.9148 21.5 16.5V1.5C21.5 1.08516 21.1648 0.75 20.75 0.75ZM18.8563 3.30234L11.4617 9.05625C11.2789 9.19922 11.0234 9.19922 10.8406 9.05625L3.44375 3.30234C3.41587 3.28082 3.39541 3.25112 3.38526 3.21739C3.37511 3.18367 3.37576 3.14761 3.38713 3.11427C3.3985 3.08094 3.42002 3.052 3.44867 3.0315C3.47731 3.01101 3.51165 2.99999 3.54688 3H18.7531C18.7883 2.99999 18.8227 3.01101 18.8513 3.0315C18.88 3.052 18.9015 3.08094 18.9129 3.11427C18.9242 3.14761 18.9249 3.18367 18.9147 3.21739C18.9046 3.25112 18.8841 3.28082 18.8563 3.30234Z" fill="white" />
                        </svg>
                    </span>
                    <span>Get Confirm Mail</span>
                </div>
            </div>
        </>
    )
}

export default ApplicationProcess

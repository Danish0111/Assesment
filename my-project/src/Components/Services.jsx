import React from 'react'
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'
import vector3 from '../assets/vector3.png'
import vector4 from '../assets/vector4.png'
import vector5 from '../assets/vector5.png'
import vector6 from '../assets/vector6.png'
const Services = () => {
    return (
        <>
            <div className="Services_container bg-[#FAFAFA] py-8 flex flex-col justify-center items-center">
                <div className="welcome text-[#EB8D15]">WELCOME TO REGISTERKARO.IN</div>
                <h1 className='text-xl py-4'>Explore Our Services</h1>
                <div class="grid-container">
                    <div class="card flex flex-col justify-center items-center">
                        <img src={vector1} alt="Company Formation Image" />
                        <h3>Company Formation</h3>
                        <p>Build web-based solutions that enhance customer experience.</p>
                        <a href="#" class="learn-more">
                            Learn More <span>&rarr;</span>
                        </a>
                    </div>
                    <div class="card flex flex-col justify-center items-center">
                        <img src={vector2} alt="Company Formation Image" />
                        <h3>Company Secretarial Services</h3>
                        <p>Make data-driven decisions and
                            utilize technology to reach
                            business goals.</p>
                        <a href="#" class="learn-more">
                            Learn More <span>&rarr;</span>
                        </a>
                    </div>
                    <div class="card flex flex-col justify-center items-center">
                        <img src={vector3} alt="Company Formation Image" />
                        <h3>Virtual Office Address</h3>
                        <p>Foster customer relationships by
                            effectively serving your market.</p>
                        <a href="#" class="learn-more">
                            Learn More <span>&rarr;</span>
                        </a>
                    </div>
                    <div class="card flex flex-col justify-center items-center">
                        <img src={vector4} alt="Company Formation Image" />
                        <h3>Annual Compliance Services</h3>
                        <p>Turn your ideas into modern
                            products with our design experts.</p>
                        <a href="#" class="learn-more">
                            Learn More <span>&rarr;</span>
                        </a>
                    </div>
                    <div class="card flex flex-col justify-center items-center">
                        <img src={vector5} alt="Company Formation Image" />
                        <h3>Payroll Services</h3>
                        <p>Expand your business across the
                            globe with minimal effort.</p>
                        <a href="#" class="learn-more">
                            Learn More <span>&rarr;</span>
                        </a>
                    </div>
                    <div class="card flex flex-col justify-center items-center">
                        <img src={vector6} alt="Company Formation Image" />
                        <h3>Bookkeeping Services</h3>
                        <p>Steering user behaviours with
                            creative design, data insights &
                            technology.</p>
                        <a href="#" class="learn-more">
                            Learn More <span>&rarr;</span>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services

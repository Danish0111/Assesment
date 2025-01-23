import React from 'react';
import vector1 from '../assets/vector1.png';
import vector2 from '../assets/vector2.png';
import vector3 from '../assets/vector3.png';
import vector4 from '../assets/vector4.png';
import vector5 from '../assets/vector5.png';
import vector6 from '../assets/vector6.png';

const Services = () => {
  return (
    <>
      <div className="Services_container bg-[#FAFAFA] py-8 flex flex-col justify-center items-center">
        <div className="welcome text-[#EB8D15] uppercase text-sm tracking-widest">
          Welcome to Registerkaro.in
        </div>
        <h1 className="text-xl py-4 text-center font-semibold">
          Explore Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8 max-w-7xl">
          <div className="card flex flex-col justify-center items-center text-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
            <img
              src={vector1}
              alt="Company Formation Image"
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-lg font-medium mb-2">Company Formation</h3>
            <p className="text-sm text-gray-600 mb-4">
              Build web-based solutions that enhance customer experience.
            </p>
            <a
              href="#"
              className="learn-more font-semibold hover:underline"
            >
              Learn More <span>&rarr;</span>
            </a>
          </div>
          <div className="card flex flex-col justify-center items-center text-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
            <img
              src={vector2}
              alt="Company Secretarial Services"
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-lg font-medium mb-2">
              Company Secretarial Services
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Make data-driven decisions and utilize technology to reach
              business goals.
            </p>
            <a
              href="#"
              className="learn-more font-semibold hover:underline"
            >
              Learn More <span>&rarr;</span>
            </a>
          </div>
          <div className="card flex flex-col justify-center items-center text-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
            <img
              src={vector3}
              alt="Virtual Office Address"
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-lg font-medium mb-2">Virtual Office Address</h3>
            <p className="text-sm text-gray-600 mb-4">
              Foster customer relationships by effectively serving your market.
            </p>
            <a
              href="#"
              className="learn-more font-semibold hover:underline"
            >
              Learn More <span>&rarr;</span>
            </a>
          </div>
          <div className="card flex flex-col justify-center items-center text-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
            <img
              src={vector4}
              alt="Annual Compliance Services"
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-lg font-medium mb-2">
              Annual Compliance Services
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Turn your ideas into modern products with our design experts.
            </p>
            <a
              href="#"
              className="learn-more font-semibold hover:underline"
            >
              Learn More <span>&rarr;</span>
            </a>
          </div>
          <div className="card flex flex-col justify-center items-center text-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
            <img
              src={vector5}
              alt="Payroll Services"
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-lg font-medium mb-2">Payroll Services</h3>
            <p className="text-sm text-gray-600 mb-4">
              Expand your business across the globe with minimal effort.
            </p>
            <a
              href="#"
              className="learn-more font-semibold hover:underline"
            >
              Learn More <span>&rarr;</span>
            </a>
          </div>
          <div className="card flex flex-col justify-center items-center text-center p-6 border border-gray-200 rounded-lg bg-white shadow-md">
            <img
              src={vector6}
              alt="Bookkeeping Services"
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-lg font-medium mb-2">Bookkeeping Services</h3>
            <p className="text-sm text-gray-600 mb-4">
              Steering user behaviours with creative design, data insights &
              technology.
            </p>
            <a
              href="#"
              className="learn-more font-semibold hover:underline"
            >
              Learn More <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import React from 'react';
import img from '../../../Assets/Hero-Leptop.jpg'

const Hero = () => {
    return (
        <section>
        <div className="bg-green-100">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900 uppercase">The Gadget Bank</h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Buy laptop at Lowest price guaranteed in Bangladesh. All popular Laptop brands including Macbook, HP, Asus, Dell, Lenovo, MSI, and Xiaomi are available.</p>
                <div className="flex flex-wrap justify-center">
                    <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get started</button>
                    <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</button>
                </div>
            </div>
        </div>
        <img src="https://whattobuy.thedailystar.net/wp-content/uploads/2020/10/real.jpeg" alt="" className="w-5/6 h-96 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
    </section>
    );
};

export default Hero;
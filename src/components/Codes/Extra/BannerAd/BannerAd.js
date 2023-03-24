import React from 'react';

const BannerAd = () => {
    return (
        <div className="p-6 py-12 bg-green-200 ">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<div className="text-center text-6xl tracking-tighter font-bold">
				<img className='w-96 rounded-lg' src="https://www.cloud.ryanscomputers.com/cdn/media_gallery/Dynabook-winter-sell_offer-page-banner_1678185376.jpg" alt="" />
			</div>
			<div className="space-x-2 text-center text-xl py-2 lg:py-0">
				<span>Up to</span>
				<span className="font-bold text-2xl">50% Off</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 ">Shop Now</a>
		</div>
	</div>
</div>
    );
};

export default BannerAd;
import React from 'react';
import BannerAd from '../../Extra/BannerAd/BannerAd';
import Hero from '../../Extra/Hero/Hero';
import AllCategoriesData from './AllCategoriesData/AllCategoriesData';
import ProductCategory from './ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <Hero />
            <BannerAd />
            <ProductCategory />
            <AllCategoriesData />
        </div>
    );
};

export default Home;
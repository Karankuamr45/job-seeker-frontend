import React, { useContext } from 'react';
import { Context } from '../../main';
import HeroSection from './HeroSection';
import PopularCategories from './PopularCategories';
import PopularCompanies from './PopularCompanies';
import HowItWork from './HowItWork';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if(!isAuthorized){
    return <Navigate to={"/login"} />
  }
  return <section className='homePage page'>
    <HeroSection />
    <HowItWork />
    <PopularCategories />
    <PopularCompanies />

  </section>
}

export default Home

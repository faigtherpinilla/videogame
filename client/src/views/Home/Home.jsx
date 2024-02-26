import React from 'react';
import style from './Home.module.css';
import HomeContent from '../../componentes/HomeContent/HomeContent';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <HomeContent />
    </div>
  );
};

export default Home;
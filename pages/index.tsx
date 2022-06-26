import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Content from '../components/HomePageComponents/Content';
import Description from '../components/HomePageComponents/Description';
import Hero from '../components/HomePageComponents/Hero';
import Info from '../components/HomePageComponents/Info';
import Info2 from '../components/HomePageComponents/Info2';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Hero />
        <Info />
        <Content
          heading='website development'
          text='Grow your brand, improve internal processes, reach emerging markets. Build your web application with our software developers.'
          image='https://acestudios.tech/webdev.png'
          imageText='website development'
          reverse={true}
        />
        <Content
          heading='website development'
          text='Grow your brand, improve internal processes, reach emerging markets. Build your web application with our software developers.'
          image='https://acestudios.tech/webdev.png'
          imageText='website development'
          reverse={false}
        />
        <Content
          heading='website development'
          text='Grow your brand, improve internal processes, reach emerging markets. Build your web application with our software developers.'
          image='https://acestudios.tech/webdev.png'
          imageText='website development'
          reverse={true}
        />
        <Content
          heading='website development'
          text='Grow your brand, improve internal processes, reach emerging markets. Build your web application with our software developers.'
          image='https://acestudios.tech/webdev.png'
          imageText='website development'
          reverse={false}
        />
        <Info2
          image='https://acestudios.tech/webdev.png'
          imageText='ace studios'
        />
        <Description />
      </div>
    </>
  );
};

export default Home;

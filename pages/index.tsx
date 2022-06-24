import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Content from '../components/HomePageComponents/Content';
import Hero from '../components/HomePageComponents/Hero';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Hero />
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
      </div>
    </>
  );
};

export default Home;

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className={styles['title-homepage']}>Welcome NextJs</h1>
      <Footer />
    </>
  )
}

export default Home

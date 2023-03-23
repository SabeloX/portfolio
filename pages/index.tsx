import { AppBar, Container, Toolbar } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Colours } from '../colours'
import { Hero } from '../components/audience/hero'
import { Navbar } from '../components/audience/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [textColor, setTextColor] = useState<string>(Colours.black);
  const [mainColor, setMainColor] = useState<string>(Colours.darkBlue);
  const [lightShadeColor, setLightShadeColor] = useState<string>(Colours.lightBlue);
  useEffect(() => {
    if (theme === "dark") {
      setTextColor(Colours.white);
      setMainColor(Colours.darkGreen);
      setLightShadeColor(Colours.lightGreen);
    }
    else if(theme === "light"){
      setTextColor(Colours.black);
      setMainColor(Colours.darkBlue);
      setLightShadeColor(Colours.lightBlue);
    }
  }, [theme]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sabelo</title>
        <meta name="description" content="Sabelo's personal portfolio. Click the link and explore." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        sx={{
          padding: "0px !important",
          backgroundColor: mainColor,
          minHeight: "100vh"
        }}
      >
        <Navbar
          textColor={textColor}
          backgroundColor={mainColor}
          setTheme={setTheme}
          theme={theme}
        />
        <main className={styles.main}>
          <Hero
            textColor={textColor}
          />
        </main>

        <footer className={styles.footer}>
          
        </footer>
      </Container>
    </div>
  )
}

export default Home

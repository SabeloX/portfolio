import { AppBar, Container, Toolbar } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Colours } from '../colours'
import { About } from '../components/audience/about'
import { Contact } from '../components/audience/contact'
import { Hero } from '../components/audience/hero'
import { Navbar } from '../components/audience/navbar'
import { Projects } from '../components/audience/projects'
import { Skills } from '../components/audience/skills'
import styles from '../styles/Home.module.css'
import prisma from '../lib/prisma'
import { Skills as SkillsType } from '@prisma/client'

const aboutImage: string = "/profile.svg";
const aboutText: string = "I have been coding since 2017 as a hobby then I started getting into it professionally after I discovered that I loved it. I studied BSc. Electrical and Computer Engineering at the University of Cape Town, majored in Computer Science and Embedded Systems. I am very excited to work in the tech industry and be part of something great.";

interface HomeProps {
  skills: SkillsType[]
}

const Home: NextPage<HomeProps> = ({ skills }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [textColor, setTextColor] = useState<string>(Colours.darkThemeTextColor);
  const [mainColor, setMainColor] = useState<string>(Colours.darkThemeMainColor);
  const [lightShadeColor, setLightShadeColor] = useState<string>(Colours.darkThemeLightToneColor);
  useEffect(() => {
    if (theme === "dark") {
      setTextColor(Colours.darkThemeTextColor);
      setMainColor(Colours.darkThemeMainColor);
      setLightShadeColor(Colours.darkThemeLightToneColor);
      const body = document.querySelector("body");
      if (body) {
        body.style.backgroundColor = Colours.darkThemeMainColor
      }
    }
    else if(theme === "light"){
      setTextColor(Colours.lightThemeTextColor);
      setMainColor(Colours.lightThemeMainColor);
      setLightShadeColor(Colours.lightThemeLightToneColor);
      const body = document.querySelector("body");
      if (body) {
        body.style.backgroundColor = Colours.lightThemeMainColor
      }
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
          minHeight: "100vh",
          maxWidth: "1360px !important"
        }}
        id="home"
      >
        <Navbar
          textColor={textColor}
          backgroundColor={mainColor}
          setTheme={setTheme}
          theme={theme}
          lightShadeColor={lightShadeColor}
        />
        <main className={styles.main}>
          <Hero
            textColor={textColor}
          />
          <About
            textColor={textColor}
            aboutImage={aboutImage}
            aboutText={aboutText}
          />
          <Skills
            skills={skills}
            textColor={textColor}
            lightShadeColor={lightShadeColor}
          />
          <Projects
            textColor={textColor}
            lightShadeColor={lightShadeColor}
            mainColor={mainColor}
          />
          <Contact
            textColor={textColor}
            lightShadeColor={lightShadeColor}
          />
        </main>

        <footer className={styles.footer}>
          
        </footer>
      </Container>
    </div>
  )
}

export const getServerSideProps = async () => {
  const skills = await prisma.skills.findMany();
  console.log(skills)
  return {
    props: {
      skills
    }
  }
}

export default Home

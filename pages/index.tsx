import { AppBar, Container, Toolbar } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Colours } from '../colours'
import { About } from '../components/audience/about'
import { Hero } from '../components/audience/hero'
import { Navbar } from '../components/audience/navbar'
import { Skills } from '../components/audience/skills'
import styles from '../styles/Home.module.css'

export type SkillType = {
  title: string;
  data: string[];
}

const aboutImage: string = "/profile.svg";
const aboutText: string = "I have been coding since 2017 as a hobby then I started getting into it professionally after I discovered that I loved it. I studied BSc. Electrical and Computer Engineering at the University of Cape Town, majored in Computer Science and Embedded Systems. I am very excited to work in the tech industry and be part of something great.";
const skills: SkillType[] = [
  {
    title: "Frontend",
    data: ["HTML/CSS", "JavaScript", "Bootstrap", "React.js", "Material UI", "Mantine", "Responsiveness"]
  },
  {
    title: "Backend",
    data: ["Node.js", "Python", "MongoDB/Mongoose", "Express.js", "SQL", 'REST API', "AWS DynamoDB"]
  },
  {
    title: "Other",
    data: ["Git/Github", "AWS Services", "Agile/SCRUM", "Typescript", "Linux/Unix"]
  }
]

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
      const body = document.querySelector("body");
      if (body) {
        body.style.backgroundColor = Colours.darkGreen
      }
    }
    else if(theme === "light"){
      setTextColor(Colours.black);
      setMainColor(Colours.darkBlue);
      setLightShadeColor(Colours.lightBlue);
      const body = document.querySelector("body");
      if (body) {
        body.style.backgroundColor = Colours.darkBlue
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
          // maxWidth: "1366px !important"
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
        </main>

        <footer className={styles.footer}>
          
        </footer>
      </Container>
    </div>
  )
}

export default Home

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
import { Detail, DetailsDocument, Project, ProjectsDocument, Skill, SkillsDocument } from '../lib/database'
import { connectDB } from '../lib/database'
import { details, projects, skills } from '../samples'

interface HomeProps {
  skills: SkillsDocument[];
  projects: ProjectsDocument[];
  details: DetailsDocument;
}

const Home: NextPage<HomeProps> = () => {
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
        <title>{details.name}</title>
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
            name={`${details.name} ${details.surname}`}
            slogan={details.slogan}
            profession={details.profession}
          />
          <About
            textColor={textColor}
            aboutImage={details.profile}
            aboutText={details.about}
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
            projects={projects}
          />
          <Contact
            textColor={textColor}
            lightShadeColor={lightShadeColor}
            contact={details.contact}
            email={details.email}
          />
        </main>

        <footer className={styles.footer}>
          
        </footer>
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      skills: skills,
      projects: projects,
      details: details,
    }
  }
}

export default Home

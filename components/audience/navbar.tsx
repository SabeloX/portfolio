import { AppBar, Box, Collapse, Container, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Close } from "@mui/icons-material";
import { useState } from "react";

const locations = [
    {
        label: "Home",
        path: "home"
    },
    {
        label: "About",
        path: "about"
    },
    {
        label: "Skills",
        path: "skills"
    },
    {
        label: "Projects",
        path: "projects"
    },
    {
        label: "Contact",
        path: "contact"
    },
]

const logoText = "Sabelo";

export interface NavbarProps {
    textColor: string;
    backgroundColor: string;
    theme: "dark" | "light";
    setTheme: (value: "dark" | "light") => void;
    lightShadeColor: string;
}

export const Navbar = ({ textColor, backgroundColor, theme, setTheme, lightShadeColor }: NavbarProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <nav>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor,
                    boxShadow: "none",
                    height: "10vh",
                    width: "100%",
                    top: 0
                }}
            >
                <Toolbar>
                    <Container
                        maxWidth="lg"
                        sx={{
                            gap: "30px",
                            display: { sx: "none", md: "flex", sm: "flex", xs: "none" },
                            alignItems: "center"
                        }}
                    >
                        <Typography
                            sx={{
                                color: textColor,
                                fontSize: "24px"
                            }}
                        >
                            {logoText}
                        </Typography>
                        {
                            locations.map((item, index) => (
                                <Link
                                    className="text"
                                    key={index}
                                    to={item.path}
                                    smooth={true}
                                    duration={800}
                                    offset={-20}
                                    style={{
                                        color: textColor,
                                        cursor: "pointer"
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))
                        }
                    </Container>
                    <Container
                        sx={{
                            padding: "0px  !important",
                            display: { sm: "none", xs: "flex" },
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <IconButton
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon sx={{ color: textColor }} fontSize="large" />
                        </IconButton>
                        <Typography
                            variant="subtitle1"
                            className="text"
                            sx={{
                                color: textColor,
                                fontSize: "24px"
                            }}
                        >
                            {logoText}
                        </Typography>
                        <Collapse
                            in={open}
                            timeout={{
                                enter: 500,
                                exit: 500
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: lightShadeColor,
                                    height: "100vh",
                                    width: "100vw",
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "60px",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        padding: "40px"
                                    }}
                                    onClick={() => setOpen(false)}
                                >
                                    <Close sx={{ color: textColor }} fontSize="large"/>
                                </IconButton>
                                {
                                    locations.map((item, index) => (
                                        <Link
                                            className="text"
                                            key={index}
                                            to={item.path}
                                            smooth={true}
                                            duration={800}
                                            offset={-40}
                                            style={{
                                                color: textColor,
                                                cursor: "pointer",
                                                fontSize: "34px"
                                            }}
                                            onClick={() => setOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))
                                }
                            </Box>
                        </Collapse>
                    </Container>
                    <IconButton
                        onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}
                    >
                        {
                            theme === "dark" ? <LightModeIcon fontSize="large" sx={{ color: textColor }} /> : <DarkModeIcon fontSize="large" sx={{ color: textColor }} />
                        }
                    </IconButton>
                </Toolbar>
            </AppBar>
        </nav>
    )
}
import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

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
}

export const Navbar = ({ textColor, backgroundColor, theme, setTheme } : NavbarProps ) => {
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
                            sx={{
                            }}
                        >
                            <MenuIcon sx={{ color: textColor }} />
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
                    </Container>
                    <IconButton
                        onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}
                    >
                        {
                            theme === "dark" ? <LightModeIcon sx={{ color: textColor }} /> : <DarkModeIcon sx={{ color: textColor }} />
                        }
                    </IconButton>
                </Toolbar>
            </AppBar>
        </nav>
    )
}
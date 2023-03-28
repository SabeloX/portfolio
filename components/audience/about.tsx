import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { ComponentShell } from "../component-shell";

export interface AboutProps {
    textColor: string;
    aboutText: string;
    aboutImage: string;
}

export const About = ({ textColor, aboutText, aboutImage } : AboutProps) => {
    return (
        <ComponentShell
            textColor={textColor}
            heading="About"
            id="about"
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: "50px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px !important"
                }}
            >
                <Image
                    src={aboutImage}
                    width={350}
                    height={350}
                    alt="Profile image"
                    loading="lazy"
                />
                <Typography
                    variant="body1"
                    sx={{
                        color: textColor
                    }}
                >
                    {aboutText}
                </Typography>
            </Container>
        </ComponentShell>
    )
}
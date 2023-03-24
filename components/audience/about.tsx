import { Container, Typography } from "@mui/material";
import Image from "next/image";

export interface AboutProps {
    textColor: string;
    aboutText: string;
    aboutImage: string;
}

export const About = ({ textColor, aboutText, aboutImage } : AboutProps) => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                minHeight: "100vh"
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: textColor
                }}
                className="heading"
            >
                About
            </Typography>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px !important"
                }}
            >
                <Image
                    src={aboutImage}
                    width={250}
                    height={250}
                    alt="Profile image"
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
        </Container>
    )
}
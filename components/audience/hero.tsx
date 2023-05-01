import { Container, Typography } from "@mui/material"

export interface HeroProps {
    textColor: string;
    name: string;
    profession: string;
    slogan: string;
}

export const Hero = ({ textColor, name, profession, slogan } : HeroProps) => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
            <Typography sx={{ color: textColor }} variant="h4">{ name }</Typography>
            <Typography 
                className="heading" sx={{ color: textColor }} variant="h2">{ profession }</Typography>
            <Typography sx={{ color: textColor }} variant="subtitle2">{ slogan }</Typography>
        </Container>
    )
}
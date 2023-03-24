import { Container, Typography } from "@mui/material"

export interface HeroProps {
    textColor: string;
}

export const Hero = ({ textColor } : HeroProps) => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "90vh",
                justifyContent: "center",
                textAlign: "center"
            }}
        >
            <Typography sx={{ color: textColor}} variant="h4">Sabelo Mtetwa</Typography>
            <Typography 
                className="heading" sx={{ color: textColor}} variant="h2">Fullstack Developer</Typography>
            <Typography sx={{ color: textColor}} variant="subtitle2">A Full-stack developer that turns business problems into software solutions.</Typography>
        </Container>
    )
}
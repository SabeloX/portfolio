import { Container, Typography } from "@mui/material"
import { ReactNode } from "react";

export interface ComponentShellProps {
    heading: string;
    textColor: string;
    children: ReactNode;
}

export const ComponentShell = ({ heading, textColor, children }: ComponentShellProps) => {
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
                {heading}
            </Typography>
            { children }
        </Container>
    )
}
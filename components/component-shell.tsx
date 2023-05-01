import { Container, CSSObject, Typography } from "@mui/material"
import { ReactNode } from "react";

export interface ComponentShellProps {
    heading: string;
    textColor: string;
    children: ReactNode;
    sx?: CSSObject;
    subHeading?: string;
    id: string;
}

export const ComponentShell = ({ heading, textColor, children, sx, subHeading, id }: ComponentShellProps) => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "100px",
                // minHeight: "100vh",
                padding: "60px 16px",
                ...sx
            }}
            id={id}
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "0 !important"
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
                <Typography
                    variant="h6"
                    sx={{
                        color: textColor
                    }}
                    className="heading"
                >
                    {subHeading}
                </Typography>
            </Container>
            { children }
        </Container>
    )
}
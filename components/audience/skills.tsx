import { Box, Container, Typography } from "@mui/material"
import { ComponentShell } from "../component-shell"
import { SkillsDocument } from "../../lib/database";

export interface SkillsProps {
    textColor: string;
    skills: SkillsDocument[];
    lightShadeColor: string;
}

export const Skills = ({textColor, skills, lightShadeColor}: SkillsProps) => {
    return (
        <ComponentShell
            heading="Skills"
            textColor={textColor}
            id="skills"
        >
            <Container
                sx={{
                    padding: "0px !important",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: "20px",
                }}
            >
                {
                    skills.map((item, index) => (
                        <Box
                            key={item._id + index}
                            sx={{
                                backgroundColor: lightShadeColor,
                                borderRadius: "20px",
                                boxShadow: "2px 2px 12px rgba(0,0,0,30%)",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                height: "400px",
                                width: { sm: "400px" }
                            }}
                        >
                            <Typography
                                className="heading"
                                variant="h5"
                                fontSize={26}
                                color={textColor}
                                sx={{
                                    textDecoration: "underline"
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Container
                                sx={{
                                    padding: "0 !important",
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    minHeight: "160px",
                                }}
                            >
                                {
                                    item.data.map((skill: string, index: number) => (
                                        <Typography
                                            key={index + skill}
                                            variant="body1"
                                            className="text"
                                            sx={{
                                                color: textColor
                                            }}
                                            fontSize={18}
                                            lineHeight={1.75}
                                        >
                                            { skill }
                                        </Typography>
                                    ))
                                }
                            </Container>
                        </Box>
                    ))
                }
            </Container>
        </ComponentShell>
    )
}
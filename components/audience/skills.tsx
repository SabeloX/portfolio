import { Box, Container, Typography } from "@mui/material"
import { SkillType } from "../../pages";
import { ComponentShell } from "../component-shell"

export interface SkillsProps {
    textColor: string;
    skills: SkillType[];
    lightShadeColor: string;
}

export const Skills = ({textColor, skills, lightShadeColor}: SkillsProps) => {
    return (
        <ComponentShell
            heading="Skills"
            textColor={textColor}
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
                            key={index}
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
                            >
                                {item.title}
                            </Typography>
                            <Container
                                sx={{
                                    padding: "0 !important",
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    // height: "160px",
                                }}
                            >
                                {
                                    item.data.map((skill, index) => (
                                        <Typography
                                            key={index}
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
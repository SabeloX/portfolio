import { Box, Button, Container, FormControlLabel, FormGroup, IconButton, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ComponentShell } from "../component-shell";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';

export interface ContactProps {
    textColor: string;
    lightShadeColor: string;
}

export const Contact = ({ textColor, lightShadeColor }: ContactProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    return (
        <ComponentShell
            heading="Get in touch"
            textColor={textColor}
            subHeading="Please do not hesitate to contact me about anything."
            id="contact"
        >
            <Container
                sx={{
                    padding: "0 !important",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center" },
                    justifyContent: { md: "center" },
                    gap: "30px"
                }}
            >
                {
                    [
                        {
                            label: "Contact number",
                            value: "+27 67 731 2806",
                            icon: <PhoneIphoneIcon
                                sx={{ color: textColor }}
                                fontSize="large"
                            />
                        },
                        {
                            label: "Email address",
                            value: "sabelo.x.mtetwa@gmail.com",
                            icon: <MailIcon
                                sx={{ color: textColor }}
                                fontSize="large"
                            />
                        }
                    ].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: "400px",
                                height: "150px",
                                backgroundColor: lightShadeColor,
                                borderRadius: "20px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Container
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                {item.icon}
                                <Typography
                                    className="heading"
                                    fontSize={26}
                                    sx={{
                                        color: textColor
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            </Container>
                            <Typography
                                className="text"
                                fontSize={20}
                                sx={{
                                    color: textColor
                                }}
                            >
                                <a
                                    href={
                                        item.label === "Contact number" ?
                                            `tel:${item.value}` :
                                            `mail:${item.value}`
                                    }
                                >
                                    {item.value}
                                </a>
                            </Typography>
                        </Box>
                    ))
                }
            </Container>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    padding: "0 !important",
                    maxWidth: { md: "650px" }
                }}
            >
                <TextField
                    variant="standard"
                    sx={{
                        color: `${textColor} !important`,
                        borderBottom: `1px solid ${textColor} !important`,
                        "& .MuiFormLabel-root": {
                            color: `${textColor}`,
                        },
                        "& .MuiInputBase-input": {
                            color: `${textColor}`,
                        },
                        "& .MuiInputBase-root:after": {
                            borderBottom: `1px solid ${textColor} !important`,
                        }
                    }}
                    label="Name"
                    value={name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                />
                <TextField
                    variant="standard"
                    sx={{
                        color: `${textColor} !important`,
                        borderBottom: `1px solid ${textColor} !important`,
                        "& .MuiFormLabel-root": {
                            color: `${textColor}`,
                        },
                        "& .MuiInputBase-input": {
                            color: `${textColor}`,
                        },
                        "& .MuiInputBase-root:after": {
                            borderBottom: `1px solid ${textColor} !important`,
                        }
                    }}
                    label="Email"
                    value={email}
                    type="email"
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                />
                <TextField
                    multiline
                    rows={4}
                    variant="standard"
                    label="Message"
                    sx={{
                        color: `${textColor} !important`,
                        borderBottom: `1px solid ${textColor} !important`,
                        "& .MuiFormLabel-root": {
                            color: `${textColor}`,
                        },
                        "& .MuiInputBase-input": {
                            color: `${textColor}`,
                        },
                        "& .MuiInputBase-root:after": {
                            borderBottom: `1px solid ${textColor} !important`,
                        }
                    }}
                    value={message}
                    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
                />
                <FormGroup>
                    <RadioGroup
                        sx={{
                            flexDirection: { md: "row", xs: "column" },
                            justifyContent: { md: "center" },
                            gap: "20px",
                            color: textColor,
                            "& .MuiButtonBase-root": {
                                color: textColor,
                            }
                        }}
                        onChange={(event, value) => setSubject(value)}
                    >
                        {
                            ["Request a service", "Enquire about me", "Just saying hi!"].map((item, index) => (
                                <FormControlLabel
                                    key={index}
                                    labelPlacement="end"
                                    value={item}
                                    control={<Radio />}
                                    label={item}
                                />
                            ))
                        }
                    </RadioGroup>
                </FormGroup>
                <Button
                    sx={{
                        backgroundColor: `${lightShadeColor} !important`,
                        width: "200px",
                        borderRadius: "15px",
                        height: "35px",
                        color: textColor,
                        boxShadow: "2px 2px 12px rgba(0,0,0,30%)",
                        textTransform: "unset !important",
                        padding: "10px 0"
                    }}
                >
                    Send
                </Button>
            </Container>
        </ComponentShell>
    )
}
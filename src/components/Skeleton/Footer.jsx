import React, {useState} from 'react'
import styled, { ThemeProvider } from "styled-components"
import { ReactComponent as emailSVG} from "../../assets/email.svg"
import { ReactComponent as githubSVG} from "../../assets/github.svg"
import { ReactComponent as linkedinSVG} from "../../assets/linkedin.svg"


export const Footer = () =>
{
    const [active, setActive] = useState("Resume");
    const links = [["/", <Github/>], ["/", <Linkedin/>], ["/", <Email/>]]

    return (
        <Container>
            <SocialContainer>
                {
                    links.map((elem) =>
                    elem[1]
                    )
                }
            </SocialContainer>
            <Delimeter/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    position: fixed;
    left: 0;
    bottom: 0;
`

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Github = styled(githubSVG)`
    display: flex;
    width: 70%;
    stroke: ${props => props.theme.colors.highlight};
    // padding: 9px;
`
const Linkedin = styled(linkedinSVG)`
    display: flex;
    width: 70%;
    stroke: ${props => props.theme.colors.highlight};
    // padding: 9px;
`
const Email = styled(emailSVG)`
    display: flex;
    width: 70%;
    stroke: ${props => props.theme.colors.highlight};
    // padding: 9px;
`

const Delimeter = styled.div`
    display: flex;

    width: 3px;
    background: ${props => props.theme.colors.primary};
`
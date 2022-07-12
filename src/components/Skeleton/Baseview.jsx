import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import { Footer } from './Footer'
import { NavBar } from './NavBar'
import { styles } from '../../styles'


export const Baseview = ({ children }) =>
{
    return (
    <ThemeProvider theme={styles}>
        <Container>
            <Background/>
            <NavBar/>
            <PageContent>
                {children}
            </PageContent>
            <Footer/>
        </Container>
    </ThemeProvider>
    )
}

const Container = styled.div`
    display:flex;

    width: 100vw;
    height: 100vh;
`
const Background = styled.div`
    display:flex;

    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    background: ${props => props.theme.colors.background || "grey"};
`

const PageContent = styled.div`
    display: flex;
    width: 75%;
    margin: auto;
    height: 100%;
`
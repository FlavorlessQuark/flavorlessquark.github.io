import React from 'react'
import styled from "styled-components"


export const ProjectDemo = ({ children }) =>
{
    return (
     <Column>
        <ProjectName> PLACEHOLDER </ProjectName>
        <Canvas/>
        <Controls>Controls : __</Controls>
        <Divider>&#8964;</Divider>
        <ProjectName>PLACEHOLDER</ProjectName>
        <ProjectDesc>
        Porjects I made  bla blah blah blah bla blah blah blah
 bla blah blah blah bla blah blah blah bla blah blah blah bla blah blah blah bla 
blah blah blah bla blah blah blah
 bla blah blah blah bla blah blah blah bla blah blah blah bla blah blah blah bla blah blah 
blah bla blah blah blah
Porjects I made  bla blah blah blah bla blah blah blah
 bla blah blah blah bla blah blah blah bla blah blah blah bla blah blah blah bla 
blah blah blah bla blah blah blah
 bla blah blah blah bla blah blah blah bla blah blah blah bla blah blah blah bla blah blah 
blah bla blah blah blah
Porjects I made  bla blah blah blah bla blah blah blah
 bla blah blah blah bla blah blah blah bla blah blah blah bla blah blah blah bla 
blah blah blah bla blah blah blah
 bla blah blah blah bla blah blah blah bla blah blah blah bla blah blah blah bla blah blah 
blah bla blah blah blah
        </ProjectDesc>
     </Column>
    )
}


const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Canvas = styled.canvas`
    background: black;
    width: 100%;
    border: 20px solid #78787863;
    // aspect-ratio: 1/1;
    height: 100%;
`

const ProjectName = styled.div`
    display: flex;
    color: ${props => props.theme.colors.secondary};
    padding: 10px;
    font-family: Source Code Pro;
`

const Controls = styled.div`
    color: white;
    font-family: Source Code Pro;
    padding: 10px;
    align-self:baseline;
`

const Divider = styled.div`
    display: flex;
    width: 82%;
    align-self: center;
    justify-content: center;
    font-size: 70px;
    border-bottom: 2px solid  ${props => props.theme.colors.highlight};
    text-align: center;
    color :  ${props => props.theme.colors.primary};
`

const ProjectDesc = styled.div`
    display: flex;
    font-family: Source Code Pro;
`
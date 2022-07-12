import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import { Helmet } from 'react-helmet';

// Here we will get the projects dynamically
// They should all be located in the Wasync organization
// First we will check if the url params correspon to a repo by checking github
// Once we have established that a repo does exist we will do 3 things :
// First we will fetch the project's config file and parse it. It should have the following fields:
// name, shortdesc, logo,  description, controls, aspect ratio
// Then parse description so that :
//  This is a sample text with a |link| , **bold** *italic*  [0xFFFF colored text]
// becomes
// <Text> This is a sample text with a <Link>link<Link/> <Bold>bold<Bold/> <Italic>italic<Italic> <p style={{color: 0xFFFF}}> colored text <p>
// Lastly we will fetch the js script with : "https://cdn.jsdelivr.net/gh/Wasync/[repo]/[script url (not including branch)]"
export const ProjectDemo = ({ children }) =>
{
    const [runScript, setRun] = useState(1);
    useEffect(() => {
        if (setRun && window.Module)
        {
            console.log("loaded");
            window.Module({
                canvas: (() => document.getElementById('canvas'))(),
            })
            .then(() => {
                console.log("loaded");
            });
            setRun(0)
        }
        else if (runScript < 100)
        {
            setRun(runScript + 1)
            console.log("HAAAAAAAAa")
        }
    }, [runScript]);
    const handleScript = (e) => {
      console.log("loaded", window.TEST);
    };
    return (
        <>
     <Column>
        <ProjectName> PLACEHOLDER </ProjectName>
        <Canvas id="canvas"/>
        <Controls>Controls : [Tab]: switch between visualize and draw mode [Space] In draw mode, calculate the lines [Left / right arrow] In visualize mode, adjust sensitivity </Controls>
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
     <Helmet>
              <script
                // type='text/plain'
                src="https://cdn.jsdelivr.net/gh/LumenNoctis/Shape_detect/draw.js"/>
                
                <script>
          {`
            console.log('Test', window.TEST);
          `}
        </script>
          </Helmet>
          {/* <button onClick={() =>console.log(window.TEST)}/> */}
        </>
        
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
    padding: 20px;
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
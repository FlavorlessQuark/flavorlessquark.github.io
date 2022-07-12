import React, {useState} from 'react'
import styled, { ThemeProvider } from "styled-components"
import { styles } from '../../styles'


export const NavBar = () =>
{
    const [active, setActive] = useState("Resume");
    const [show , setShow] = useState(true)
    const options = {
        About : "/",
        Resume: "/",
        Contact: "/",
        Projects:""
    }

    return (
        <Container show={show} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onClick={() => setShow(show ^ 1)}>
            <Delimeter/>
            <OptionContainer >
                {
                    Object.keys(options).map((elem) =>
                        <>          
                        <Option active={active === elem && show}  href={show ? options[elem] : "javascript:void(0)"} onMouseEnter={() => setActive(elem)}> {active == elem && <Arrow show={show}> &#8250; </Arrow>} {elem} </Option>
                        </>
                    )
                }
            </OptionContainer>
        </Container>
    )
}
const Arrow = styled.div`
    color:${props => props.theme.colors.secondary};
    display: flex;
    font-size: 30px;
    position: absolute;
    left: ${props => props.show ? "-35px" : "-18px"};
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    position: fixed;
    right: ${props => props.show ? "0" : "-81px"};
    top: 0;
    transition: right 0.2s;
`

const Delimeter = styled.div`
    display: flex;

    width: 3px;
    background: ${props => props.theme.colors.primary};
`

const OptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 82px

`

const Option = styled.div`
    display: flex;

    padding: 10px;
    
    font-size: 13px;
    font-family: Source Code Pro;
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    width: calc(100% + ${props => props.active ? "18px" : "0px"});
    justify-content: center;
    align-items: center;
    background: transparent;
    ${props => props.active && 
        "border: 2px solid" + props.theme.colors.highlight + ";" +
        "justify-content: start;" + 
        "background:" + props.theme.colors.shadow + ";" 
    }
    transition: width 0.5s, justify-content 0.5s;
`
import React from "react"; 
import { Link } from "gatsby";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { H3, SmallText } from "../styles/TextStyles";

export default function Footer() {
    <Wrapper>
        <TextWrapper>
            Hello
        </TextWrapper>
    </Wrapper>


}
const Wrapper = styled(H3)`
    background: ${themes.dark.text1};
    color: ${themes.dark.text1};
    padding: 20px;
    display: grid;
    grid-template-columns: auto;
    gap: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
    margin: 20px 0px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`
const TextWrapper = styled(SmallText)`
    color: ${themes.dark.text1};
    text-align: center;
`
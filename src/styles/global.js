import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap');
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Noto Sans JP', sans-serif;
    }
    body{
        background-color: ${(props) => props.theme.colors.backgroundColorQuiz}
    }
`;

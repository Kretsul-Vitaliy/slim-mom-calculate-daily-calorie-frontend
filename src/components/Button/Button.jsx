import styled from "styled-components";
import '../../css/variables.css'


// В компоненте, где нужна кнопка, всталяем <Button>**Текст вашей кнопки**</Button>.
// В пропы кнопке передаём "active" - если нужна рыжая кнопка.
// В пропы также передаём size="short" - для кнопки логина и регистрации
//                        size="long" - кнопка Start losing your weight
//                        size = "addBtn" - кнопка Add
//                        size = "addRoundBtn" - круглая кнопка Add.
// Пример:

// import { Button } from "../../components";

// export default function LoginPage(){
//     return <Container>
//     <SignInHeader>Sign in</SignInHeader>
//     <Button size="short">Log in</Button>
//     </Container>
// }

const Button = styled.button`
background: ${props=>props.active?`var(--extra-color)`:`var(--text-extra-btn-color)`};
color: ${props=>props.active?`var(--text-extra-btn-color)`:`var(--extra-color)`};
border: ${props=>props.active?"none":"2px solid var(--extra-color)"};
box-shadow: ${props=>props.active?"0px 4px 10px rgba(252, 132, 45, 0.5)":"none"};
border-radius: 30px;
cursor: pointer;
padding: ${props=>{
    switch(props.size){
        case "short":
            return `13px 51px;
            `;
        case "long":
            return `13px 25px;
            `
        case "addBtn":
            return `13px 46px;
            `
        case "addRoundBtn":
            return `12.48px`
        default: return `
            13px 51px;
        `
    }
}}
`

export default Button;
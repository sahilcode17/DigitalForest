import styled from "styled-components"

export const  ButtonContainer = styled.button`
text-transform:capitalize;

font-size:1.2rem;
background:transparent;
font-family: 'Roboto', sans-serif !important;
border:0.05rem solid var(--lightBlue);
border-color: ${props => 
props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color:${prop => (prop.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
padding:0.2rem 0.5rem;
curser:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
border-radius:0.5rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainBlue);
}
&:focus{
    outline:none;
}


`
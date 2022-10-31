import styled from 'styled-components';

export const UserHeading = styled.h1`
margin-bottom: 2rem;
`

export const UserButton = styled.button`
margin-left: 3rem;
padding: 1rem 2rem;
font-size: 1rem;
font-weight: 700;
background-color: #ff3c78;
color: #000;
border: none;
cursor: pointer;
border-radius: 0.5rem;
transition: 0.3s;

&:hover {
    background-color: #000;
    color: #ffffee;
    border: 1px solid #ff3c78;
}
`
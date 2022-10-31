import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 3rem;
font-weight: 700;
text-decoration: none;
`

export const Logo = styled(Link)`
font-size: 1.8rem;
text-decoration: none;
color: #ffffee;
`

export const NavLinkContainer = styled.div`
gap: 5rem;
`

export const NavLink = styled(Link)`
position: relative;
text-decoration: none;
margin-left: 1rem;
color: #ffffee;
padding: 0 0.5rem;

&:after {
    content: '';
    position: absolute;
    background-color: #ff3c78;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
}

&:hover:after {
    width: 50%;
}
`
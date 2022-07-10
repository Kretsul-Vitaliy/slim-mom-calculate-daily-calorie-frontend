import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavWrapper = styled.nav`
    display: flex;
    align-items: flex-end;
    transition: all 0.3s ease;

    @media screen and (max-width: 1279px) {
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--calories-diary-color);
        padding-top: 100px;
        z-index: 2;
        &.menu-open {
            opacity: 1;
            pointer-events: all;
        }
    }
`

const List = styled.ul`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1280px) {
        flex-direction: row;
    }
    @media screen and (max-width: 1279px) {
        margin: 0 auto;
        align-self: flex-start;
        text-align: center;
    }
`

const Item = styled.li`
    font-family: 'Verdana';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    color: var(--text-secondary-color);

    &:not(:last-child) {
        margin-bottom: 16px;
    }

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 29px;
    }

    @media screen and (min-width: 1280px) {
        font-family: 'Gotham Pro';
        font-size: 14px;
        line-height: 13px;
        &:not(:last-child) {
            margin-right: 16px;
        }
    }
`

const StyledNavLink = styled(NavLink)`
    color: inherit;
    transition: var(--transition);

    &[aria-current] {
        color: var(--color-white);
        @media screen and (min-width: 1280px) {
            color: var(--text-main-color);
        }
    }
    &:hover {
        color: var(--extra-color);
    }
`;

export { NavWrapper, List, Item, StyledNavLink }
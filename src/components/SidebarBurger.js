import React from 'react';
import styled from 'styled-components';

const SidebarBurger = styled.div`
    width: 25px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 0 3px;
    position: absolute;
    top: 10px;
    right: -40px;
    display: none;

    @media (max-width: 767px) {
        display: block;
    }

    span {
        display: block;
        height: 2px;
        background-color: black;
        margin: 4px 0;
    }
`;

export default (props) => {
    return (
        <SidebarBurger onClick={props.onClick}>
            <span></span>
            <span></span>
            <span></span>
        </SidebarBurger>
    );
}

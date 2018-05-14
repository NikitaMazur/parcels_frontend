import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SidebarBurger from './SidebarBurger';

const SidebarBlock = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100px;
    height: 100%;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    align: items: center;
    padding-top: 50px;
    transition: left 0.3s ease;
    z-index: 2;

    @media (max-width: 767px) {
        left: -100px;

        &.active {
            left: 0;
        }
    }

    a,
    a:link,
    a:visited {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        color: black;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            text-decoration: none;
            background-color: #f1f1f1;
        }
    }
`;

const SidebarLink = styled(NavLink)`
    &,
    &:link,
    &:visited {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        color: black;
        font-weight: 500;

        &:hover,
        &.active {
            text-decoration: none;
            background-color: #f1f1f1;
        }
    }
`;

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        }
    }

    isVisible = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

    render() {
        return (
            <SidebarBlock className={this.state.isVisible && 'active'} onClick={this.isVisible}>
                <SidebarBurger onClick={this.isVisible} />
                <SidebarLink to="/list/incoming">Incoming</SidebarLink>
                <SidebarLink to="/list/all">All</SidebarLink>
                <SidebarLink to="/list/track">Track</SidebarLink>
                <a onClick={this.props.logout}>Logout</a>
            </SidebarBlock> 
        );
    }
}

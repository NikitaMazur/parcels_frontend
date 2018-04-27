import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

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

const SidebarLink = styled(Link)`
    &,
    &:link,
    &:visited {
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        color: black;
        font-weight: 500;

        &:hover {
            text-decoration: none;
            background-color: #f1f1f1;
        }
    }
`;

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

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
        }
    }

    isShow() {
        this.setState({
            isShow: !this.state.isShow,
        })
    }

    render() {
        return (
            <SidebarBlock className={this.state.isShow && 'active'} onClick={this.isShow.bind(this)}>
                <SidebarBurger>
                    <span></span>
                    <span></span>
                    <span></span>
                </SidebarBurger>
                <SidebarLink to="/list/incoming">Incoming</SidebarLink>
                <SidebarLink to="/list/all">All</SidebarLink>
                <SidebarLink to="/list/track">Track</SidebarLink>
                <a onClick={this.props.logout}>Logout</a>
            </SidebarBlock> 
        );
    }
}

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { AuthTitle, LoginButton } from './Auth';

const LoginLink = styled(Link)`
    display: block;
    max-width: 100px;
    margin: 20px auto -20px;
`;

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: '',
                password: '',
            }
        }
    }

    onChangeHandler = (event)  => {
        let field = event.currentTarget;

        this.setState({
            form: {
                ...this.state.form,
                [field.name]: field.value,
            }
        })
    }

    onSubmit = (event) => {
        this.props.login(this.state.form)
    }

    render() {
        return (
            <FormGroup>
                <AuthTitle>Log In</AuthTitle>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                    name="username"
                    type="text"
                    value={this.state.form.email}
                    onChange={this.onChangeHandler}
                />
                <HelpBlock></HelpBlock>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    name="password"
                    type="password"
                    value={this.state.form.password}
                    onChange={this.onChangeHandler}
                />
                <HelpBlock></HelpBlock>
                <HelpBlock></HelpBlock>
                <LoginButton block bsStyle="primary" type="submit" onClick={this.onSubmit}>Log In</LoginButton>
                <LoginLink to="/track">Track parcels</LoginLink>
            </FormGroup>
        );
    }
}
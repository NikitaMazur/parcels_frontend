import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Table, FormGroup, FormControl, ControlLabel, HelpBlock , Button} from 'react-bootstrap';

import { CompanyLogo } from './LoggedinPages';
import { Container, FullHeightWrapper, MainTitle } from './App';

const TrackingSubmitButton = styled(Button)`
    margin: 15px 0;
`;

const ToHomepage = styled(Link)`
    display: inline-block;
    margin-bottom: 20px;

    &,
    &:link,
    &:visited {
        color: black;
        text-decoration: underline;
        font-size: 14px;
    }
`;


export default class ParcelTracking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reference: '',
            courier_name: '',
            recipient_last_name: '',
        }
    }

    onChange(event) {
        let key = event.currentTarget;
        this.setState({
            ...this.state,
            [key.name]: key.value
        })
    }

    onSubmit() {
        this.props.searchParcels(this.state)
    }

    render() {
        const { parcels } = this.props;
        return (
            <FullHeightWrapper>
                <Container>
                    <ToHomepage to="/">To Homepage</ToHomepage>
                    <MainTitle>Parcel tracking</MainTitle>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Parcel reference</ControlLabel>
                        <FormControl
                            type="text"
                            name="reference"
                            value={this.state.reference}
                            onChange={this.onChange.bind(this)}
                        />
                        <HelpBlock></HelpBlock>
                        <ControlLabel>Courier</ControlLabel>
                        <FormControl
                            type="text"
                            name="courier_name"
                            value={this.state.courier}
                            onChange={this.onChange.bind(this)}
                        />
                        <HelpBlock></HelpBlock>
                        <ControlLabel>Recipient surname</ControlLabel>
                        <FormControl
                            type="text"
                            name="recipient_last_name"
                            value={this.state.recipient_last_name}
                            onChange={this.onChange.bind(this)}
                        />
                        <TrackingSubmitButton bsStyle="primary" type="button" onClick={this.onSubmit.bind(this)}>Submit</TrackingSubmitButton>
                    </FormGroup>
                    {parcels.length !== 0 && (
                        <Table responsive bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Courrier Name</th>
                                    <th>Tracking Reference</th>
                                    <th>Location</th>
                                    <th>Recipient Name</th>
                                    <th>Logo</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {parcels.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{index}</td>
                                            <td>{item.courier_name}</td>
                                            <td>{item.reference}</td>
                                            <td>{item.recipient_location}</td>
                                            <td>{`${item.recipient_first_name} ${item.recipient_last_name}`}</td>
                                            <td><CompanyLogo src="https://www.chakree.in/images/logo-hyderabad-india/logo%20designer%20hyderabad.jpg" alt="logo"/></td>
                                            <td>{item.status}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    )}
                    {parcels.length === 0 && (
                        <p>Parcels not found</p>
                    )}
                </Container>
            </FullHeightWrapper>
        );
    }
}

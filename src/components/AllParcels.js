import React from 'react';
import styled from 'styled-components';
import { Checkbox, Table, FormControl, Button, ControlLabel } from 'react-bootstrap';

import { CompanyLogo } from './LoggedinPages';
import { MainTitle } from './App';

const ChangeStatusBlock = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const StyledFormControl = styled(FormControl)`
    margin-right: 15px;
    max-width: 300px;
`;

export default class AllParcels extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ids: [],
            status: 'delivered',
        }
    }

    onCheck(item) {
        this.setState({
            ids: [...this.state.ids, item.id],
        })
    }

    changeStatus(event) {
        this.setState({
            status: event.currentTarget.value,
        })
    }

    onSubmit() {
        let obj = {
            ids: this.state.ids.join(','),
            status: this.state.status
        }

        this.props.changeStatus(obj);
    }

    componentWillMount() {
        this.props.getParcels();
    }

    render() {
        const { parcels } = this.props;
        return (
            <div>
                {parcels.length !== 0 && (
                    <div>
                        <MainTitle>All parcels</MainTitle>
                            <Table responsive bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th></th>
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
                                                <td><Checkbox onChange={() => this.onCheck(item)} /></td>
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
                        <ControlLabel>Change status</ControlLabel>
                        <ChangeStatusBlock>
                            <StyledFormControl componentClass="select" placeholder="change status" onChange={this.changeStatus.bind(this)}>
                                <option value="delivered">delivered</option>
                                <option value="out for delivery">out for delivery</option>
                            </StyledFormControl>
                            <Button bsStyle="primary" type="button" onClick={this.onSubmit.bind(this)}>Submit</Button>
                        </ChangeStatusBlock>
                    </div>
                )}
            </div>
        );
    }
}

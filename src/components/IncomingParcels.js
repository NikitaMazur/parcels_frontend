import React from 'react';
import { Table } from 'react-bootstrap';

import { CompanyLogo } from './LoggedinPages';
import { MainTitle } from './App';

export default class IncomingParcels extends React.Component {

    componentWillMount() {
        this.props.getIncomingParcels();
    }

    render() {
        const { parcels } = this.props;
        return (
            <div>
                {parcels.length !== 0 && (
                <div>
                    <MainTitle>Incoming</MainTitle>
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
                    </div>
                )}
            </div>
        );
    }
}

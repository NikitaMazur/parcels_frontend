import React from 'react';
import { Table as TableBlock } from 'react-bootstrap';


export default () => {
    return (
        <Table responsive bordered condensed hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Courrier Name</th>
                    <th>Tracking Reference</th>
                    <th>Recipient Name</th>
                    <th>Logo</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {parcels.map((item, index) => {
                    return (
                        <tr>
                            <td>{index}</td>
                            <td>{item.courier_name}</td>
                            <td>{item.reference}</td>
                            <td>{`${item.recipient_first_name} ${item.recipient_last_name}`}</td>
                            <td><CompanyLogo src="https://www.chakree.in/images/logo-hyderabad-india/logo%20designer%20hyderabad.jpg" alt="logo"/></td>
                            <td>{item.status}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
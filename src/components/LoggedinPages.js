import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import IncomingParcels from '../containers/IncomingParcels';
import AllParcels from '../containers/AllParcels';
import ParcelTracking from '../containers/ParcelTracking';
import Sidebar from '../containers/Sidebar';
import { Container, FullHeightWrapper } from './App';

export const CompanyLogo = styled.img`
    max-width: 100px;
`;

const LoggedinBlock = styled.div`
    margin-left: 100px;

    @media (max-width: 767px) {
        padding: 20px 0 0;
        margin-left: 0;
    }
`;

export default class LoggedinPages extends React.Component {

    render() {
        return (
            <FullHeightWrapper>
                <Sidebar />
                <Container>
                    <LoggedinBlock>
                        <Route path="/list/incoming" component={IncomingParcels} />
                        <Route path="/list/all" component={AllParcels} />
                        <Route path="/list/track" component={ParcelTracking} />
                    </LoggedinBlock>
                </Container>
            </FullHeightWrapper>
        );
    }
}

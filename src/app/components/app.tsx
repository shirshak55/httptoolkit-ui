import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Mockttp } from 'mockttp';
import { RequestListContainer } from './request-list-container';
import { MockttpRequest } from '../types';
import { connect } from 'react-redux';
import { StoreModel, ServerStatus } from '../model/store';

const StyledList = styled.div`
    font-family: 'Verdana';
    width: '50%';
`;

class App extends React.Component<{
    serverStatus: ServerStatus
}> {
    render(): JSX.Element {
        switch(this.props.serverStatus) {
            case ServerStatus.Connected:
                return (
                    <StyledList>
                        <RequestListContainer />
                    </StyledList>
                );
            case ServerStatus.Connecting:
                return <div>Connecting...</div>;
            case ServerStatus.AlreadyInUse:
                return <div>Port already in use</div>;
            case ServerStatus.UnknownError:
                return <div>An unknown error occurred</div>;
        }
    }
}

export const AppContainer = connect((state: StoreModel) => ({
    serverStatus: state.serverStatus
}))(App);
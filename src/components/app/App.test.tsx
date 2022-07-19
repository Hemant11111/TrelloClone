import React from 'react';
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react';

import App from './App';
import store from "../../redux/store/store";


describe('Rendering App component', () => {
    it('should render app component wrapped in provider', () => {
        const {asFragment} = render(
            <Provider store={store}>
                <App/>
            </Provider>
        )
        expect(asFragment()).toMatchSnapshot();
        expect(screen.getByText('Trello-Clone')).toBeInTheDocument();
    })
})
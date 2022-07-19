import React from 'react';
import { render, screen } from '@testing-library/react';

import HeaderComponent from "./Header";


describe('Header component', () => {

    it('should match snapshot', () => {
        const {asFragment} = render(<HeaderComponent/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it('should show Trello-clone header', () => {
        render(<HeaderComponent/>)
        expect(screen.getByText('Trello-Clone')).toBeInTheDocument();
    })

    it('should show Sign out button', () => {
        render(<HeaderComponent/>)
        expect(screen.getByText('Sign out')).toBeInTheDocument();
    })
})
import React from 'react';
import { screen } from '@testing-library/react';

import AddNewCardComponent from "./AddNewCardComponent";
import { testingRenderWithContext } from "../../../shared-components/testing-renderer-with-context/testing-render-with-context";


describe('AddNewCardComponent', () => {

    it('should match snapshot', () => {
        const {asFragment} = testingRenderWithContext(<AddNewCardComponent/>);
        expect(asFragment()).toMatchSnapshot();
    })


    it('should render Add button', () => {
        testingRenderWithContext(<AddNewCardComponent/>);
        expect(screen.getByTestId("add-new-card-button")).toBeInTheDocument();
    })
})
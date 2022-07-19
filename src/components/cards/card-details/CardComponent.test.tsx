import React from 'react';
import { screen } from "@testing-library/react";

import CardComponent from "./CardComponent";
import CardModel from "../../../model/Card";
import { testingRenderWithContext } from "../../../shared-components/testing-renderer-with-context/testing-render-with-context";


describe('Card Component', () => {
    it('should match snapshot', () => {
        const {asFragment} = testingRenderWithContext(<CardComponent card={CardModel.newInstance("test")}/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it('should render delete button', () => {
        testingRenderWithContext(<CardComponent card={CardModel.newInstance("test")}/>);

        const deleteButton = screen.getByTestId("btn-card-delete");

        expect(deleteButton).toBeInTheDocument();
    })


})
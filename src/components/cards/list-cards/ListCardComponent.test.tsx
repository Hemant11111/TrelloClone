import React from 'react';

import ListCardComponent from "./ListCardComponent";
import { testingRenderWithContext } from "../../../shared-components/testing-renderer-with-context/testing-render-with-context";


describe('List cards Component', () => {
    it('should match snapshot', () => {
        const {asFragment} = testingRenderWithContext(<ListCardComponent/>);
        expect(asFragment()).toMatchSnapshot();
    })
})
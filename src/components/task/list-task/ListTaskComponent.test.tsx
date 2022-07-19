import React from 'react';

import ListTaskComponent from "./ListTaskComponent";
import { testingRenderWithContext } from "../../../shared-components/testing-renderer-with-context/testing-render-with-context";


describe('List task Component', () => {

    it('should match snapshot', () => {
        const {asFragment} = testingRenderWithContext(<ListTaskComponent cardId={"1"}/>);
        expect(asFragment()).toMatchSnapshot();
    })

})
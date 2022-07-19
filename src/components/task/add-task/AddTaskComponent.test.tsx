import React from 'react';
import { screen } from "@testing-library/react";

import AddTaskComponent from "./AddTaskComponent";
import { testingRenderWithContext } from "../../../shared-components/testing-renderer-with-context/testing-render-with-context";


describe('Add task Component', () => {
    it('should match snapshot', () => {
        const {asFragment} = testingRenderWithContext(<AddTaskComponent cardId={"1"}/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it('should render add button', () => {
        testingRenderWithContext(<AddTaskComponent cardId={"1"}/>);
        const button = screen.getByTestId("add-task-button");
        expect(button).toBeInTheDocument();
    })

    it('should render input field', () => {
        testingRenderWithContext(<AddTaskComponent cardId={"1"}/>);
        const inputField = screen.getByPlaceholderText("Add Task...");
        expect(inputField).toBeInTheDocument();
    })
})
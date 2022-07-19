import React from 'react';
import { screen } from '@testing-library/react';

import TaskComponent from "./TaskComponent";
import TaskModel from "../../../model/Task";
import { testingRenderWithContext } from "../../../shared-components/testing-renderer-with-context/testing-render-with-context";


describe('Task Component', () => {

    it('should match snapshot', () => {
        const {asFragment} = testingRenderWithContext(<TaskComponent task={TaskModel.newInstance("test-task", "1")}/>);
        expect(asFragment()).toMatchSnapshot();
    })

    describe("when not editing", () => {

        const _task = TaskModel.newInstance("test-task", "1");

        it('should not render task update input when not editing a task', () => {
            testingRenderWithContext(<TaskComponent task={_task}/>);
            expect(screen.queryByPlaceholderText("Add Task...")).not.toBeInTheDocument();
        })

        it('should render remove task button when not editing', () => {
            testingRenderWithContext(<TaskComponent task={_task}/>);
            expect(screen.getByTestId("task-remove-button")).toBeInTheDocument();
        })

        it('should render edit task button', () => {
            testingRenderWithContext(<TaskComponent task={_task}/>);
            expect(screen.getByTestId("task-edit-button")).toBeInTheDocument();
        })

        it('should not render save task button', () => {
            testingRenderWithContext(<TaskComponent task={_task}/>);
            expect(screen.queryByTestId("task-save-button")).not.toBeInTheDocument();
        })
    })


    describe("when editing", () => {

        const _task = TaskModel.newInstance("test-task", "1");
        _task.updating = true;

        it('should render remove task button when editing', () => {
            testingRenderWithContext(<TaskComponent task={_task}/>);
            expect(screen.getByTestId("task-remove-button")).toBeInTheDocument();
        })

        it('should render save task button', () => {
            testingRenderWithContext(<TaskComponent task={_task}/>);
            expect(screen.getByTestId("task-save-button")).toBeInTheDocument();
        })

        it('should not render dit task button', () => {
            testingRenderWithContext(<TaskComponent task={_task}/>);
            expect(screen.queryByTestId("task-edit-button")).not.toBeInTheDocument();
        })

        it('should render task update input when editing a task', () => {
            testingRenderWithContext(<TaskComponent task={_task}/>);
            expect(screen.getByPlaceholderText("Add Task...")).toBeInTheDocument();
        })
    });
})
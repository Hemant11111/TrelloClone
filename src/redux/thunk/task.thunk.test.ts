import TaskModel from "../../model/Task";
import { createTaskThunk, deleteTaskThunk, editTaskThunk, taskMovedToAnotherCardThunk } from "./task.thunk";
import { CREATE_TASK, DELETE_TASK, EDIT_TASK } from "../actions/actionTypes";
import { getDefaultState } from "../store/defaultStore";

describe("Task thunk", () => {
    it("should call create task action", () => {
        const dispatch = jest.fn();

        const task = TaskModel.newInstance("New task", "default-card");
        const thunk = createTaskThunk(task);

        thunk(dispatch, getDefaultState, undefined);

        const {calls} = dispatch.mock;

        expect(calls).toHaveLength(1);

        const action = calls[0][0];
        expect(action.type).toEqual(CREATE_TASK);
        expect(action.task).toEqual(task);
    })

    it("should not call create task action with invalid card id", () => {
        const dispatch = jest.fn();

        const task = TaskModel.newInstance("New task", "invalid-card-id");
        const thunk = createTaskThunk(task);

        thunk(dispatch, getDefaultState, undefined);

        const {calls} = dispatch.mock;

        expect(calls).toHaveLength(0);
    })

    it("should call delete task action", () => {
        const dispatch = jest.fn();

        const thunk = deleteTaskThunk("taskId");

        thunk(dispatch, getDefaultState, undefined);

        const {calls} = dispatch.mock;

        expect(calls).toHaveLength(1);
        expect(calls[0][0].type).toEqual(DELETE_TASK);
        expect(calls[0][0].taskId).toEqual("taskId");
    })


    it("should call edit task action", () => {
        const dispatch = jest.fn();

        const task = TaskModel.newInstance("New task", "cardId");
        const thunk = editTaskThunk(task);

        thunk(dispatch, getDefaultState, undefined);

        const {calls} = dispatch.mock;

        expect(calls).toHaveLength(1);
        expect(calls[0][0].type).toEqual(EDIT_TASK);
        expect(calls[0][0].task).toEqual(task);
    })


    it("should not call move task action when invalid card id passed", () => {
        const dispatch = jest.fn();

        const task = TaskModel.newInstance("New task", "cardId");
        const thunk = taskMovedToAnotherCardThunk(task.id, "invalid-card-id");

        thunk(dispatch, getDefaultState, undefined);

        const {calls} = dispatch.mock;

        expect(calls).toHaveLength(0);
    })
})
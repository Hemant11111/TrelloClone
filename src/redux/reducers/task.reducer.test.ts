import taskReducer, { taskInitialState } from "./task.reducer";
import {
    createTaskAction,
    deleteTaskAction,
    editTaskAction,
    taskMovedToAnotherCardAction
} from "../actions/task.action";
import TaskModel from "../../model/Task";
import CardModel from "../../model/Card";
import cardReducer from "./card.reducer";
import { createCardAction } from "../actions/card.action";

describe("Task reducer", () => {
    it("should return initial state when passed empty action", () => {
        const state = taskReducer(undefined, {});
        expect(state).toEqual(taskInitialState);
    });

    it("should return state with newly added task", () => {
        const task = TaskModel.newInstance("New utils task", "default-card");
        const state = taskReducer(undefined, createTaskAction(task));
        expect(state.tasks[task.id]).toEqual(task);
    });

    it("should be able to edit task", () => {
        const task = TaskModel.newInstance("New utils task", "default-card");
        let state = taskReducer(undefined, createTaskAction(task));
        task.title = "New title";
        state = taskReducer(state, editTaskAction(task));
        expect(state.tasks[task.id].title).toEqual("New title");
    });

    it("should be able to delete task", () => {
        const task = TaskModel.newInstance("New utils task", "default-card");
        let state = taskReducer(undefined, createTaskAction(task));
        state = taskReducer(state, deleteTaskAction(task.id));
        expect(state.tasks[task.id].deleted).toBeTruthy();
    });


    describe("Move task", () => {
        const task = TaskModel.newInstance("New utils task", "default-card");

        it("should be able to move task", () => {
            let taskState = taskReducer(undefined, createTaskAction(task));
            expect(taskState.tasks[task.id].cardId).toEqual("default-card");

            const newCard = CardModel.newInstance("New card");
            let cardState = cardReducer(undefined, createCardAction(newCard));

            taskState = taskReducer(taskState, taskMovedToAnotherCardAction(task.id, task.cardId, newCard.id));
            cardState = cardReducer(cardState, taskMovedToAnotherCardAction(task.id, task.cardId, newCard.id));

            expect(taskState.tasks[task.id].cardId).toEqual(newCard.id);
            expect(cardState.cards[newCard.id].taskIds).toContain(task.id);
            expect(cardState.cards[task.cardId ?? ""].taskIds).not.toContain(task.id);
        });


        it("should be able to move task to original card", () => {
            let state = taskReducer(undefined, createTaskAction(task));
            expect(state.tasks[task.id].cardId).toEqual("default-card");

            state = taskReducer(state, taskMovedToAnotherCardAction(task.id, task.cardId, task.cardId));
            expect(state.tasks[task.id].cardId).toEqual("default-card");
        });


        it("should be able to edit moved task", () => {
            let state = taskReducer(undefined, createTaskAction(task));
            expect(state.tasks[task.id].cardId).toEqual("default-card");

            const newCard = CardModel.newInstance("New card");
            let cardState = cardReducer(undefined, createCardAction(newCard));

            state = taskReducer(state, taskMovedToAnotherCardAction(task.id, task.cardId, newCard.id));
            expect(state.tasks[task.id].cardId).toEqual(newCard.id);

            task.title = "New title";
            state = taskReducer(state, editTaskAction(task));
            expect(state.tasks[task.id].title).toEqual("New title");
        });

        it("should be able to delete moved task", () => {
            let state = taskReducer(undefined, createTaskAction(task));
            expect(state.tasks[task.id].cardId).toEqual("default-card");

            const newCard = CardModel.newInstance("New card");
            let cardState = cardReducer(undefined, createCardAction(newCard));

            state = taskReducer(state, taskMovedToAnotherCardAction(task.id, task.cardId, newCard.id));
            expect(state.tasks[task.id].cardId).toEqual(newCard.id);

            state = taskReducer(state, deleteTaskAction(task.id));
            expect(state.tasks[task.id].deleted).toBeTruthy();
        });

        it("should be able to move moved task", () => {
            let state = taskReducer(undefined, createTaskAction(task));
            expect(state.tasks[task.id].cardId).toEqual("default-card");

            const cardA = CardModel.newInstance("New card");
            let cardState = cardReducer(undefined, createCardAction(cardA));

            state = taskReducer(state, taskMovedToAnotherCardAction(task.id, task.cardId, cardA.id));

            expect(state.tasks[task.id].cardId).toEqual(cardA.id);

            const cardB = CardModel.newInstance("Card XYZ");

            cardState = cardReducer(cardState, createCardAction(cardB));

            state = taskReducer(state, taskMovedToAnotherCardAction(task.id, task.cardId, cardB.id));
            expect(state.tasks[task.id].cardId).toEqual(cardB.id);
        });
    })

});
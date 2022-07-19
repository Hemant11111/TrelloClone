import { getTaskList } from "./task.selector";
import { getDefaultState } from "../store/defaultStore";

describe("Tasks Selector", () => {

    it("getTaskList should not recompute with same state", () => {
        getTaskList.resetRecomputations();


        const state: any = getDefaultState();

        // calling getTaskList multiple times.
        getTaskList(state);
        getTaskList(state);
        getTaskList(state);
        getTaskList(state);

        expect(getTaskList.recomputations()).toEqual(1);
    })

    it("getTaskList should recompute with new state", () => {
        getTaskList.resetRecomputations();

        getTaskList({
            cardReducer: {
                cards: {
                    "default-card": {
                        id: "default-card",
                        title: "Default card",
                        tasks: [],
                        taskIds: [],
                        deleted: false,
                        updated: false,
                        deleting: false,
                        updating: false,
                        selected: false
                    }
                }
            },
            taskReducer: {tasks: {}}
        } as any);

        getTaskList({
            cardReducer: {
                cards: {
                    "default-card": {
                        id: "default-card",
                        title: "Default card",
                        tasks: ["task1"],
                        taskIds: [],
                        deleted: false,
                        updated: false,
                        deleting: false,
                        updating: false,
                        selected: false
                    }
                }
            },
            taskReducer: {
                tasks: {
                    "task1": {
                        id: "task1",
                        cardId: "default-card"
                    }
                }
            }
        } as any);

        expect(getTaskList.recomputations()).toEqual(2);
    })

});
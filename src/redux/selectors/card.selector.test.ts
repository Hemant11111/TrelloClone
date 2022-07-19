import { getCardList } from "./card.selector";
import { getDefaultState } from "../store/defaultStore";

describe("Cards Selector", () => {

    it("getCardList should not recompute with same state", () => {
        getCardList.resetRecomputations();

        const state: any = getDefaultState();

        // calling getCardList multiple times.
        getCardList(state);
        getCardList(state);
        getCardList(state);
        getCardList(state);

        expect(getCardList.recomputations()).toEqual(1);
    })

    it("getCardList should recompute with new state", () => {
        getCardList.resetRecomputations();

        let state: any = {
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
            }
        };

        getCardList(state);
        getCardList(state);

        state = {
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
                    },
                    "new-card": {
                        id: "new-card",
                        title: "New card",
                        tasks: [],
                        taskIds: [],
                        deleted: false,
                        updated: false,
                        deleting: false,
                        updating: false,
                        selected: false
                    }
                }
            }
        }

        getCardList(state);

        expect(getCardList.recomputations()).toEqual(2);
    })

});
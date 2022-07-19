import CardReducer from "./card.reducer";
import cardReducer, { cardInitialState } from "./card.reducer";
import { createCardAction, deleteCardAction, editCardAction, } from "../actions/card.action";
import CardModel from "../../model/Card";

describe("Card reducer", () => {
    it("should return initial state when passed empty action", () => {
        const state = cardReducer(undefined, {});
        expect(state).toEqual(cardInitialState);
    });

    it("should return state with newly added card", () => {
        const card = CardModel.newInstance("New utils card");
        const state = CardReducer(undefined, createCardAction(card));
        expect(state.cards[card.id]).toEqual(card);
    });

    it("should be able to edit card", () => {
        const card = CardModel.newInstance("New utils card");
        let state = CardReducer(undefined, createCardAction(card));
        card.title = "New title";
        state = CardReducer(state, editCardAction(card));
        expect(state.cards[card.id].title).toEqual("New title");
    });

    it("should be able to delete card", () => {
        const card = CardModel.newInstance("New utils card");
        let state = CardReducer(undefined, createCardAction(card));
        state = CardReducer(state, deleteCardAction(card.id));
        expect(state.cards[card.id].deleted).toBeTruthy();
    });

});
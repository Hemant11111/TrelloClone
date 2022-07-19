import CardModel from "../../model/Card";
import { createCardThunk, createDummyNewCardThunk, deleteCardThunk, editCardThunk } from "./card.thunk";
import { CREATE_CARD, DELETE_CARD, EDIT_CARD } from "../actions/actionTypes";
import { getDefaultState } from "../store/defaultStore";

describe("Card thunk", () => {
    it("should call create card action", () => {
        const dispatch = jest.fn();

        const card = CardModel.newInstance("New card");
        const thunk = createCardThunk(card);

        thunk(dispatch, getDefaultState, undefined);

        const {calls} = dispatch.mock;

        expect(calls).toHaveLength(1);
        expect(calls[0][0].type).toEqual(CREATE_CARD);
        expect(calls[0][0].card).toEqual(card);
    })

    it("should call delete card action", () => {
        const dispatch = jest.fn();

        const thunk = deleteCardThunk("cardId");

        thunk(dispatch, getDefaultState, undefined);

        const {calls} = dispatch.mock;

        expect(calls).toHaveLength(1);
        expect(calls[0][0].type).toEqual(DELETE_CARD);
        expect(calls[0][0].cardId).toEqual("cardId");
    })


    it("should call edit card action", () => {
        const dispatch = jest.fn();

        const card = CardModel.newInstance("New card");
        const thunk = editCardThunk(card);

        thunk(dispatch, getDefaultState, undefined);

        const {calls} = dispatch.mock;

        expect(calls).toHaveLength(1);
        expect(calls[0][0].type).toEqual(EDIT_CARD);
        expect(calls[0][0].card).toEqual(card);

    })

    it("should call create card action with default values", () => {
        const dispatch = jest.fn();

        const thunk = createDummyNewCardThunk();

        thunk(dispatch, getDefaultState, undefined);

        const {calls} = dispatch.mock;

        expect(calls).toHaveLength(1);
        expect(calls[0][0].type).toEqual(CREATE_CARD);
    })

})
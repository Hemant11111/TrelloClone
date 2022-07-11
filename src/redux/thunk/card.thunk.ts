import { createCardAction, deleteCardAction, editCardAction } from "../actions/card.action";
import CardModel from "../../model/Card";

export const createCardThunk: any = (card: CardModel) => async function (dispatch: any, state: any) {
    // Call API
    dispatch(createCardAction(card));
}

export const deleteCardThunk: any = (cardId: string) => async function (dispatch: any, state: any) {
    // Call API
    dispatch(deleteCardAction(cardId));
}

export const editCardThunk: any = (card: CardModel) => async function (dispatch: any, state: any) {
    // Call API
    dispatch(editCardAction(card));
}

export const createDummyNewCardThunk: any = (card?: CardModel) => async function (dispatch: any, state: any) {
    // Call API
    const newCard = CardModel.newInstance("New card");
    dispatch(createCardAction({...newCard, ...card}));
}
import CardModel from "../../model/Card";
import { CREATE_CARD, DELETE_CARD, EDIT_CARD } from "./actionTypes";

export function createCardAction(card: CardModel) {
    return {
        type: CREATE_CARD,
        card
    }
}

export function deleteCardAction(cardId: string) {
    return {
        type: DELETE_CARD,
        cardId
    }
}


export function editCardAction(card: CardModel) {
    return {
        type: EDIT_CARD, card
    }
}
import { createSelector } from "reselect";
import { ROOT_STORE_TYPE } from "../store/storeType";

export const getCardReducer = (store: ROOT_STORE_TYPE) => {
    return store.cardReducer;
}

const getCards = createSelector(getCardReducer, data => {
    return data.cards ?? {}
});

const getAllCardList = createSelector(getCards, cards => {
    return Object.values(cards)
});

export const getCardList = createSelector(getAllCardList, cards => {
    return cards.filter(card => !card.deleted)
});

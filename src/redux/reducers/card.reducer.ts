import { CREATE_CARD, DELETE_CARD, EDIT_CARD } from "../actions/actionTypes";
import { DEFAULT_STORE } from "../../store/defaultStore";


const cardReducer = (state = DEFAULT_STORE, action: any) => {
    let {cards} = state;
    const {type} = action;
    switch (type) {
        case CREATE_CARD:
            return {...state, cards: {...cards, [action.card.id]: action.card}};
        case EDIT_CARD:
            return {...state, cards: {...cards, [action.card.id]: {...cards[action.card.id], ...action.card}}};
        case DELETE_CARD:
            return {...state, cards: {...cards, [action.cardId]: {...cards[action.cardId], deleted: true}}};
        default:
            return state;
    }
};

export default cardReducer;

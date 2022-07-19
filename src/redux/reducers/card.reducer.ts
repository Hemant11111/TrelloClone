import { CREATE_CARD, CREATE_TASK, DELETE_CARD, EDIT_CARD, MOVE_TASK } from "../actions/actionTypes";
import { CARDS_STATE_TYPE } from "../store/storeType";


export const cardInitialState: CARDS_STATE_TYPE = {
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

const cardReducer = (state = cardInitialState, action: any) => {
    let {cards} = state;
    const {type} = action;
    switch (type) {
        case CREATE_CARD:
            return {...state, cards: {...cards, [action.card.id]: action.card}};
        case CREATE_TASK:
            const card = cards[action.task.cardId];
            return {
                ...state,
                cards: {...cards, [action.task.cardId]: {...card, taskIds: [...(card.taskIds ?? []), action.task.id]}}
            };
        case EDIT_CARD:
            return {...state, cards: {...cards, [action.card.id]: {...cards[action.card.id], ...action.card}}};
        case DELETE_CARD:
            return {...state, cards: {...cards, [action.cardId]: {...cards[action.cardId], deleted: true}}};
        case MOVE_TASK:
            let fromCard = state.cards[action.fromCardId];
            fromCard = {...fromCard, taskIds: (fromCard.taskIds ?? []).filter(v => v !== action.taskId)};

            let toCard = state.cards[action.toCardId];
            toCard = {...toCard, taskIds: [...toCard.taskIds ?? [], action.taskId]}

            return {
                ...state,
                cards: {...cards, [fromCard.id]: {...fromCard}, [toCard.id]: {...toCard}}
            }
        default:
            return state;
    }
};

export default cardReducer;

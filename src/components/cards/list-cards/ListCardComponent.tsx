import React from "react";
import { useDispatch, useSelector } from "react-redux";


import "./ListCard.css";
import CardModel from "../../../model/Card";
import CardComponent from "../card/Card";
import AddNewCardComponent from "../add-card/AddNewCardComponent";
import { deleteCardThunk, editCardThunk } from "../../../redux/thunk/card.thunk";
import { getCardList } from "../../../redux/selectors/card.selector";

interface ListCardComponentProps {
}

function ListCardComponent(props: ListCardComponentProps) {

    const cards = useSelector(getCardList);
    const dispatch = useDispatch();

    function handleCardDelete(cardId: string) {
        dispatch(deleteCardThunk(cardId));
    }

    function handleCardUpdate(card: CardModel) {
        dispatch(editCardThunk(card));
    }

    return (
        <>
            {
                cards.map((card: CardModel) => (
                        <CardComponent
                            key={`card-${card.id}`}
                            card={card}
                            onCardDelete={handleCardDelete}
                            onCardUpdate={handleCardUpdate}
                        />
                    )
                )
            }
            <AddNewCardComponent/>
        </>
    )
}

export default React.memo(ListCardComponent);
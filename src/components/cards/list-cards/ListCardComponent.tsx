import React from "react";
import { useSelector } from "react-redux";


import "./ListCardComponent.scss";
import CardModel from "../../../model/Card";
import CardComponent from "../card-details/CardComponent";
import AddNewCardComponent from "../add-card/AddNewCardComponent";
import { getCardList } from "../../../redux/selectors/card.selector";

interface ListCardComponentProps {
}

function ListCardComponent(props: ListCardComponentProps) {

    const cards = useSelector(getCardList);

    return (
        <>
            {
                cards.map((card: CardModel) => (
                        <CardComponent
                            key={`card-${card.id}`}
                            card={card}
                        />
                    )
                )
            }
            <AddNewCardComponent/>
        </>
    )
}

export default React.memo(ListCardComponent);
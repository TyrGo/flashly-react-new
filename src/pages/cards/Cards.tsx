import { Loader } from "~/components/loaders";
import { CardEditor } from "./components/CardEditor";
import { Grid } from "@mui/material";
import { Card } from "~/api";
import { useCardsQuery } from "./queries/cardsGet";

export const Cards = () => {
    const { data: cards, isLoading: cardsLoading } = useCardsQuery();

    if (cardsLoading) {
        return <Loader />;
    }

    return (
        <Grid display="flex" gap={2} flexWrap="wrap">
            {cards.map((card: Card) => (
                <CardEditor card={card} />
            ))}
        </Grid>
    )
}
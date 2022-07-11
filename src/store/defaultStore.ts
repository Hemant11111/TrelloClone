import { STORE_TYPE } from "./storeType";

export const DEFAULT_STORE: STORE_TYPE = {
    cards: {
        "default-card": {
            id: "default-card",
            title: "Default card",
            tasks: [],
            deleted: false,
            updated: false,
            deleting: false,
            updating: false,
            selected: false
        }
    },
    tasks: {}
}

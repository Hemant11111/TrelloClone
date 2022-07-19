function getDefaultCards() {
    return {
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

function getDefaultTasks() {
    return {};
}

export function getDefaultState() {
    return {
        cardReducer: {cards: getDefaultCards()},
        taskReducer: {tasks: getDefaultTasks()}
    }
}
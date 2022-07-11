export class Model {

    deleting = false;
    deleted = false;

    updating = false;
    updated = false;

    selected = false;

    constructor(readonly id: string) {
    }
}
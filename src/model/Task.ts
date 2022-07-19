import { Model } from "./Model";
import { StringUtil } from "../utils/StringUtil";

export default class TaskModel extends Model {
    constructor(public title: string, public cardId: string) {
        super(StringUtil.generateRandomString());
    }

    // Backend logic...
    static newInstance(title: string, cardId: string) {
        return new this(title, cardId);
    }
}
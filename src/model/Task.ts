import { Model } from "./Model";
import { StringUtil } from "../util/StringUtil";

export default class TaskModel extends Model {
    title: string | undefined;
    cardId: string | undefined;

    // Backend logic...
    static newInstance(title: string, cardId: string) {
        const instance = new this(StringUtil.generateRandomString(6));
        instance.title = title;
        instance.cardId = cardId;
        return instance;
    }
}
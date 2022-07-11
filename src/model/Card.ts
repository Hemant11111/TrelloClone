import { Model } from "./Model";
import TaskModel from "./Task";
import { StringUtil } from "../util/StringUtil";

export default class CardModel extends Model {
    title: string | undefined;

    tasks: TaskModel[] | undefined;

    // Backend logic...
    static newInstance(title: string) {
        const instance = new this(StringUtil.generateRandomString(6));
        instance.title = title;
        return instance;
    }
}
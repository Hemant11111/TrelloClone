import { Model } from "./Model";
import TaskModel from "./Task";
import { StringUtil } from "../utils/StringUtil";

export default class CardModel extends Model {
    title: string | undefined;

    tasks: TaskModel[] | undefined;

    taskIds: string[] | undefined;

    // Backend logic...
    static newInstance(title: string) {
        const instance = new this(StringUtil.generateRandomString());
        instance.title = title;
        instance.taskIds = [];
        return instance;
    }
}
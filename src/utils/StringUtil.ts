export class StringUtil {
    static generateRandomString(len: number = 20) {
        return Math.random().toString(36).substring(2, len + 2);
    }
}
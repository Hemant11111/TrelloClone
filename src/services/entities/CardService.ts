import { ApiService } from "../ApiService";
import CardModel from "../../model/Card";

export class CardService {
    constructor(protected apiService = ApiService.getInstance()) {
    }


    async createCard(card: CardModel) {
        return this.apiService.post("https://www.testing.com", JSON.stringify(card));
    }
}
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Card } from '../models/Card';
import type { Message } from '../models/Message';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CardService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create new card
     * @param body
     * @returns Card
     * @throws ApiError
     */
    public postCardsCreateCard(
        body?: Card,
    ): CancelablePromise<Card> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/create_card',
            body: body,
        });
    }
    /**
     * Retrieve all cards
     * @returns Card
     * @throws ApiError
     */
    public getCardsRetrieveCards(): CancelablePromise<Array<Card>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/retrieve_cards',
        });
    }
    /**
     * Retrieve next card
     * @returns Card
     * @throws ApiError
     */
    public getCardsRetrieveCard(): CancelablePromise<Card> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cards/retrieve_card',
        });
    }
    /**
     * Update card
     * @param cardId
     * @param body
     * @returns Card
     * @throws ApiError
     */
    public patchCardsUpdateCard(
        cardId: number,
        body?: Card,
    ): CancelablePromise<Card> {
        console.log("aa", cardId, body)
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/cards/{card_id}/update_card',
            path: {
                'card_id': cardId,
            },
            body: body,
        });
    }
    /**
     * Raise card bin
     * @param cardId
     * @returns Message
     * @throws ApiError
     */
    public postCardsBinUp(
        cardId: number,
    ): CancelablePromise<Message> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{card_id}/bin_up',
            path: {
                'card_id': cardId,
            },
        });
    }
    /**
     * Lower card bin
     * @param cardId
     * @returns Message
     * @throws ApiError
     */
    public postCardsBinDown(
        cardId: number,
    ): CancelablePromise<Message> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cards/{card_id}/bin_down',
            path: {
                'card_id': cardId,
            },
        });
    }
    /**
     * Delete card
     * @param cardId
     * @returns Message
     * @throws ApiError
     */
    public deleteCardsDeleteCard(
        cardId: number,
    ): CancelablePromise<Message> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cards/{card_id}/delete_card',
            path: {
                'card_id': cardId,
            },
        });
    }
}

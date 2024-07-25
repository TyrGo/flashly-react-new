/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenResponse } from '../models/TokenResponse';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Sign up user
     * @param body
     * @returns TokenResponse
     * @throws ApiError
     */
    public postAuthRegister(
        body?: User,
    ): CancelablePromise<TokenResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/register',
            body: body,
        });
    }
    /**
     * Login user
     * @param body
     * @returns TokenResponse
     * @throws ApiError
     */
    public postAuthToken(
        body?: User,
    ): CancelablePromise<TokenResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/token',
            body: body,
        });
    }
    /**
     * Check if user is logged in
     * @returns User
     * @throws ApiError
     */
    public getAuthCheck(): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/check',
        });
    }
    /**
     * Refresh token
     * @returns TokenResponse
     * @throws ApiError
     */
    public postAuthRefresh(): CancelablePromise<TokenResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/refresh',
        });
    }
}

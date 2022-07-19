import Axios from 'axios';
import { ErrorCode, ErrorModel } from "../model/Error";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export class ApiService {
    private static instance = new ApiService();

    static getInstance() {
        return this.instance;
    }

    get(url: string, params?: any, headers?: any, requestId?: string) {
        return this.request({method: 'GET', url, headers, params, requestId});
    }

    delete(url: string, params?: any, headers?: any, requestId?: string) {
        return this.request({method: 'DELETE', url, headers, params, requestId});
    }

    post(
        url: string,
        data?: any,
        headers?: any,
        params?: any,
        requestId?: string,
    ) {
        return this.request({
            method: 'POST',
            url,
            data,
            headers,
            params,
            requestId,
        });
    }

    put(
        url: string,
        data?: any,
        useBaseUrl = true,
        useAuthHeaders = true,
        headers?: any,
        params?: any,
        requestId?: string,
    ) {
        return this.request({
            method: 'PUT',
            url,
            data,
            headers,
            params,
            requestId,
            useBaseUrl,
            useAuthHeaders,
        });
    }

    patch(
        url: string,
        data?: any,
        headers?: any,
        params?: any,
        requestId?: string,
    ) {
        return this.request({
            method: 'PATCH',
            url,
            data,
            headers,
            params,
            requestId,
        });
    }

    private async request({useBaseUrl = true, useAuthHeaders = true, ...config}) {
        try {
            const response = await Axios.request({
                baseURL: useBaseUrl ? BASE_URL : undefined,
                ...config,
                headers: config.headers,
            });
            return response?.data;
        } catch (error: any) {
            const errorStatus = error?.response?.status;
            if (errorStatus === ErrorCode.UNAUTHORIZED) {
                // TODO: redirect
            }
            // TODO: more error handling
            throw ErrorModel.from(error);
        }
    }
}

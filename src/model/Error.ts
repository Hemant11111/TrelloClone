import { AxiosError } from 'axios';

export enum ErrorCode {
    UNIDENTIFIED,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    UNPROCESSABLE_ENTITY = 422,
    TOO_MANY_REQUESTS = 429,
}

export class ErrorModel {
    constructor(
        readonly message: string = 'Error. Please Try Again.',
        readonly code?: number,
        readonly status: ErrorCode = ErrorCode.UNIDENTIFIED,
        readonly errors = {},
        readonly data = {},
    ) {
    }

    static from(axiosError: AxiosError): ErrorModel {
        if (!axiosError.response) {
            return new ErrorModel();
        }

        const {status, data}: any = axiosError.response;
        let errors = null;
        if (status === ErrorCode.UNPROCESSABLE_ENTITY) {
            errors = data?.errors;
        }
        return new ErrorModel(data?.message, data?.code, status, errors, data?.data);
    }
}

import type { CreateAxiosDefaults } from 'axios';
type RequestConfig = CreateAxiosDefaults & {
    message?: any;
};
declare class _Axios {
    config: RequestConfig;
    message: any;
    constructor(config: RequestConfig);
    init(config: RequestConfig): void;
}
export { _Axios };

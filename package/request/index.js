"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._Axios = void 0;
var axios_1 = __importDefault(require("axios"));
var _Axios = /** @class */ (function () {
    function _Axios(config) {
        this.config = Object.assign({}, config);
        if (config.message) {
            this.message = config.message;
        }
        this.init(config);
    }
    _Axios.prototype.init = function (config) {
        var _this = this;
        var service = axios_1.default.create(__assign({}, config));
        // 请求拦截
        service.interceptors.request.use(function (config) {
            // token 处理
            // const token = tokenService.token
            // if (token) config.headers.token = token
            // loading 处理
            // if (config.params?.showLoading) {
            //   this.message.loading({
            //     content: 'Loading...',
            //     duration: 0,
            //   })
            // }
            return config;
        }, function (error) {
            return Promise.reject(error.response);
        });
        // 响应拦截
        service.interceptors.response.use(function (response) {
            // if (response.headers['token']) {
            //   tokenService.setToken(response.headers['token'])
            // }
            // if (response.headers['refresh-token']) {
            //   tokenService.setRefreshToken(response.headers['refresh-token'])
            // }
            // if (config.params?.showLoading) {
            //   this.message.clear()
            // }
            if (response.status === 200) {
                return response;
            }
            else {
                throw new Error(response.status.toString());
            }
        }, function (responseErr) { return __awaiter(_this, void 0, void 0, function () {
            var status;
            var _a;
            return __generator(this, function (_b) {
                status = (_a = responseErr.response) === null || _a === void 0 ? void 0 : _a.status;
                // const msg = responseErr.response?.data?.msg || ''
                switch (status) {
                    case 401: // "Unauthorized"
                        // 做换取token操作
                        // const originRequestConf = responseErr.config
                        // if (tokenService.refreshToken) { // 存在refreshToken 
                        //   const isSuceess = await refreshToken()
                        //   console.log('刷新Token成功: ', isSuceess)
                        //   if (isSuceess && originRequestConf) {
                        //     originRequestConf.headers['refreshtoken'] = tokenService.refreshToken
                        //     // 重新发一次原来的请求
                        //     return service(originRequestConf)
                        //   }
                        // }
                        // if (this.message) {
                        //   this.message.error(msg)
                        // }
                        // location.href = location.origin + '/login'
                        return [2 /*return*/, Promise.reject(responseErr)];
                    default:
                        return [2 /*return*/, Promise.reject(responseErr)];
                }
                return [2 /*return*/];
            });
        }); });
    };
    return _Axios;
}());
exports._Axios = _Axios;

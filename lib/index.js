"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProBot = void 0;
//Coded By Muhammad Rafat Kurkar
//KMCodes Server Owner
//Support https://discord.gg/kingmandev
const axios_1 = __importDefault(require("axios"));
const fetcher = axios_1.default.create({ baseURL: `https://api.probot.io` });
class KINGMAN_PROBOT_API {
    constructor(data) {
        this.token = (data === null || data === void 0 ? void 0 : data.userAcessToken) || "";
        this.api = fetcher;
    }
    /**
     * to get top 100 Credit
     * @returns {Promise<top_credit[]>}
     */
    getTopCredits() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                let req = yield this.api.get("/top_credits").catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                return res(req.data);
            }));
        });
    }
    /**
     * to get top 100 xp
     * @returns {Promise<top_xp[]>}
     */
    getTopXp() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                let req = yield this.api.get("/top_xp").catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                return res(req.data);
            }));
        });
    }
    /**
     * to fetch any user by probot
     * @param {string} id
     * @returns {Promise<userdata>}
     */
    userInfo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                if (!id)
                    return rej({ message: "Wrong id" });
                let req = yield this.api.get("/user/" + id).catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                if (req.data.error)
                    return rej({ message: req.data.error });
                return res(req.data);
            }));
        });
    }
    /**
     * to get user profile image link by probot
     * @param {string} id
     * @returns {Promise<string>}
     */
    generateProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                if (!id)
                    return rej({ message: "Wrong id" });
                let req = yield this.api.get(`/profile/${id}`).catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                if (req.data === 404 || !req.config.url)
                    return rej({ message: "Bad Req" });
                return res(req.config.baseURL + req.config.url);
            }));
        });
    }
    /**
     * to generate captcha image
     * @param {string} id
     * @returns {Promise<string>}
     */
    generateCaptcha(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                if (!id)
                    return rej({ message: "Wrong Code" });
                let req = yield this.api.get(`/captcha?code=${id}`).catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                if (req.data === 404 || !req.config.url)
                    return rej({ message: "Bad Req" });
                return res(req.config.baseURL + req.config.url);
            }));
        });
    }
    //npx -p typescript tsc src/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir types
    /**
     * to generate rank for any user in any guild
     * @param {string} guild_id
     * @param {string} user_id
     * @returns {Promise<string>}
     */
    generateRankCard(guild_id, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                if (!guild_id || !user_id)
                    return rej({ message: "you need to add guild_id and user_id" });
                let req = yield this.api.get(`/rank/${guild_id}/${user_id}`).catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                if (req.data === 404 || !req.config.url)
                    return rej({ message: "Bad Req" });
                return res(req.config.baseURL + req.config.url);
            }));
        });
    }
    /**
     * to get profile store product
     * @returns {Promise<profile_store[]>}
     */
    getStorePadge() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                let req = yield this.api.get("/bg?store=profile", { headers: { "authorization": this.token } }).catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                return res(req.data);
            }));
        });
    }
    /**
     * to get profile badge store product
     * @returns {Promise<badges_store[]>}
     */
    generateBadge() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                let req = yield this.api.get("/badges", { headers: { "authorization": this.token } }).catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                return res(req.data);
            }));
        });
    }
    /**
     * to get profile rankcard id store product
     * @returns {Promise<badges_store[]>}
     */
    generateID() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                let req = yield this.api.get("/bg?store=id", { headers: { "authorization": this.token } }).catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                return res(req.data);
            }));
        });
    }
    /**
     * to get all user guild using accesstoken
     * @returns {Promise<guild_data[]>}
     */
    getUserGuilds() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
                let req = yield this.api.get("/guilds", { headers: { "authorization": this.token } }).catch(e => { });
                if (!req || !req.data)
                    return rej({ message: "Bad Req" });
                if (req.status !== 200)
                    return rej({ message: "Bad Req" });
                return res(req.data);
            }));
        });
    }
}
exports.ProBot = KINGMAN_PROBOT_API;
exports.default = KINGMAN_PROBOT_API;
//# sourceMappingURL=index.js.map
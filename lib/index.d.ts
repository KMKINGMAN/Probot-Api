import { top_credit, top_xp, userdata, profile_store, badges_store, guild_data } from "./Utils/ResponeTypes";
interface KINGMAN_API_OPS {
    userAcessToken?: string;
}
declare const fetcher: import("axios").AxiosInstance;
declare class KINGMAN_PROBOT_API {
    token: string;
    api: typeof fetcher;
    constructor(data?: KINGMAN_API_OPS);
    /**
     * to get top 100 Credit
     * @returns {Promise<top_credit[]>}
     */
    getTopCredits(): Promise<top_credit[]>;
    /**
     * to get top 100 xp
     * @returns {Promise<top_xp[]>}
     */
    getTopXp(): Promise<top_xp[]>;
    /**
     * to fetch any user by probot
     * @param {string} id
     * @returns {Promise<userdata>}
     */
    userInfo(id: String): Promise<userdata>;
    /**
     * to get user profile image link by probot
     * @param {string} id
     * @returns {Promise<string>}
     */
    generateProfile(id: String): Promise<string>;
    /**
     * to generate captcha image
     * @param {string} id
     * @returns {Promise<string>}
     */
    generateCaptcha(id: String): Promise<string>;
    /**
     * to generate rank for any user in any guild
     * @param {string} guild_id
     * @param {string} user_id
     * @returns {Promise<string>}
     */
    generateRankCard(guild_id: String, user_id: String): Promise<string>;
    /**
     * to get profile store product
     * @returns {Promise<profile_store[]>}
     */
    getStorePadge(): Promise<profile_store[]>;
    /**
     * to get profile badge store product
     * @returns {Promise<badges_store[]>}
     */
    generateBadge(): Promise<badges_store[]>;
    /**
     * to get profile rankcard id store product
     * @returns {Promise<badges_store[]>}
     */
    generateID(): Promise<profile_store[]>;
    /**
     * to get all user guild using accesstoken
     * @returns {Promise<guild_data[]>}
     */
    getUserGuilds(): Promise<guild_data[]>;
}
export { KINGMAN_PROBOT_API as ProBot };
//# sourceMappingURL=index.d.ts.map
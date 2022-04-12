//Coded By Muhammad Rafat Kurkar
//KMCodes Server Owner
//Support https://discord.gg/kingmandev
import axios from 'axios'
import { top_credit, top_xp, userdata, profile_store, badges_store, guild_data } from "./Utils/ResponeTypes";
interface KINGMAN_API_OPS { 
    userAcessToken?: string
}
const fetcher = axios.create({ baseURL: `https://api.probot.io` });
class KINGMAN_PROBOT_API {
    public token : string;
    public api : typeof fetcher;
    constructor(data?: KINGMAN_API_OPS ){
        this.token = data?.userAcessToken || ""
        this.api = fetcher;
    }
    /**
     * to get top 100 Credit
     * @returns {Promise<top_credit[]>}
     */
    async getTopCredits(): Promise<top_credit[]> {
        return new Promise(async (res, rej)=> {
            let req = await this.api.get("/top_credits").catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req"});
            if(req.status !== 200) return rej({ message: "Bad Req"});
            return res(req.data);           
        })
    }
    /**
     * to get top 100 xp
     * @returns {Promise<top_xp[]>}
     */
    async getTopXp(): Promise<top_xp[]> {
        return new Promise(async (res, rej)=> {
            let req = await this.api.get("/top_xp").catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req"});
            if(req.status !== 200) return rej({ message: "Bad Req"});
            return res(req.data);           
        })
    }
    /**
     * to fetch any user by probot
     * @param {string} id 
     * @returns {Promise<userdata>}
     */
    async userInfo(id: String): Promise<userdata> {
        return new Promise(async (res, rej)=> {
            if(!id) return rej({ message: "Wrong id"});
            let req = await this.api.get("/user/" + id).catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req"});
            if(req.status !== 200) return rej({ message: "Bad Req"});
            if(req.data.error) return rej({ message: req.data.error })
            return res(req.data);           
        })
    }
    /**
     * to get user profile image link by probot 
     * @param {string} id 
     * @returns {Promise<string>}
     */
    async generateProfile(id: String): Promise<string> {
        return new Promise(async (res, rej)=> {
            if(!id) return rej({ message: "Wrong id"});
            let req = await this.api.get(`/profile/${id}`).catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req"});
            if(req.status !== 200) return rej({ message: "Bad Req"});
            if(req.data === 404 || !req.config.url) return rej({ message: "Bad Req" });
            return res(req.config.baseURL + req.config.url);           
        });
    }
    /**
     * to generate captcha image
     * @param {string} id 
     * @returns {Promise<string>}
     */
    async generateCaptcha(id: String): Promise<string> {
        return new Promise(async (res, rej)=> {
            if(!id) return rej({ message: "Wrong Code"});
            let req = await this.api.get(`/captcha?code=${id}`).catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req"});
            if(req.status !== 200) return rej({ message: "Bad Req"});
            if(req.data === 404 || !req.config.url) return rej({ message: "Bad Req" });
            return res(req.config.baseURL + req.config.url);           
        });    
    }
    //npx -p typescript tsc src/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir types
    /**
     * to generate rank for any user in any guild
     * @param {string} guild_id 
     * @param {string} user_id 
     * @returns {Promise<string>}
     */
    async generateRankCard(guild_id: String, user_id: String): Promise<string> {
        return new Promise(async (res, rej)=> {
            if(!guild_id || !user_id) return rej({ message: "you need to add guild_id and user_id"});
            let req = await this.api.get(`/rank/${guild_id}/${user_id}`).catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req"});
            if(req.status !== 200) return rej({ message: "Bad Req"});
            if(req.data === 404 || !req.config.url) return rej({ message: "Bad Req" });
            return res(req.config.baseURL + req.config.url);          
        });
    }
    /**
     * to get profile store product
     * @returns {Promise<profile_store[]>}
     */
    async getStorePadge(): Promise<profile_store[]> {
        return new Promise(async (res, rej)=> {
            let req = await this.api.get("/bg?store=profile", { headers: { "authorization": this.token }}).catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req"});
            if(req.status !== 200) return rej({ message: "Bad Req"});
            return res(req.data);   
        })
    }
    /**
     * to get profile badge store product
     * @returns {Promise<badges_store[]>}
     */
    async generateBadge(): Promise<badges_store[]> {
        return new Promise(async (res, rej)=> {
            let req = await this.api.get("/badges", { headers: { "authorization": this.token }}).catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req"});
            if(req.status !== 200) return rej({ message: "Bad Req"});
            return res(req.data);   
        })
    }
    /**
     * to get profile rankcard id store product
     * @returns {Promise<badges_store[]>}
     */
    async generateID(): Promise<profile_store[]> {
        return new Promise(async (res, rej)=> {
            let req = await this.api.get("/bg?store=id", { headers: { "authorization": this.token }}).catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req" });
            if(req.status !== 200) return rej({ message: "Bad Req" });
            return res(req.data);   
        })
    }
    /**
     * to get all user guild using accesstoken 
     * @returns {Promise<guild_data[]>}
     */
    async getUserGuilds(): Promise<guild_data[]> {
        return new Promise(async (res, rej)=> {
            let req = await this.api.get("/guilds", { headers: { "authorization": this.token }}).catch(e=> {});
            if(!req || !req.data) return rej({ message: "Bad Req"});
            if(req.status !== 200) return rej({ message: "Bad Req"});
            return res(req.data);   
        })
    }

}

export {
    KINGMAN_PROBOT_API as ProBot
}
export default KINGMAN_PROBOT_API;
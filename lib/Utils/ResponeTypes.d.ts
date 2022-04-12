interface top_credit {
    name: string;
    discriminator: string;
    credits: number;
    avatar: string;
}
interface top_xp {
    id: string;
    name: string;
    discriminator: string;
    xp: number;
    level: number;
    avatar: string;
}
interface userdata {
    id: string;
    username: string;
    discriminator: string;
}
interface profile_store {
    id: number;
    filename: string;
    name: string;
    ownerid: number | null;
    price: number;
    category: string;
    hidden: boolean | number;
}
interface badges_store {
    n: number;
    filename: string;
    name: string;
    ownerid: string | null;
    price: number;
    category: string;
    hidden: number;
}
interface guild_data {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
    permissions: number;
    features: Array<string>;
    permissions_new: string;
}
export { top_credit, top_xp, userdata, profile_store, badges_store, guild_data };
//# sourceMappingURL=ResponeTypes.d.ts.map
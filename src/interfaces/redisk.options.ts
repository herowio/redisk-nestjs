import {SentinelOptions} from "herow-redisk/dist/client/sentinel.options";

export interface RediskOptions {
    url?: string;
    host?: string;
    port?: number;
    db?: number;
    password?: string;
    sentinels? : SentinelOptions[];
}

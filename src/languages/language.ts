import { Level } from "./level";

export default interface Language {
    id: number,
    name: string,
    level: {
        name: Level,
        numeric: number
    }
};
import { Level } from "./level";
import Language from "./language";

const languages: Language[] = [
    {
        id: 1,
        name: "Spanish",
        level: {
            name: Level.Native,
            numeric: 5
        }
    },
    {
        id: 2,
        name: "English",
        level: {
            name: Level.C1,
            numeric: 4
        }
    }
];

export default languages;
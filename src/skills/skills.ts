import { Level } from "./level";
import Skill from "./skill";

const skills: Skill[] = [
    {
        id: 1,
        name: "Team leadership",
        level: Level.Expert
    },
    {
        id: 2,
        name: "Software architecture design",
        level: Level.Expert
    },
    {
        id: 3,
        name: "Back-end development",
        level: Level.Expert
    },
    {
        id: 4,
        name: "Front-end development",
        level: Level.Experienced
    },
    {
        id: 5,
        name: "Multiplatform development",
        level: Level.Experienced
    },
    {
        id: 6,
        name: "DevOps",
        level: Level.Skillful
    },
    {
        id: 7,
        name: "PHP",
        level: Level.Expert
    },
    {
        id: 8,
        name: "Javascript/Typescript",
        level: Level.Expert
    },
    {
        id: 9,
        name: "Python",
        level: Level.Experienced
    },
    {
        id: 10,
        name: ".Net",
        level: Level.Skillful
    },
    {
        id: 11,
        name: "Java",
        level: Level.Skillful
    }
];

export default skills;
import {atom} from "recoil";

export const selectedTeam = atom({
    key: "team",
    default: ""
})

export const selectedFormation = atom({
    key: "formation",
    default: ""
})
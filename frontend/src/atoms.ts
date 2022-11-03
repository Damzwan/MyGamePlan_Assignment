import {atom} from "recoil";

export const selectedTeam = atom({
    key: "team",
    default: null
})

export const selectedFormation = atom({
    key: "formation",
    default: ""
})
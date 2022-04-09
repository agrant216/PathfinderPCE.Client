import { PlayerCharacter } from "src/app/models/player-character.model";

export const initialState: PlayerCharacter = {
    id: "",
    name: "",
    level: 0,
    classLevels: undefined,
    hitPoints: undefined,
    abilityScores: undefined,
    ac: undefined,
    skills: undefined,
    savingThrows: undefined
}

// const pcReducer = createReducer(
//     initialState,

// );
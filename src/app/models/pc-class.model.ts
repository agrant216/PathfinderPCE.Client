import { Modifier } from "./modifier.model";
//backend
export interface pcClass {
    name: string;
    info: string;
    babType: string;
    reflexType: string;
    fortitudeType: string;
    willType: string;
    isCaster: boolean;
    type: string;
    features: Map<number,feature[]>;
}
//frontend
export interface classLevel {
    name:string;
    level:number;
    bab:number;
    reflexBonus:number;
    fortitudeBonus:number;
    willBonus:number;
    featureNames: string[];
}

export interface feature {
    name:string;
    info:string;
    modifiers: Modifier[];
}
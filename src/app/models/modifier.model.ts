export interface IModifier {
    Name: string;
    Type: string;
    SubType: string;
    Mod: number;
}

export interface IModifierBySubtype{
  [index: string] : IModifier;
}

export class Modifer implements IModifier{
    constructor(name:string, type:string, subtype:string, modvalue:number){
        this.Name = name;
        this.Type = type;
        this.SubType = subtype;
        this.Mod = modvalue;
    }

    Name: string;
    Type: string;
    SubType: string;
    Mod: number;
}

export class Modifiers {
  modifiersBySubtype:IModifierBySubtype = {};
  modifierList:Array<IModifier> = [];
}

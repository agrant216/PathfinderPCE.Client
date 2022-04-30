export interface IModifier {
    id: string;
    name: string;
    type: string;
    subtype: string;
    mod: number;
}

export interface IModifierBySubtype{
  [index: string] : IModifier;
}

export class Modifer implements IModifier{
    constructor(name:string, type:string, subtype:string, modvalue:number){
        this.id = type + '.' + subtype + '.' + name;
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.mod = modvalue;
    }
    
    readonly id: string;
    name: string;
    type: string;
    subtype: string;
    mod: number;
}

export class Modifiers {
  modifiersBySubtype:IModifierBySubtype = {};
  modifierList:Array<IModifier> = [];
}

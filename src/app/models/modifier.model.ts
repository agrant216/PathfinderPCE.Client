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

export class Modifier implements IModifier{
    constructor(name:string, type:string, subtype:string, modvalue:number){
        this.id = type + '.' + subtype + '.' + name;
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.mod = modvalue;
    }
    readonly id: string;
    category: string = '';
    name: string;
    type: string;
    subtype: string;
    mod: number;
}

export class dynamicModifier extends Modifier {
  constructor(name:string, type:string, subtype:string, modvalue:number){
    super(name, type, subtype, modvalue);
  }
   override category = 'dynamic';
   dynamicModType: string = ''; //level or Attribute
}

export class Modifiers {
  modifiersBySubtype:IModifierBySubtype = {};
  modifierList:Array<IModifier> = [];
}

export class Modifier {
    constructor(name:string, type:string, subtype:string, modvalue:number){
        this.id = type + '.' + subtype + '.' + name;
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.mod = modvalue;
    }
    readonly id: string;
    class: string = 'basic';
    name: string;
    type: string;
    subtype: string;
    mod: number;
}

export class dynamicModifier extends Modifier {
  constructor(name:string, type:string, subtype:string, modvalue:number){
    super(name, type, subtype, modvalue);
  }
   override class = 'dynamic';
   dynamicModType: string = ''; //level or Attribute
}
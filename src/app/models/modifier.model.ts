export interface IModifer {
    Name: String;
    Type: String;
    SubType: String;
    Mod: Number;
}

export class Modifer implements IModifer{
    constructor(name:string, type:string, subtype:string, modvalue:number){
        this.Name = name;
        this.Type = type;
        this.SubType = subtype;
        this.Mod = modvalue;
    }

    Name: String;
    Type: String;
    SubType: String;
    Mod: Number;
}
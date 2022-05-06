import { Modifier } from "../models/modifier.model";

export const skills:Array<string> = [
    'Acrobatics',
    'Appraise',
    'Bluff',
    'Climb',
    'Craft',
    'Diplomacy',
    'Disable Device',
    'Disguise',
    'Escape Artist',
    'Fly',
    'Handle Animal',
    'Heal',
    'Intimidate',
    'Knowledge: Arcana',
    'Knowledge: Dungeoneering',
    'Knowledge: Engineering',
    'Knowledge: Geography',
    'Knowledge: History',
    'Knowledge: Local',
    'Knowledge: Nature',
    'Knowledge: Nobility',
    'Knowledge: Planes',
    'Knowledge: Religion',
    'Linguistics',
    'Perception',
    'Perform',
    'Profession',
    'Ride',
    'Sense Motive',
    'Sleight of Hand',
    'Spellcraft',
    'Stealth',
    'Survival',
    'Swim',
    'Use Magic Device'
];

export const attributeTypes: Array<string> = ['Strength','Dexterity', 'Constitution', 'Intelligence','Wisdom','Charisma'];

export const armorClassTypes: Array<string> = ['Armor','Deflection', 'Dodge', 'Natural Armor', 'Shield', 'Size'];


export class dataHelper {

    public static groupBySubtype(data: Modifier[]): { [key: string]: {subtype: string, names: string ,totalMod: number} } {
        return data.reduce((storage, item) => {
          var group: string = new Map(Object.entries(item)).get('subtype');
          if(storage[group]) {
            storage[group].totalMod += item.mod;
            storage[group].names = storage[group].names.concat(` + ${item.name}`);
          }
          else{
            storage[group] = {subtype: item.subtype, names: item.name, totalMod: item.mod};
          }
          return storage; 
        }, {} as { [key: string]: {subtype: string, names: string ,totalMod: number} });
    };

    public groupBy2 = <T>(arr: T[], keys: (keyof T)[]): { [key: string]: T[] } => {
        return arr.reduce((storage, item) => {
          const objKey = keys.map(key => `${ item[key] }`).join(':');
          if (storage[objKey]) {
            storage[objKey].push(item);
          } else {
            storage[objKey] = [item];
          }
          return storage;
        }, {} as { [key: string]: T[] });
      }
}
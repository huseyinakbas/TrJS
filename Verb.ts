import { Moods } from "./Moods";
import { Polarities } from "./Polarities";
import { Pronouns } from "./Pronouns";
import { Word } from "./Word";
import { Tenses } from "./Tenses";

export const Negation = "m#";
export const Interrogation = " m*";

interface IPerson{
  [p: string]: string
}
export const Person: IPerson = {
  [Pronouns.Ben]: "&*m",
  [Pronouns.Sen]: "s*n",
  [Pronouns.O]  : "",
  [Pronouns.Biz]: "%y&*z",
  [Pronouns.Siz]: "s*n*z",
  [Pronouns.Onlar]: "l#r",
};
interface ITense{
  [t:string]: {[p: string]: {[m: string]: string} }
}
export const Tense: ITense = {
  [Tenses.Present]:{
    [Polarities.Affirmative]: {
      [Moods.Indicative]: "&!r",
    },
    [Polarities.Negative]:{
      [Moods.Indicative]: "z",
    }
  }
};

export class Verb extends Word {
  private mood: Moods;
  private pronoun: Pronouns;
  private tense: Tenses;
  private polarity: Polarities;

  public setTense(t:Tenses, p: Pronouns, m: Moods, po: Polarities){
    this.mood = m;
    this.pronoun = p;
    this.tense = t;
    this.polarity = po;
    let link = Tense[t][po][m];
    this.suffix(link);
    this.suffix(Person[p]);
  }
}

export interface INewsEvents {
  EndDate: string;
  Link: string;
  RewardDate: string | null;
  StartDate: string;
  Thumbnail: string;
  Title: string;
}

export interface ICharacter {
  CharacterClassName: string;
  CharacterLevel: number;
  CharacterName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
  ServerName: string;
}

export interface ICalendar {
  date?: Date;
  day: number;
  active: boolean;
}

export interface ICharInfo {
  CharacterClassName: string;
  CharacterLevel: number;
  CharacterName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
  ServerName: string;
}

export interface IEventInfo {
  EndDate: string;
  Link: string;
  RewardDate: string | null;
  StartDate: string;
  Thumbnail: string;
  Title: string;
}

export interface ICharDetailInfo {
  CharacterClassName: string;
  CharacterImage: string;
  CharacterLevel: number;
  CharacterName: string;
  ExpeditionLevel: number;
  GuildMemberGrade: null | string;
  GuildName: null | string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
  PvpGradeName: string;
  ServerName: string;
  Stats: [{ Type: string; Value: string }[]];
  Tendencies: [
    {
      MaxPoint: number;
      Point: number;
      Type: string;
    }[]
  ];
  Title: null;
  TotalSkillPoint: number;
  TownLevel: number;
  TownName: string;
  UsingSkillPoint: number;
}

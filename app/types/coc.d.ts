interface Clan {
  tag: string;
  name: string;
  type: string;
  description: string;
  location: Location;
  badgeUrls: BadgeUrls;
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  warTies: number;
  warLosses: number;
  isWarLogPublic: boolean;
  warLeague: WarLeague;
  members: number;
  memberList: Member[];
  labels: Label[];
}

interface Label {
  id: number;
  name: string;
  iconUrls: IconUrls2;
}

interface IconUrls2 {
  small: string;
  medium: string;
}

interface Member {
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  league: League;
  trophies: number;
  versusTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
}

interface League {
  id: number;
  name: string;
  iconUrls: IconUrls;
}

interface IconUrls {
  small: string;
  tiny: string;
  medium: string;
}

interface WarLeague {
  id: number;
  name: string;
}

interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}

interface Location {
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;
}

export {
  Clan,
  Label,
  IconUrls,
  IconUrls2,
  Member,
  League,
  WarLeague,
  BadgeUrls,
  Location,
};

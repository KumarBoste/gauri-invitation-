export interface FamilyMember {
  id: string;
  name: string;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  marathiDate: string;
  dateStr: string;
  time?: string;
  venue: string;
  iconType: 'sun' | 'water';
}

export interface PetalItem {
  id: number;
  symbol: string;
  left: number;
  duration: number;
  size: number;
  delay: number;
}

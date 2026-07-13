
export enum Category {
  TECH = 'Tech',
  BUSINESS = 'Business',
  DESIGN = 'Design',
  AI = 'AI',
  GENERAL = 'General',
  ACADEMIC = 'Academic'
}

export interface Platform {
  id: string;
  name: string;
  description: string;
  certificateType: string;
  isFree: boolean;
  isLowCost: boolean;
  url: string;
  categories: Category[];
}

export interface AppState {
  currentCategory: Category | 'All' | null;
  searchQuery: string;
  showDisclaimer: boolean;
}

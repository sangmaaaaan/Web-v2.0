export interface Section {
    subject: any;
    id: number;
    name: string;
    professor: string;
  }
  
  const SECTIONS_KEY = 'sections';
  
  export const saveSections = (sections: Section[]) => {
    localStorage.setItem(SECTIONS_KEY, JSON.stringify(sections));
  };
  
  export const loadSections = (): Section[] => {
    const sections = localStorage.getItem(SECTIONS_KEY);
    return sections ? JSON.parse(sections) : [];
  };
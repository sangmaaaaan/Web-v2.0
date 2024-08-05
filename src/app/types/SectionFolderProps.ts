export interface SectionFolderProps {
    id: number;
    name: string;
    professor: string;
    sections: { id: number; name: string; professor: string }[];
    setSections: React.Dispatch<React.SetStateAction<{ id: number; name: string; professor: string }[]>>;
  }
export interface Section {
  id?: number;
  folderId?: number;
  subject: string;
  name: string;
  professor: string;
}

export interface SectionModalProps {
  onClose: () => void;
  addSection: (section: Partial<Section>) => void;
  initialData?: Partial<Section>; // 선택적 속성으로 정의
}
  
  export interface CTANewSectionProps {
    addSection: (section: Section) => void;
  }
namespace DTO {
  export interface Patient {
    createdAt: string;
    name: string;
    avatar: string;
    description: string;
    website: string;
    id: string;
  }
  export interface EditablePatient {
    id?: string;
    name: string;
    description: string;
    website: string;
  }
}

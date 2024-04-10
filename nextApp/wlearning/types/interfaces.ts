export interface CardData {
  id: string;
  field: string;
  description: string;
  slug: string;
  field_mindmap_path: string;
  introduction: string;
}

export interface FieldMenuItem {
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  subtitle3?: string;
}
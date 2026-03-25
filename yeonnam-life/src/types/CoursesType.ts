export interface CoursesType {
  id: string;
  editorId?: string;
  title: string;
  description: string;
  duration: string;
  distance: string;
  spots?: string[];
  tags?: string[];
  likeCount?: number;
  thumbnail?: string;
  createdAt?: string;
  updatedAt?: string;
}

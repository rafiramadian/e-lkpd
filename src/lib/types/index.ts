export type UserRole = 'student' | 'teacher';
export type UserStatus = 'active' | 'inactive';

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  status: UserStatus;
  class_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Class {
  id: string;
  name: string;
  description?: string;
  teacher_id: string;
  created_at: string;
  updated_at: string;
}

export interface Material {
  id: string;
  title: string;
  description: string;
  content: MaterialContent[];
  class_id: string;
  teacher_id: string;
  inquiry_stages: InquiryStage[];
  created_at: string;
  updated_at: string;
}

export interface MaterialContent {
  id: string;
  type: 'text' | 'image' | 'video' | 'file';
  content: string;
  order: number;
}

export interface InquiryStage {
  id: string;
  stage: 'question' | 'exploration' | 'experiment' | 'conclusion';
  title: string;
  description: string;
  content: string;
  order: number;
}

export interface Assignment {
  id: string;
  material_id: string;
  title: string;
  description: string;
  questions: Question[];
  due_date?: string;
  created_at: string;
  updated_at: string;
}

export interface Question {
  id: string;
  type: 'multiple_choice' | 'short_answer' | 'essay' | 'code';
  question: string;
  options?: string[];
  correct_answer?: string;
  points: number;
  order: number;
}

export interface StudentAssignment {
  id: string;
  assignment_id: string;
  student_id: string;
  answers: Answer[];
  score?: number;
  submitted_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Answer {
  id: string;
  question_id: string;
  answer: string;
  is_correct?: boolean;
  points_earned?: number;
}

export interface Test {
  id: string;
  material_id: string;
  title: string;
  description: string;
  type: 'pre_test' | 'post_test';
  questions: Question[];
  time_limit?: number;
  created_at: string;
  updated_at: string;
}

export interface StudentTest {
  id: string;
  test_id: string;
  student_id: string;
  answers: Answer[];
  score: number;
  completed_at: string;
  created_at: string;
}

export interface Discussion {
  id: string;
  material_id: string;
  title: string;
  content: string;
  author_id: string;
  parent_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Progress {
  id: string;
  student_id: string;
  material_id: string;
  assignment_id?: string;
  test_id?: string;
  progress_percentage: number;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Feedback {
  id: string;
  student_assignment_id: string;
  teacher_id: string;
  content: string;
  score?: number;
  created_at: string;
  updated_at: string;
}

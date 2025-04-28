export type User= {
  name: string;
  username: string;
  email: string;
  password: string;
  institution: string;
  codeNode: string;
  graduatedDate: string;
  studyLevel: Study_Level | undefined;
  experienceYears: Experience_Years | undefined;
  specializationAreas: string[];
}

type Study_Level = {
  SECONDARY_UNIVERSITY
  GRADUATE_UNIVERSITY
  SPECIALIZATION
  MASTER
  DOCTORATE
}

type Experience_Years = {
  LESS_5
  BETWEEN_5_10
  BETWEEN_11_15
  BETWEEN_16_20
  MORE_THAN_20
}

type UserLogin = {
  email: string;
  password: string;
}

export type AuthContextType = {
  user: UserLogin | null;
  isAuth: boolean;
  loading: boolean;
  errors: Array<string>;
  signIn: (values: UserLogin) => void;
  signUp: (values: User) => void;
  logout: () => void;
};
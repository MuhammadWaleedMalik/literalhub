export interface DashboardUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary: string;
  createdAt: string;
}

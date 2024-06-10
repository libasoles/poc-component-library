import { Dayjs } from "dayjs";

export interface Patient {
  id: string;
  createdAt: Dayjs;
  name: string;
  avatar: string;
  description: string;
  website: string;
}

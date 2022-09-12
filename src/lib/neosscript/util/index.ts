import { v4 as uuidv4 } from "uuid";

export const generateId = (id: string | undefined = undefined): string =>
  id ? id : uuidv4();

import { create } from "zustand";

type IUser = {
  document: string;
  birth: string;
  registration: string;
  valid: string;
  course: string;
  camps: string;
  avatar: string;
  name: string;
  email: string;
  phone: string;
};

type IUserStore = {
  user: IUser;
  users: string[];
  userToUse: string;
  setUser: (user: IUser) => void;
  setUsers: (users: string[]) => void;
  setUserToUse: (userToUse: string) => void;
};

export const useUserStore = create<IUserStore>((set) => ({
  user: {} as IUser,
  userToUse: "",
  users: [],
  setUser: (user) => set({ user }),
  setUsers: (users) => set({ users }),
  setUserToUse: (userToUse) => set({ userToUse }),
}));

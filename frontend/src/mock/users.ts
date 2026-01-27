export type User = {
  id: string;
  username: string;
  password: string;
  displayName: string;
};

export const USERS: User[] = [
  { id: "u1", username: "user1", password: "1234", displayName: "User1" },
  { id: "u2", username: "user2",  password: "1234", displayName: "User2"  },
];
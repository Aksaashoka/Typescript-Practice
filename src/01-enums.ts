export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}
export type User = {
  username: string;
  role: ROLES;
};
const alanUser: User = { username: "Aksa", role: ROLES.ADMIN };

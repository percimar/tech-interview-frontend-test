const USER_ROLES = ["User", "Admin", "Super Admin"] as const;

type UserRole = typeof USER_ROLES[number]
type ISOString = string;
type User = { id: number, username: string; role: UserRole; registered_on: ISOString };
type UserState = User | undefined;

export { USER_ROLES };
export type { User, UserState, UserRole, ISOString };

function authenticate(username: string, password: string) {
  if (username !== "admin" || password !== "admin") return null;

  const user = {
    id: "33",
    name: "Admin",
    email: "admin@admin.com",
  };

  return user;
}

export const userService = {
  authenticate,
};

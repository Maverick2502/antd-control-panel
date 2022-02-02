const rolesName = {
  SUPERVISOR: "supervisor",
  BACKOFFICE: "backoffice",
  SUPPORT: "support",
  SPECIALIST: "specialist",
};

export const roles = {
  ...rolesName,
  ALL_ROLES: Object.values(rolesName),
};

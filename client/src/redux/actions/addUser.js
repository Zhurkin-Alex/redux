export function addUser (payload) {
  return {
  type: "ADDUSER",
  payload,
  };
  }

export function loadUsers (payload) {
  return {
  type: "LOADUSERS",
  payload,
  };
  }

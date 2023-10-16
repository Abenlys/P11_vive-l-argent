export const API_BASE_URL = "http://localhost:3001/api/v1/user/";

export const loginUser = async (x, y) => {
  const user = {
    email: x,
    password: y,
  };
  const response = await fetch(`${API_BASE_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    const data = await response.json();
    const token = data.body.token;
    return token;
  } else {
    throw new Error("Echec de l'authentification");
  }
};

export const userProfile = async (token) => {
  const responseProfile = await fetch(`${API_BASE_URL}profile`, {
    method: "POST",
    headers: {
      Authorization: `Bearer${token}`,
      "Content-Type": "application/json",
    },
  });
  if (responseProfile.ok) {
    const dataProfile = await responseProfile.json();
    return dataProfile.body;
  } else {
    throw new Error("Echec de la récupération des infos utilisateurs");
  }
};

export const editUserName = async (token, newUserName) => {
  const userNameModif = { userName: newUserName };
  const responseEditUserName = await fetch(`${API_BASE_URL}profile`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userNameModif),
  });
  if (responseEditUserName.ok) {
    const fetchNewUserName = await responseEditUserName.json();
    return fetchNewUserName;
  } else {
    throw new Error("Echec de la modification du username");
  }
};

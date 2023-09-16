const getUser = async (accessToken) => {
  const response = await fetch("http://localhost:8000/v1/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-cache",
  });

  const data = await response.json();
  return data;
};

export { getUser };

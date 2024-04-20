const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  // console.log(data);
  return data;
};

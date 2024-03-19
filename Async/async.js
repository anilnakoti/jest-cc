const fetchUser = async (id) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const userJson = await fetch(`${url}/${id}`);
  const user = await userJson.json();
  return user;
};

module.exports = fetchUser;

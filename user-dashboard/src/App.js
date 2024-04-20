import './App.css';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

 const getUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  console.log(data);
  return data;
};
getUsers();
  return (
    <div className="App">
    </div>
  );
}

export default App;

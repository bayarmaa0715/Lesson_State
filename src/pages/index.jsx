import Input from "@/components/input";
import UserCard from "@/components/user-card";
import { useState } from "react";

const profiles = [
  {
    id: 1,
    firstName: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    phone: "99011090",
    jobTitle: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    firstName: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    address: "456 Oak St, Springfield, IL",
    phone: "99011091",
    jobTitle: "Project Manager",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    firstName: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    address: "789 Pine St, Springfield, IL",
    phone: "99011092",
    jobTitle: "UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    firstName: "Bob Brown",
    age: 35,
    email: "bob.brown@example.com",
    address: "101 Maple St, Springfield, IL",
    phone: "99011093",
    jobTitle: "Product Owner",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    firstName: "Charlie Davis",
    age: 22,
    email: "charlie.davis@example.com",
    address: "202 Elm St, Springfield, IL",
    phone: "99011094",
    jobTitle: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [position, setPosition] = useState("");
  const [users, setUsers] = useState(profiles);

  const handleChange = (text) => {
    setSearchValue(text);
    const findUser = profiles.filter((user) =>
      user.firstName.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(findUser);
  };

  const handleChangePosition = (text) => {
    setPosition(text);
    const findUser = profiles.filter((user) =>
      user.jobTitle.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(findUser);
  };

  const deleteUser = (userID) => {
    const deletedUser = users.filter((user) => user.id !== userID);
    setUsers(deletedUser);
  };
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl">User find Application</h1>

      <div className="grid gap-3">
        <Input
          handleChange={handleChange}
          handleChangePosition={handleChangePosition}
        />
        <p>Search value:{searchValue}</p>
        <div className=" flex gap-4 justify-evenly">
          <button
            className="border rounded-lg bg-slate-400 px-8"
            onClick={() => {
              setUsers(null);
            }}
          >
            Clear
          </button>
          <button
            className="border rounded-lg bg-slate-400 px-8"
            onClick={() => {
              setUsers(profiles);
            }}
          >
            View
          </button>
        </div>

        {users?.map((user) => {
          return (
            <UserCard
              userImg={user.imageUrl}
              firstName={user.firstName}
              position={user.jobTitle}
              userID={user.id}
              deleteUser={deleteUser}
            />
          );
        })}
        {!users && <p>Хоосон</p>}
      </div>
    </main>
  );
}

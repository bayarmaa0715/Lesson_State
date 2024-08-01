import React from "react";

const UserCard = ({ userImg, firstName, position, userID, deleteUser }) => {
  return (
    <div className="flex justify-between gap-3 p-5 border rounded-xl  items-center">
      <div className="flex gap-3">
        <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
        <div>
          <h1>{firstName}</h1>
          <p>{position}</p>
        </div>
      </div>

      <div>
        <button
          className=" bg-red-300 px-8 py-1 rounded-lg text-gray-100"
          onClick={() => deleteUser(userID)}
        >
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;

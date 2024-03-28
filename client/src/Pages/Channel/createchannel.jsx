import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChannel } from "../../actions/channelUpdate.js";

const CreateChannel = () => {
  const user = useSelector((state) => state.currentUserReducer);

  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      alert("please enter name !");
      return;
    } else if (!desc) {
      alert("Please Enter Description of your channel !");
      return;
    } else {
      console.log("dispatch update channel called with id", user.result._id);
      dispatch(
        updateChannel(user?.result?._id, {
          name: name,
          desc: desc,
        })
      );
    }
  };
  return (
    <div className="pl-60 pr-20 pt-20 text-white flex flex-col items-center gap-10">
      <h1 className="pt-5 text-3xl font-bold text-center">
        Create Your Channel!
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" outline-none px-4 py-2 bg-zinc-800 rounded-md w-64"
          placeholder="Enter Channel Name"
        />
        <textarea
          type="text"
          rows={5}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="bg-zinc-800 rounded-lg w-80 px-4 py-2"
        />
        <button
          type="submit"
          className=" float-right bg-blue-500 rounded-lg py-2 px-4"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateChannel;

import { Button, Label, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className=" py-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 cursor-pointer self-center shadow-md rounded-full overflow-hidden">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
         <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
         <TextInput
          type="password"
          id="password"
          placeholder="password"
        />
        <Button type="submit" gradientDuoTone='purpleToBlue' outline>
            Update
        </Button>
      </form>
      <div className="flex justify-between mt-5">
  <span className="cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-300 font-semibold">
    Delete Account
  </span>
  <span className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300 font-semibold">
    Sign Out
  </span>
</div>

    </div>
  );
};

export default DashProfile;

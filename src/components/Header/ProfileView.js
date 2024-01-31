import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import { Profile } from "./Header.styles"; // Replace with your stylesheet if needed
import { AuthContext } from "@/context/authContext";
import { useContextHook } from "use-context-hook";
import AvatarWomen from "../../../public/avatar-women.png";

const ProfileView = () => {
  const [reload, setReload] = useState(false);

  const { user, onLogout } = useContextHook(AuthContext, ["user", "onLogout"]);
  const router = useRouter();

  useEffect(() => {
    setReload((_) => !_);
  }, [user]);

  return (
    <Profile>
      <button
        className="profile-image"
        type="button"
        onClick={() => {
          router.push("/my-profile");
        }}
      >
        <Image
          className="img"
          src={user?.photoURL ?? AvatarWomen}
          alt="img description"
          height={500}
          width={500}
        />
      </button>
      {/* <button
        className="logout"
        type="button"
        onClick={async () => {
          onLogout();
        }}
      >
        <AiOutlineLogout className="icon" size="20" />
      </button> */}
      {/* <div className="loginDrop">
        <button
          type="button"
          onClick={async () => {
            onLogout();
          }}
        >
          <AiOutlineLogout className="icon" size="25" />
          logout
        </button>
      </div> */}
    </Profile>
  );
};

export default ProfileView;

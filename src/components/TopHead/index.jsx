import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RxShare1 } from "react-icons/rx";
import { HiOutlineHeart } from "react-icons/hi2";
import { TopHeadStyeld } from "./TopHead.styles";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";
import logout from "../../../public/logout.svg";
import Image from "next/image";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";

const TopHead = ({}) => {
  const { onLogout } = useContextHook(AuthContext, ["onLogout"]);

  return (
    <TopHeadStyeld>
      <Link href="/" className="btn-back">
        <HiOutlineArrowNarrowLeft size="20" />
        Back to search
      </Link>
      <ul className="social-list">
        <li>
          <button type="button">
            <RxShare1 size="25" />
            share
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={async () => {
              onLogout();
              document.body.classList.remove("nav-active");
            }}
          >
            <Image src={logout} alt="logout" />
            logout
          </button>
        </li>
      </ul>
    </TopHeadStyeld>
  );
};

export default TopHead;

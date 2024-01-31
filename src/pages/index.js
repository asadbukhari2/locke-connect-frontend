import React from "react";
import { useContextHook } from "use-context-hook";
import Property from "@/components/Property/Property";
import VisualSection from "@/components/VisualSection";
import Peoples from "@/components/Peoples/Peoples";
import { MyContext } from "@/context/card";
import useAuth from "@/helpers/auth";

const Index = () => {
  const isAuthenticated = useAuth();

  const { cardVal, setCardVal } = useContextHook(MyContext, [
    "cardVal",
    "setCardVal",
  ]);

  return (
    <>
      {isAuthenticated && (
        <>
          <VisualSection />
          {cardVal == 1 && <Property />}
          {cardVal == 3 && <Peoples />}
        </>
      )}
    </>
  );
};

export default Index;

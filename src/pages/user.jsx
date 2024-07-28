import React from "react";
import PermittionPage from "./permittions/permittionCreate";
import PermittionDatas from "../components/Fragments/PermittionDatas";

const UserPage = () => {
  return (
    <>
      <h1>User Page</h1>
      <div>
        <PermittionDatas />
      </div>
    </>
  );
};

export default UserPage;

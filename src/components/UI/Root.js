import { Outlet } from "react-router-dom";

import Header from "../NavBarHeader/header";

const RootLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "./Layouts/Layout";
import AppRoutes from "./router/AppRoutes";
import { Blank } from "./layouts/Blank";

function App() {
  const location = useLocation();
  const isAuthPath = location.pathname.includes("auth") || location.pathname.includes("error") || location.pathname.includes("under-maintenance") | location.pathname.includes("blank");
  return (
    <>
      {isAuthPath ? (
        <Blank>
          <AppRoutes />
        </Blank>
      ) : (
        <Layout>
          <AppRoutes />
        </Layout>
      )}
    </>
  );
}

export default App;

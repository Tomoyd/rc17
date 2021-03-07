import Layout from "./Layout";
import React from "react";
// import { Button } from "antd";
import con from "./hello";
const DynamicPage = () => {
  con.add();
  return (
    <Layout>
      <Button>8888</Button>
      <p>This page was loaded asynchronously</p>
    </Layout>
  );
};

export default DynamicPage;

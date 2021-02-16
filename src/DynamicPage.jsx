import Layout from "./Layout";
import React from "react";
import { Button } from "antd";
const DynamicPage = () => {
  return (
    <Layout>
      <Button>8888</Button>
      <p>This page was loaded asynchronously</p>
    </Layout>
  );
};

export default DynamicPage;

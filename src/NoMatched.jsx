import React from "react";
import { Icon } from "semantic-ui-react";
import Layout from "./Layout";
const NoMatched = () => {
  return (
    <Layout>
      <Icon name='minus circle' size='big'>
        NoMatched
      </Icon>
      <strong>Page Not found</strong>
    </Layout>
  );
};

export default NoMatched;

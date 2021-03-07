// import { Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Modal } from "semantic-ui-react";
import Layout from "./Layout";
import Modal from "./Modal";
import { Text } from "@tomoyd/react-ui";

import MyText from "./components/MyText";
import styles from "./Home.less";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <Layout>
      <Text></Text>
      {/* <Button className={styles.button} type='primary'>
        hello button
      </Button> */}
      <MyText className={styles.button}>你好</MyText>
      <p onClick={handleClick}>hello React17 </p>
      <Link to='/dynamic'>Navigate to dynamic</Link>
    </Layout>
  );
};

export default Home;

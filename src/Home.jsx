import { useState } from "react";
import { Link } from "react-router-dom";
// import { Modal } from "semantic-ui-react";
import Layout from "./Layout";
import Modal from "./Modal";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <Layout>
      <Modal onClose={handleClick} visible={visible} />
      <p onClick={handleClick}>hello React17 </p>
      <Link to='/dynamic'>Navigate to dynamic</Link>
    </Layout>
  );
};

export default Home;

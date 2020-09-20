import { Link } from "react-router-dom";
import { Container, Divider, Header, Icon } from "semantic-ui-react";
import { h1, pullRight } from "./Layout.less";
const Layout = ({ children }) => {
  return (
    <Container>
      <Header as='h1' className={h1}>
        webpack-for-react
      </Header>
      <Link to='/'>to Home</Link>
      {children}
      <Divider></Divider>
      <p className={pullRight}>
        Made with <Icon color='red' name='heart' /> by Esau Silva
      </p>
    </Container>
  );
};

export default Layout;

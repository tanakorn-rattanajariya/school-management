import { Layout, Menu, Row, Col } from "antd";
const { Header, Content } = Layout;
export default function WebLayout(props) {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <title>{"Cooking"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <h1 style={{ float: "left" }}>Cooking</h1>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px", float: "right" }}
        >
          <Menu.Item key="1">Popular</Menu.Item>
          <Menu.Item key="3">Favourites</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Row gutter={8}>
          <Col xs={{ span: 0 }} sm={{ span: 1 }} />
          <Col
            style={{ padding: "80px 24px" }}
            xs={{ span: 24 }}
            sm={{ span: 22 }}
          >
            {props.children}
          </Col>
          <Col xs={{ span: 0 }} sm={{ span: 1 }} />
        </Row>
      </Content>
    </Layout>
  );
}

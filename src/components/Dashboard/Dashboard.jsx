import React, { useState } from "react";

import { Button, Modal } from "antd";
import { Avatar, Typography, Row, Col } from "antd";
import Grid from "@material-ui/core/Grid";

import Product from "../Products/Product/Product";
// import { Link, useLocation } from "react-router-dom";
import Demo from "./Demo";

// antd demo
import { Layout, Menu } from "antd";
import {
  // DesktopOutlined,
  // FileOutlined,
  // TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
  MenuOutlined,
  StarOutlined,
  // QuestionCircleOutlined,
  LoginOutlined,
  // AreaChartOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

function Dashboard({ products, onAddToCart, ...props }) {
  const [collapsed, setCollapsed] = useState(true);
  // const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // for editable placeholder
  const { Paragraph } = Typography;
  const [editableStr, setEditableStr] = useState(" Edit Full Name ");
  const [editableEmail, setEditableEmail] = useState(" Edit E-mail ");
  const [editablePh, setEditablePh] = useState(" Edit Phone Number ");

  return (
    <div className="main-wrapper">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          onMouseOver={() => {
            setCollapsed(false);
          }}
          onMouseOut={() => {
            setCollapsed(true);
          }}
        >
          <div className="logo" />
          {/* <div
            style={{
              color: "white",
              fontSize: "40px",
              marginLeft: "10px",

              width: "15px",
            }}
          >
            Haldiram's
          </div>  */}

          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            // style={{ position: "relative" }}
          >
            {/* prev code 1 - start */}
            {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1

            </Menu.Item> */}

            {/* prev code - end  */}

            {/* DASHBOARD SECTION */}

            <Menu.Item
              key="1"
              icon={<AppstoreOutlined style={{ fontSize: "18px" }} />}
              style={{ fontSize: "15px" }}
            >
              Dashboard
            </Menu.Item>
            <br />

            {/* PROFILE SECTION */}
            <Menu.Item
              key="2"
              icon={
                <Avatar
                  style={{ fontSize: "18px" }}
                  icon={
                    <UserOutlined
                      style={{ fontSize: "15px", paddingLeft: "3px" }}
                    />
                  }
                  onClick={showModal}
                />
              }
              style={{ fontSize: "18px", paddingLeft: "22px" }}
            >
              <Modal
                title="FeedBack"
                visible={isModalVisible1}
                onOk={() => {
                  setIsModalVisible1(false);
                }}
                onCancel={() => {
                  setIsModalVisible1(false);
                }}
              >
                <Demo></Demo>
              </Modal>
              <Modal
                title="Edit Profile"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                  <Button type="primary" onClick={handleOk}>
                    Submit
                  </Button>,
                ]}
              >
                <Row>
                  {/* Name  section inside the user details  */}
                  <Col
                    span={6}
                    style={{ textAlign: "right", paddingRight: "15px" }}
                  >
                    Name :
                  </Col>
                  <Col span={18}>
                    <Paragraph editable={{ onChange: setEditableStr }}>
                      {editableStr}
                    </Paragraph>
                  </Col>

                  {/*Email section inside the user details  */}
                  <Col
                    span={6}
                    style={{ textAlign: "right", paddingRight: "15px" }}
                  >
                    E-mail :
                  </Col>
                  <Col span={18}>
                    <Paragraph editable={{ onChange: setEditableEmail }}>
                      {editableEmail}
                    </Paragraph>
                  </Col>

                  {/* Phone number section inside the user details  */}
                  <Col
                    span={6}
                    style={{ textAlign: "right", paddingRight: "15px" }}
                  >
                    Phone :
                  </Col>
                  <Col span={18}>
                    <Paragraph editable={{ onChange: setEditablePh }}>
                      {editablePh}
                    </Paragraph>
                  </Col>
                </Row>
              </Modal>
              Profile
            </Menu.Item>
            <br />

            {/* here menu item 2 is completed  and menu item 3 is started form here */}

            {/* MENU SECTION */}
            <SubMenu
              key="sub1"
              icon={
                <MenuOutlined
                  style={{ fontSize: "18px", paddingRight: "15px" }}
                />
              }
              title="Menu"
            >
              <Menu.Item key="4">Bakery</Menu.Item>
              <Menu.Item key="5">Lunch</Menu.Item>
              <Menu.Item key="6">Dinner</Menu.Item>
              <Menu.Item key="7">Drinks</Menu.Item>
              <Menu.Item key="8">Ice Creams </Menu.Item>
            </SubMenu>
            <br />

            {/* SPECIAL - MENU SECTION */}
            <SubMenu
              key="sub2"
              icon={
                <StarOutlined
                  style={{ fontSize: "18px", paddingRight: "10px" }}
                />
              }
              style={{ fontSize: "15px" }}
              title="Our Special"
            >
              <Menu.Item key="9">Dish 1</Menu.Item>
              <Menu.Item key="10">Dish 2</Menu.Item>
            </SubMenu>
            <br />

            {/* GALLERY SECTION */}

            {/* <Menu.Item
              key="11"
              icon={
                <AreaChartOutlined
                  style={{ fontSize: "18px", paddingRight: "15px" }}
                />
              }
              style={{ fontSize: "15px" }}
            >
              Gallery
            </Menu.Item> */}
            <br />

            {/* FAQ SECTION */}
            {/* <Menu.Item
              key="12"
              icon={
                <QuestionCircleOutlined
                  style={{ fontSize: "18px", paddingRight: "15px" }}
                  to={{ pathname: "https://chat-web-app-681fc.web.app/" }}
                  target="_blank"
                  color="inherit"
                  component={Link}
                />
              }
              style={{ fontSize: "15px" }}
            >
              FAQ
            </Menu.Item> */}
            <br />

            {/* Feedback SECTION */}
            <Menu.Item
              key="13"
              icon={
                <MessageOutlined
                  style={{ fontSize: "18px", paddingRight: "15px" }}
                />
              }
              style={{ fontSize: "15px" }}
              onClick={showModal1}
            >
              Feedback
            </Menu.Item>
            <br />

            {/* LOGOUT SECTION */}
            <Menu.Item
              key="14"
              icon={
                <LoginOutlined
                  style={{ fontSize: "18px", paddingRight: "15px" }}
                />
              }
              style={{ fontSize: "15px" }}
            >
              LogOut
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Grid container justify="center" spacing={4}>
                {products.map((product) => {
                  console.log(product);
                  return (
                    <>
                      <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>D2H Since 2021</Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;

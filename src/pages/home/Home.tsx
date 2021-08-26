import React, { FC, useState } from "react";
import RenderRouter from "router/RenderRouter";
import { IRouterConfig } from "./home-interface";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { MenuInfo } from "rc-menu/lib/interface";
import styles from "./home.scss";

const { Header, Sider, Content } = Layout;

const Home: FC<IRouterConfig> = ({ routes }) => {
  const [collapse, setCollapse] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>();

  function handleClickMenu(menuInfo: MenuInfo): void {
    setSelectedKeys([(menuInfo.key as string)]);
  }
  return (
    <Layout className={styles.home}>
      <Sider trigger={null} collapsible collapsed={collapse}>

        <div className={styles.home__logo} />

        <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} onClick={handleClickMenu}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className={styles.home__container}>
        <Header className={styles["home__container--header"]}>
          {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: () => setCollapse(!collapse),
          })}
        </Header>
        <Content
          className={styles["home__container--content"]}
        >
          Content
        </Content>
      </Layout>
      {/* 渲染页面 */}
      {
        routes && <RenderRouter routes={routes} />
      }
    </Layout>
  );
};
export default Home;

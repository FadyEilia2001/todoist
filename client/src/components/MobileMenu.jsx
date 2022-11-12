import React from "react";
import { Button, Modal } from "antd";
import { useAppContext } from "../context/appContext";

const MobileMenu = () => {
  const { toggleMobileMenu, mobilMenuDisplay } = useAppContext();
  return (
    <div>
      <Modal
        title={<h2>Menu</h2>}
        open={mobilMenuDisplay}
        onOk={toggleMobileMenu}
        onCancel={toggleMobileMenu}
        okText=""
        cancelText="Close"
        bodyStyle={{ color: "red" }}
        mask={true}
        keyboard={true}
        footer={null}
      >
        <p className="">Home</p>
        <p>Templates</p>
        <p>Pricing</p>
        <p>Login</p>
        <p>Start for Free</p>
      </Modal>
      <h2>testing modal menu</h2>
    </div>
  );
};

export default MobileMenu;

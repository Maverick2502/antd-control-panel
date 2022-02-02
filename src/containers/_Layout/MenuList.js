import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MenuListView } from "../../components/_Layout";

export function MenuList() {
  const collapsed = useSelector(({ layout }) => layout.showMenu);
  const { push, location } = useHistory();

  const handlePush = ({ key }) => {
    push(key);
  };

  // RENDER
  return <MenuListView collapsed={collapsed} handlePush={handlePush} location={location} />;
}

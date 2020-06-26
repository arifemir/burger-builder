import React from 'react';
import Logo from "../../UI/Logo/Logo";

const DrawerToggle = (props) => {
  return (
    <Logo click={props.click} height={props.height} />
  );
};

export default DrawerToggle;

import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = ({}) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1>This is the page header</h1>
    </header>
  );
};

export default Header;

const useStyles = createUseStyles({
  header: {
    height: 90,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

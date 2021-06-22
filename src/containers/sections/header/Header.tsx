import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";

interface HeaderProps {
  headerText: string;
}

const Header: FunctionComponent<HeaderProps> = ({ headerText }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1 className={classes.headerText}>{headerText}</h1>
    </header>
  );
};

const useStyles = createUseStyles({
  header: {
    height: 125,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none",
  },
  headerText: {
    fontFamily: "Permanent Marker, cursive",
    fontSize: "3rem",
    color: "#202020",
  },
  "@media screen and (max-width: 780px)": {
    header: {
      height: 210,
    },
  },
});

export default Header;

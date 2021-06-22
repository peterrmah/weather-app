import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";

interface ButtonProps {
  clickHandler: Function;
  buttonLabel: string;
  iconPath: string;
  iconName: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  clickHandler,
  buttonLabel,
  iconPath,
  iconName,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.button} onClick={() => clickHandler()}>
      <p className={classes.label}>{buttonLabel}</p>
      <img className={classes.icon} src={iconPath} alt={iconName} />
    </div>
  );
};

const useStyles = createUseStyles({
  button: {
    background: "#56565630",
    borderRadius: "10px",
    height: "100%",
    padding: 5,
    cursor: "pointer",
    color: "white",
    textAlign: "center",
    fontFamily: "Josefin Sans, sans-serif",
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 16%), 0 6px 20px 0 rgb(0 0 0 / 10%)",
    "&:hover": {
      boxShadow: "0 6px 12px 0 rgb(0 0 0 / 5%), 0 12px 27px 0 rgb(0 0 0 / 5%)",
    },
  },
  label: {
    margin: "10px auto",
  },
  icon: {
    margin: "7px auto",
    height: "60px",
    width: "60px",
  },
});

export default Button;

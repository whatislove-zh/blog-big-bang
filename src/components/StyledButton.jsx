import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const CustomButton = styled(Button)({
  background: "#F4E041",
  border: "none",
  borderRadius: "80px",
  color: "rgba(0, 0, 0, 0.87)",
  minWidth: "100px",
  height: "34px",
  marginLeft: "10px",
  fontSize: "16px",
  "&:hover": {
    background: "#FFE302",
  },
  "&.Mui-disabled": {
    background: "#B4B4B4",
    color: "#ffffff",
  },
});

export const StyledButton = (props) => {
    const {title} = props
  return <CustomButton>{title}</CustomButton>;
};
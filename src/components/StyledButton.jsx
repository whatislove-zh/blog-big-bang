import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const CustomButton = styled(Button)({
  background: "linear-gradient(90deg, rgba(57,254,255,1) 0%, rgba(255,0,241,1) 100%)",
  border: "none",
  borderRadius: "80px",
  color: "rgba(0, 0, 0, 0.87)",
  minWidth: "100px",
  height: "34px",
  marginLeft: "10px",
  fontSize: "16px",
  "&:hover": {
    background: "linear-gradient(90deg, rgba(44,187,187,1) 0%, rgba(194,1,183,1) 100%)",
  },
  "&.Mui-disabled": {
    background: "#B4B4B4",
    color: "#ffffff",
  },
});

export const StyledButton = (props) => {
    const {title, sx, type} = props
  return <CustomButton type={type} sx={sx}>{title}</CustomButton>;
};

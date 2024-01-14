import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../Utils/Constant.jsx";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((ele, index) => {
        return (
          <button
            key={index}
            className="category-btn"
            style={{
              backgroundColor:
                ele.name === selectedCategory ? "red" : "white",
                color:
                ele.name === selectedCategory?"white":'black'
            }}
            onClick={() => setSelectedCategory(ele.name)}
          >
            <span
              style={{
                color: ele.name === selectedCategory ? "white" : "red",
                marginRight: "25px",
              }}
            >
              {ele.icon}
            </span>
            <span
              style={{
                opacity: ele.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {ele.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;

import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../Utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videos,setvideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>setvideos(data.items))
  }, [selectedCategory]);
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid gray",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          Copyright@ Raushan Kushwaha
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflow: "auto",
          height: "90vh",
          flex: 2,
          backgroundColor: "black",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "white", ml: 2 }}
        >
          {selectedCategory} <span style={{ color: "red" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;

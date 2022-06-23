import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if(search) {
        const exerciseData = await fetchData()
        ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        console.log(exerciseData);
    }
  }
 
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              frontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },

            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
      </Box>
      <Button
        className="search-btn"
        sx={{
          bgcolor: "#FF2625",
          color: "#fff",
          textTransform: "none",
          width: { lg: "175px", xs: "80px" },
          fontSize: { lg: "20px", xs: "14px" },
          height: "56px",
          position: "right",
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchExercises;

import { CircularProgress, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { useGetPokemonByNameQuery } from "../radex/pokemon";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
const Home = () => {
  const drawerWidth = 240;
  const { data, isLoading } = useGetPokemonByNameQuery();

  if (isLoading) {
    return (
      <Stack
        mt={10}
        sx={{
          marginLeft: `${drawerWidth}px`,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Stack>
    );
  }
  if (data) {
    return (
      <Stack
        mt={10}
        sx={{
          marginLeft: `${drawerWidth}px`,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{ maxWidth: 300, margin: "20px", height: "360px" }}
            >
              <CardMedia
                component="img"
                height="220"
                image={item.imageLink}
                alt="Paella dish"
              />

              <CardContent>
                <Typography dir='auto' variant="body2" className="section">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Link to={item.Websitelink}>
                  <IconButton>
                    <RemoveRedEyeIcon />
                  </IconButton>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </Stack>
    );
  }
};

export default Home;

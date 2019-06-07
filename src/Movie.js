import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 400
  },
  media: {
    height: 140
  }
});
const Movie = ({ movie }) => {
  const classes = useStyles();
  return (
    <div className="movie">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
                      image="https://yorkpbnews.net/wp-content/uploads/2017/09/Toyogeki-Movie_Toyooka002.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, w hen an unknown
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            view movie
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default Movie;

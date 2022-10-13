import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Media from "./Media";
import Form from "./Form";

const MainCard = () => {
  return (
    <Card sx={{ maxWidth: " min(90%,40rem)" }}>
      <CardHeader
        title="CONTÁCTANOS"
        titleTypographyProps={{
          color: "#fff",
          fontWeight: "bold",
        }}
        action={
          <IconButton aria-label="settings">
            <CloseIcon />
          </IconButton>
        }
      ></CardHeader>
      <div className="card-body">
        <CardMedia>
          <Media />
        </CardMedia>
        <CardContent>
          <Form />
        </CardContent>
      </div>
    </Card>
  );
};

export default MainCard;

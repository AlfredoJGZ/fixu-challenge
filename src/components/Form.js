import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const Form = () => {
  return (
    <form>
      <TextField type="text" label="Nombre" variant="standard" />
      <TextField type="text" label="Apellido" variant="standard" />
      <TextField type="email" label="Email" variant="standard" />
      <TextField type="tel" label="Telefono (+519...)" variant="standard" />
      <TextField type="text" label="RUC" variant="standard" />
      <FormControlLabel
        className="checkbox"
        control={<Checkbox />}
        label={
          <p>
            Aceptar <a href="/#">terminos y condiciones</a>
          </p>
        }
      />
      <Button className="contact-btn" variant="contained">
        CONTÁCTANOS
      </Button>
    </form>
  );
};

export default Form;

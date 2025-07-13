import {
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./ContactUs.module.scss";

const services = [
  "MongoDB",
  "Sybase ASE Support",
  "PostgreSQL",
  "SQL Database Management",
  "DB2 Database Support",
];

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup.string().required("Contact is required"),
  services: yup.array().min(1, "Select at least one service"),
  message: yup.string().required("Project description is required"),
});

export const ContactUs = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      services: [],
      message: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission logic here
  };

  const style = {
    "&:hover fieldset": {
      borderColor: "#7d47ef" + "!important",
    },
    "&:focus fieldset": {
      borderColor: "#7d47ef" + "!important",
    },
    "&:active fieldset": {
      borderColor: "#7d47ef" + "!important",
    },
  };

  return (
    <section className={styles.contactSection}>
      <div className="wrapper">
        <Grid container spacing={4} style={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }} className={styles.leftCol}>
            <h2>Let's Talk</h2>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  label="Name"
                  fullWidth
                  margin="normal"
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  sx={style}
                />
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={style}
                />
                <TextField
                  label="Contact"
                  fullWidth
                  margin="normal"
                  {...register("contact")}
                  error={!!errors.contact}
                  helperText={errors.contact?.message}
                  sx={style}
                />

                <p className={styles.serviceLabel}>Select your Service:</p>
                {services.map((service) => (
                  <FormControlLabel
                    key={service}
                    control={
                      <Controller
                        name="services"
                        control={control}
                        render={({ field }) => (
                          <Checkbox
                            checked={
                              field && (field.value ?? []).includes(service)
                            }
                            onChange={(e) => {
                              const newServices = e.target.checked
                                ? [...(field.value ?? []), service]
                                : (field.value ?? []).filter(
                                    (s) => s !== service
                                  );
                              field.onChange(newServices);
                            }}
                          />
                        )}
                      />
                    }
                    label={service}
                  />
                ))}
                {errors.services && (
                  <Typography color="error">
                    {errors.services.message}
                  </Typography>
                )}

                <TextField
                  label="Tell us about your project"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  {...register("message")}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  sx={style}
                />

                <button type="submit" className="button button--primary">
                  Send Message
                </button>
              </form>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className={styles.rightCol}>
            <div className={styles.textContainer}>
              <h5>Price That Fits</h5>
              <p>
                Flexible pricing options that are designed to fit your budget
                and needs.
              </p>
            </div>
            <div className={styles.textContainer}>
              <h5>Trusted Team</h5>
              <p>
                Our team of experts is dedicated to providing you with the best
                service possible.
              </p>
            </div>
            <div className={styles.textContainer}>
              <h5>10+ Years of work Experience</h5>
              <p>
                Our skills and experience are intended to instill confidence in
                potential clients regarding the quality of service we can
                provide.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

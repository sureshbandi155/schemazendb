import { Grid } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import DataBaseIcon from "src/assets/icons/database_white.png";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="wrapper">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <div className={styles.headerLogo}>
              <img src={DataBaseIcon} alt="Database Icon" />
              <h5>SchemaZenDB</h5>
            </div>
            <div className={styles.socialShare}>
              <p>Follow us on social media:</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </a>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <h6>Company</h6>
            <Link to="/contact">Contact Us</Link>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <h6>Get in Touch</h6>
            <div className={styles.contactInfo}>
              <EmailIcon />
              <a href="mailto:itservices@schemazendb.com">
                itservices@schemazendb.com
              </a>
            </div>
            <div className={styles.contactInfo}>
              <PhoneIcon />
              <a href="tel:tel:+91966282429">+91-966282429</a>
            </div>
            <div className={styles.contactInfo}>
              <LocationOnIcon />
              <a
                href="https://www.google.com/maps?q=your+location"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bangalore, Karnataka - India, 560001
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
};

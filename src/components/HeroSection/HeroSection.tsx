import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import HeroImage from "../../assets/images/Banner_1.png";
import MongoDB from "../../assets/icons/mongodb-icon.svg";
import Sybase from "../../assets/icons/Sybase.png";
import PostGre from "../../assets/icons/postgre.png"; // Your hero graphic
import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className="wrapper">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <div className={styles.heroText}>
              <h2>Your go-to solution for database schema management.</h2>
              <p>
                Connect and scale with Schemazendb — your unified gateway to
                modern databases like MongoDB, PostgreSQL, Sybase, and more.
              </p>
              <Link to="/contact" className="button button--primary">
                Get Started
              </Link>
              <div className={styles.cardsContainer}>
                <h6>Our goto services:</h6>
                <Grid container>
                  <Grid size={{ xs: 12, md: 3 }} className={styles.card}>
                    <img src={MongoDB} alt="MongoDb" />
                    <h6>MongoDB</h6>
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }} className={styles.card}>
                    <img src={Sybase} alt="Sybase" />
                    <h6>Sybase</h6>
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }} className={styles.card}>
                    <img src={PostGre} alt="PostgreSQL" />
                    <h6>PostgreSQL </h6>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            className={styles.heroImage}
            style={{
              background: `url(${HeroImage}) no-repeat center center / cover`,
            }}
          ></Grid>
        </Grid>
      </div>
    </div>
  );
};

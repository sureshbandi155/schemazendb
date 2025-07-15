import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import DataBaseIcon from "src/assets/icons/database.png";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerSection}>
      <div className={styles.mainheader}>
        <div className="wrapper">
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid size={4}>
              <div className={styles.headerLogo}>
                <img src={DataBaseIcon} alt="Database Icon" />
                <h5>
                  <Link to="/schemazendb">SchemaZenDB</Link>
                </h5>
              </div>
            </Grid>
            <Grid size={8} className={styles.headerActions}>
              <Link to="/contact" className="button button--primary">
                Contact Us
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </header>
  );
};

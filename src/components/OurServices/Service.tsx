import {
  Accordion,
  Grid,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

import styles from "./OurServices.module.scss";

interface IServiceProps {
  title: string;
  icon: string;
  description: string;
  questionAndAnswers: { question: string; answer: string }[];
}
export const Service = ({
  title,
  icon,
  description,
  questionAndAnswers,
}: IServiceProps) => {
  return (
    <Grid size={{ xs: 12, md: 6 }} className={styles.card}>
      <div className={styles.title}>
        <h2>
          {title}
          <img src={icon} alt={title} />
        </h2>

        <p>{description}</p>
      </div>
      {questionAndAnswers.map((qa, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <h6 className="bold">{qa.question}</h6>
          </AccordionSummary>
          <AccordionDetails>
            <p>{qa.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
      <div className={styles.buttonContainer}>
        <Link to="/contact" className="button button--primary">
          Get Estimate
        </Link>
      </div>
    </Grid>
  );
};

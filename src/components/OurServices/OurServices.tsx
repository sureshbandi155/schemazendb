import { Grid } from "@mui/material";

import MongoDB from "../../assets/icons/mongodb-icon.svg";
import Sybase from "../../assets/icons/Sybase.png";
import PostGre from "../../assets/icons/postgre.png";
import SQLDB from "../../assets/icons/sql-database.svg";
import DB2 from "../../assets/icons/Ibm-Db2.svg";

import { Service } from "./Service";

import styles from "./OurServices.module.scss";

export const OurServices = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="wrapper">
        <h6 className={styles.subTitle}>
          Our Database Development and Support Services:
        </h6>
        <Grid
          container
          className={styles.twoColGrid}
          spacing={{ xs: 6, md: 13, lg: 13 }}
        >
          <Service
            title="MongoDB Administration"
            icon={MongoDB}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui."
            questionAndAnswers={[
              {
                question: "What is MongoDB?",
                answer:
                  "MongoDB is a NoSQL database that uses a document-oriented data model.",
              },
              {
                question: "What are the benefits of using MongoDB?",
                answer:
                  "MongoDB offers high scalability, flexibility, and performance for handling large volumes of data.",
              },
              {
                question: "How does MongoDB handle data consistency?",
                answer:
                  "MongoDB uses a flexible schema and supports eventual consistency, allowing for high availability and partition tolerance.",
              },
              {
                question: "What is the role of indexes in MongoDB?",
                answer:
                  "Indexes in MongoDB improve query performance by allowing faster data retrieval based on specific fields.",
              },
            ]}
          />
          <Service
            title="Sybase ASE Support"
            icon={Sybase}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui."
            questionAndAnswers={[
              {
                question: "What is Sybase ASE?",
                answer:
                  "Sybase Adaptive Server Enterprise (ASE) is a relational database management system (RDBMS) developed by Sybase.",
              },
              {
                question: "What are the key features of Sybase ASE?",
                answer:
                  "Sybase ASE offers high performance, scalability, and support for complex transactions.",
              },
              {
                question: "How does Sybase ASE ensure data integrity?",
                answer:
                  "Sybase ASE uses locking mechanisms and transaction logs to maintain data integrity.",
              },
              {
                question:
                  "What is the role of stored procedures in Sybase ASE?",
                answer:
                  "Stored procedures in Sybase ASE allow for the encapsulation of business logic and can improve performance by reducing network traffic.",
              },
            ]}
          />
          <Service
            title="PostgreSQL Development"
            icon={PostGre}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui."
            questionAndAnswers={[
              {
                question: "What is PostgreSQL?",
                answer:
                  "PostgreSQL is an open-source relational database management system known for its advanced features and extensibility.",
              },
              {
                question: "What are the advantages of using PostgreSQL?",
                answer:
                  "PostgreSQL offers strong data integrity, support for complex queries, and a wide range of data types.",
              },
              {
                question: "How does PostgreSQL handle concurrency?",
                answer:
                  "PostgreSQL uses Multi-Version Concurrency Control (MVCC) to handle concurrent transactions without locking the database.",
              },
              {
                question: "What is the role of extensions in PostgreSQL?",
                answer:
                  "Extensions in PostgreSQL allow users to add new functionalities, such as additional data types or indexing methods.",
              },
            ]}
          />
          <Service
            title="SQL Database Management"
            icon={SQLDB}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui."
            questionAndAnswers={[
              {
                question: "What is SQL Database Management?",
                answer:
                  "SQL Database Management involves the administration and optimization of relational databases using SQL.",
              },
              {
                question: "What are the common SQL database systems?",
                answer:
                  "Common SQL database systems include MySQL, PostgreSQL, Microsoft SQL Server, and Oracle Database.",
              },
              {
                question: "How do you ensure data security in SQL databases?",
                answer:
                  "Data security in SQL databases can be ensured through user authentication, access controls, and encryption.",
              },
              {
                question: "What is normalization in SQL databases?",
                answer:
                  "Normalization is the process of organizing data to reduce redundancy and improve data integrity in SQL databases.",
              },
            ]}
          />
          <Service
            title="DB2 Database Support"
            icon={DB2}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui."
            questionAndAnswers={[
              {
                question: "What is DB2?",
                answer:
                  "DB2 is a family of data management products, including database servers, developed by IBM.",
              },
              {
                question: "What are the advantages of using DB2?",
                answer:
                  "DB2 offers high performance, scalability, and advanced analytics capabilities.",
              },
              {
                question: "How does DB2 handle large datasets?",
                answer:
                  "DB2 uses partitioning and parallel processing to efficiently manage large datasets.",
              },
              {
                question: "What is the role of SQL in DB2?",
                answer:
                  "SQL is used in DB2 for querying and manipulating data within the database.",
              },
            ]}
          />
        </Grid>
      </div>
    </section>
  );
};

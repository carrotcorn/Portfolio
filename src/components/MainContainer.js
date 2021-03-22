import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import Card from "./Card/Card.js";
import CardBody from "./Card/CardBody.js";
import Button from "./Button.js";

import styles from "../styles/MainContainerStyle";

const useStyles = makeStyles(styles);

export default function MainContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Projects</h2>
          <h5 className={classes.description}>
          dsafdsafdsafdsa
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card style={{ width: "20rem" }}>
              <img
                style={{
                  height: "180px",
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
                className={classes.picture}
                src='#'
                alt='yep'
              />

              <CardBody>
                <h4>fdasfs</h4>
                <p>fdsafdsa</p>

                <Button color='success' href='#'>
                  See Ad
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

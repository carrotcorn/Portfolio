/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "./CustomDropdown.js";
import Button from "./Button.js";

import "../App.css";

import styles from "../styles/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText='Other Sites'
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a
              href='https://github.com/carrotcorn'
              target='_blank'
              className={classes.dropdownLink}
            >
              GitHub
            </a>,
            <a
              href='https://www.linkedin.com/in/eric-bourne'
              target='_blank'
              className={classes.dropdownLink}
            >
              LinkedIn
            </a>,
            <a
              href='https://ericbourne.bandcamp.com/'
              target='_blank'
              className={classes.dropdownLink}
            >
              BandCamp
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color='transparent' target='_blank' className={classes.navLink}>
          <CloudDownload className={classes.icons} />
          <a
            className='download'
            target='_blank'
            href={require("../EricBourneResume.pdf")}
            download
          >
            Download Resume
          </a>
        </Button>
      </ListItem>
    </List>
  );
}

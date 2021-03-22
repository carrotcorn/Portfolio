import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import RadioIcon from "@material-ui/icons/Radio";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import TheatersIcon from "@material-ui/icons/Theaters";
// core components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "./components/GridContainer.js";
import GridItem from "./components/GridItem.js";
import HeaderLinks from "./components/HeaderLinks.js";
import NavPills from "./components/NavPills.js";
import Jumbotron from "./components/Jumbotron.js";

import "./App.css";

import styles from "./styles/homePageStyles.js";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color='white'
        brand='Eric Bourne'
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Jumbotron small filter image={require("./img/aloneInWater.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={require("./img/GoodGitHub.jpg")}
                      alt='HeadShot'
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>About Me</h3>
                    <h6>FULL-STACK WEB DEVELOPER</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                I am a tenacious full-stack web developer who has a specialty in
                MERN stack applications. I graduated from The British Columbia
                Institute of Technology's Software Systems Development program
                with distinction in May of 2020. Along with MERN, I have
                experience with TypeScript, C#, Java, Mocha/Chai, SQL, ASP.NET
                MVC, Angular, Docker,Digital Ocean, Azure, AWS, and Heroku.
                Currently, I am working on my passion project website{" "}
                <a className='sonar' href='http://www.sonarmusic.social/'>
                  sonarmusic.social
                </a>
                .
              </p>
              <p>
                I have many hobbies. My favourites are playing drums and guitar,
                mountain biking, road cycling, snowboarding and fishing. I
                absolutely love the outdoors and I used every chance get to
                either code or enjoy one of my hobbies.
              </p>
            </div>
            <GridContainer justify='center'>
              <div>
                <h6 className='projTitle'>PROJECTS</h6>
              </div>
            </GridContainer>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color='primary'
                  tabs={[
                    {
                      tabButton: "Sonar Music",
                      tabIcon: RadioIcon,
                      tabContent: (
                        <GridContainer justify='center'>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt='...'
                              src={require("./img/sonar1.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/sonar2.png")}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt='...'
                              src={require("./img/sonar4.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/sonar5.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/sonar3.png")}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem className='gridDescription'>
                            <p>
                              Passion project working with a fellow BCIT
                              graduate Lucas Johnson, building a music social
                              network that allows musicians to connect and meet
                              up to jam and play gigs. Users can filter
                              classifieds based on type, such as buy/sell,
                              looking for musicians/band, along with other
                              filters like price, a users years of experience.
                              Users can also rate other users based on their
                              professionalism. This is just phase one of our
                              deployment and this will be an ongoing project for
                              the years to come. This is a dockerized MERN stack
                              application with Lucas and I splitting the work in
                              half.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Movie Database Search",
                      tabIcon: TheatersIcon,
                      tabContent: (
                        <GridContainer justify='center'>
                          <GridItem>
                            <img
                              alt='...'
                              src={require("./img/movie-db.gif")}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem className='gridDescription'>
                            <p>
                              This is a single page web applicaton done for
                              educational purposes utilizing the React framework
                              and Bootstrap styling. This web application allows
                              users to Search The Movie Database API and filter
                              their results by genre, year, popularity, and
                              ratings. Users can also save movies to their
                              favourites along with rate movies out of 5 stars.
                              Search results display all information regarding
                              the movie from the movie database API such as the
                              title, poster, rating, plot, and release date.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Porton Health",
                      tabIcon: LocalHospitalIcon,
                      tabContent: (
                        <GridContainer justify='center'>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt='...'
                              src={require("./img/porton1.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/porton2.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/porton3.png")}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt='...'
                              src={require("./img/porton4.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/porton5.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/porton6.png")}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem className='gridDescription'>
                            <p>
                              Industry group project done in conjunction with
                              Porton Health to make a kiosk check-in application
                              that allows for patients to check in. Built with a
                              Node.js backend utilizing Egg, a Koa framework,
                              with a React frontend and material-ui components.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Recipe Search",
                      tabIcon: FastfoodIcon,
                      tabContent: (
                        <GridContainer justify='center'>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt='...'
                              src={require("./img/recipeDemo.gif")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/recipe4.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/recipe5.png")}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt='...'
                              src={require("./img/recipe1.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/recipe3.png")}
                              className={navImageClasses}
                            />
                            <img
                              alt='...'
                              src={require("./img/recipe2.png")}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem className='gridDescription'>
                            <p>
                              BCIT group project with a React frontend and a
                              .NET backend. Simple recipe search application
                              that uses the Edemam recipe API. This application
                              also has the ability to register users and save
                              their own recipes and keep them within a list upon
                              logging in.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ); // done
}

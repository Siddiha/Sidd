import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const SkillList = () => {  // Fixed: Changed from JobList to SkillList
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Languages: {
      jobTitle: "Programming Languages @",  // Fixed: Added proper title
      duration: "", // Added duration field for consistency
      desc: [
        "Java",
        "Python", 
        "C++",
        "Javascript",
        "Typescript",
        "Html",
        "CSS",
        "C"
      ]
    },
    Frameworks: {
      jobTitle: "Frameworks & Libraries @",  // Fixed: Added proper title
      duration: "", 
      desc: [
        "React.js",
        "Node.js", 
        "Express.js",
        "Vue.js",
        "Bootstrap",
        "Tailwind CSS"
      ]
    },
    "Tools": {
      jobTitle: "Development Tools @",  // Fixed: Added proper title
      duration: "", 
      desc: [
        "Git",
        "Github",
        "Docker", 
        "Figma",
        "Framer",
        "Godot",
        "VS Code"
      ]
    },
    platforms: {
      jobTitle: "Cloud & Platforms @",  // Fixed: Added proper title
      duration: "", 
      desc: [
        "Google Cloud Platform",
        "AWS",
        "Heroku", 
        "Netlify",
        "Vercel"
      ]
    },
    "Databases": {
      jobTitle: "Database Technologies @",  // Fixed: Added proper title
      duration: "", 
      desc: [
        "SQL",
        "MongoDB",
        "PostgreSQL",
        "MySQL"
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} key={i} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`} key={i}>
                  <li>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default SkillList; 
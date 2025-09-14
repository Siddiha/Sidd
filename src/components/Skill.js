import React from "react";
import SkillList from "./SkillList";
import "../styles/Skills.css";
import FadeInSection from "./FadeInSection";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="skills">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/Skills</span>
          </div>
          <SkillList></SkillList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am a deeply curious and motivated individual with a profound interest in the frontiers of technology
       I am a passionate student with a deep love for technology, especially the world of Large Language Models (LLMs),
        Artificial Intelligence (AI), and Machine Learning (ML).
        I spend my time exploring, experimenting, and learning about these fascinating fields.
      </p>
    );
    const two = (
      <p>
         Outside of my studies, I have a creative and active side. I love expressing myself through arts 
         and crafts and staying active by playing netball. 
         I also enjoy keeping up with the latest in science and technology and diving into video games.
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Python",
      "React.js",
      "Java",
      "Javascript ES6+",
      "C++"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Siddiha" src={"/assets/Sidd.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

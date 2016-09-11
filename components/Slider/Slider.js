import React, {PropTypes} from 'react';
import prefix from 'react-prefixer';
import s from './Slider.css';
import ProjectCard from '../ProjectCard/ProjectCard.js';
import {title, html} from './slider.md';
import HorizontalScroll from 'react-scroll-horizontal';

class Slider extends React.Component {
  static propTypes = {
    slides: PropTypes.object
  }
  render() {
    const projects = Object.values(this.props.slides).sort((a, b) => a.order - b.order);
    const renderSlides = projects.map((project, i) => <ProjectCard project={project} className={s['project-card']} key={i} {...this.props} />);
    const renderScrollArea = !this.props.isMobile && this.props.windowWidth > 768 ? (
      <HorizontalScroll reverseScroll={true} pageLock={true}>
        {renderSlides}
      </HorizontalScroll>
    ) : (
      <div className="scroll-horizontal">
        {renderSlides}
      </div>
    )
    return (
      <div>
        <div className="container">
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{
            __html: html
          }}/>
        </div>
        <div className={s.slider}>
          {renderScrollArea}
        </div>
      </div>
    )
  }
}

export default Slider;

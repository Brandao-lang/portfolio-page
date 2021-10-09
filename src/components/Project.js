import React from 'react'
import '../styles/projects.css'
import {projectData} from '../local-data/project-data'

export default function Project () {
    return (
        <div className='projects-container'>
          <h2 id='to-projects'>Projects</h2>
          <div className='project-list'>
            {projectData.map((project, index) => {
                return (
                <div data-aos='fade-up' key ={index} className='slide'>
                  <h2>{project.title}</h2>
                  <p style={{paddingLeft: '15px'}}>{project.description}</p>
                  <a href={project.github} target='_blank' rel="noreferrer"><button className='git-icon'>GitHub</button></a>
                  <a href={project.demo} target='_blank' rel="noreferrer"><button className='demo-icon'>Live Demo</button></a>
                </div>
              ) 
            })}
          </div>
        </div>
    )
}
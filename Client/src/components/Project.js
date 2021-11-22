import React from 'react'
import '../styles/projects.css'
import { Button, Card } from 'react-bootstrap'
import {projectData} from '../local-data/project-data'

export default function Project () {
  
  return (
    <div className='project-group'>
     <h2 id='to-projects' className='projects-header' style={{display: 'flex'}}>
       <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" style={{marginRight: '20px'}} fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
        </svg>
        Projects
      </h2>
      <div className='project-cards'>
        {projectData.map((project, index) => {
            return (
            <Card data-aos='fade-up' key={index} bg='dark' style={{ width: '600px'}}>
                <Card.Img className='card-img' variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title style={{color: '#fff'}}>{project.title}</Card.Title>
                  <Card.Text className='card-text' text='primary'>
                    {project.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor:'#495057', display:'flex', justifyContent: 'space-between'}}>
                  <div>
                    <Card.Link style={{marginRight: '-15px'}} href={project.github} target='_blank' rel="noreferrer">
                      <Button className='card-btn' variant='light' style={{marginRight: '10px'}}>
                        Github
                      </Button>
                    </Card.Link>
                    <Card.Link className='project-btn' href={project.demo} target='_blank' rel="noreferrer">
                      <Button className='card-btn' variant='dark'>
                        Demo
                      </Button>
                    </Card.Link>
                  </div>
                  <div className='card-icons'>
                    {project.technologies.map((source, index) => {
                      return <img className='tech-icons' key={index} src={source} alt='icons'/>
                    })}
                  </div>
                </Card.Footer>
              </Card>
          ) 
        })}
      </div>
    </div>
)
}
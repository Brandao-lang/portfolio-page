import React from 'react'
import { Button } from 'react-bootstrap'
import '../styles/main.css'

export default function Main () {
    return (
        <div className='main-content'>
            <p>
            <strong>Hi, my name is Elijah.</strong> <br/><br/>I'm passionate about solving problems with software and building user experiences powered by the combination of artistic expression and web based software.  
            </p>
           <a href='mailto:elijahbrandao@gmail.com'> 
                <Button variant='primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{marginRight: '5px', height: '30px'}} fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg> 
                    Contact
                </Button>
            </a>
        </div>
    )
}
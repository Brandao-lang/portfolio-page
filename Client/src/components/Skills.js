import React from 'react'
import '../styles/skills.css'

export default function Skills () {
    return (
        <div className='skills-container'>
            <h2 style={{display: 'flex', alignItems: 'center'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" style={{marginRight: '15px'}} fill="currentColor" className="bi bi-pin-angle" viewBox="0 0 16 16">
                    <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z"/>
                </svg> 
                Skills
            </h2>
                <div className='proficient-icons' style={{display: 'flex', flexWrap:'wrap', gap:'30px'}}>
                    <div className='test-box' data-aos='fade-right'>
                        <svg viewBox="0 0 128 128">
                    <path
                    fill="#E44D26"
                    d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"
                    ></path>
                    <path
                    fill="#F16529"
                    d="M64 118.704l29.244-8.108 6.881-77.076H64z"
                    ></path>
                    <path
                    fill="#EBEBEB"
                    d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"
                    ></path>
                    <path
                    d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"
                    ></path>
                    <path
                    fill="#fff"
                    d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"
                    ></path>
                </svg>
                <br/>
                <span>HTML5</span>
                </div>
                <div className='test-box' data-aos='fade-right'>
                <svg viewBox="0 0 128 128">
                    <path
                    fill="#fff"
                    d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"
                    ></path>
                    <path
                    fill="#1572B6"
                    d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"
                    ></path>
                    <path
                    fill="#33A9DC"
                    d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"
                    ></path>
                    <path
                    fill="#fff"
                    d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"
                    ></path>
                    <path
                    fill="#EBEBEB"
                    d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"
                    ></path>
                    <path
                    fill="#fff"
                    d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"
                    ></path>
                    <path
                    fill="#EBEBEB"
                    d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"
                    ></path>
                </svg>
                <br/>
                <span>CSS3</span>
                </div>
                <div className='test-box' data-aos='fade-right'>
                <svg viewBox="0 0 128 128">
                    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
                    <path
                    fill="#323330"
                    d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    ></path>
                </svg>
                <br/>
                <span>JavaScript</span>
                </div>
                <div className='test-box' data-aos='fade-right'>
                <img  alt="React-icon" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
                <br/>
                <span>React</span>
                </div>

                <div className='test-box' data-aos='fade-right'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png' alt= 'typescript'/>
                <br/>
                <span>TypeScript</span>
                </div>
                
                <div className='test-box' data-aos='fade-right'>
                <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt=""/>
                <br/>
                <span>Redux</span>
                </div>

                <div className='test-box' data-aos='fade-right'>
               <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png' alt= 'asp.net'/>
               <br/>
               <span>.NET</span>
               </div>
               
               <div className='test-box' data-aos='fade-right'>
                <img src='https://www.w3schools.in/wp-content/uploads/mongodb-logo.png?ezimgfmt=rs:0x0/rscb6/ng:webp/ngcb6' alt='mongodb'/>
                <br/>
               <span>MongoDB</span>
               </div>
                
               <div className='test-box' data-aos='fade-right'>
                <img src='https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/postgres_database_server_relational_dbms_sql-256.png' alt= 'postgres'/>
                <br/>
               <span>Postgres</span>
               </div>

                <div className='test-box' data-aos='fade-right'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png' alt= 'bootstrap'/>
                <br/>
               <span>Bootstrap</span>
               </div>
            </div>
        </div>
    )
}
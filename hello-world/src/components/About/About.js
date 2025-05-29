import React from 'react'

export default function About() {
  return (
    <div className='container my-3'>
        <h2 className='my-3'>About Us</h2>
        <p>
          This is a simple React application that demonstrates the use of components, state management, and basic styling. 
          The application includes a text form for user input, a contact page, and an about page.
        </p>
        <button className='acordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>Item #1</button>
        <div className='collapse' id='collapseExample'>
          <div className='card card-body'>
            This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
          </div>
          </div></div>
  )
}

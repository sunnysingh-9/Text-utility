import React from 'react'

export default function Navbar(props) {
  return (
    <body>
  
    <header>

        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
            <ul>
                <li><a href="/">{props.title}</a></li>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUTUS</a></li>
                <li><a href="/">CONTACTUS</a></li>
              

                {/* <div className="search">
                <input type="text" name="search" id="search" placeholder="search here"/>
                <button className='submit' type='submit' Search />
            </div> */}
              <form className='search' role="search">
        <input id='search' type="search" placeholder="Search" aria-label="Search"/>
        <button className='submit' type="submit">Search</button>
        <div class={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkmode</label>
</div>
      </form>
            
                   
               
            </ul>

        </nav>

    </header>


</body>
  )
}
Navbar.defaultProps = {

    title: 'textutils' 

};

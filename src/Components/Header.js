import React from 'react'
import './Navbar.css'

const Header = () => {
    return (
        <div className="whole">

        
        <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light container">
  <div class="container">
    <a class="navbar-brand" href="#">MURAADSO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse sm-sticky-top" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Perfomance</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Document</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default Header

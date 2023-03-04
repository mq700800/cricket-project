import React from 'react';

function NavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className='col-sm-6'>
  <a class="navbar-brand mr-5">TEAM SARKAR</a>
  <button class="navbar-toggler ml-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      </div>
<div className='col-sm-4'></div>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Players</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Records
        </a>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default NavBar
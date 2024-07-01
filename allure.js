document.getElementById("nav").innerHTML+=`
<nav class="navbar navbar-expand-lg fixed-top">
<div class="container-fluid">
  <a class="navbar-brand" href="home.html"><img class="logo" src="IMG/Allure Essence.png"></a>
  <button class="navbar-toggler" style="color:white; border: 2px solid white;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" style="color:white; border: 2px solid white;"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-lg-auto">
      <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" href="products.html" id="navbarDropdownMenuLink"  role="button">
          Products
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a class="dropdown-item" href="davidoff.html">Davidoff</a></li>
          <li><a class="dropdown-item" href="dior.html">Dior</a></li>
          <li><a class="dropdown-item" href="ck.html">CK</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contactus.html">Contact Us</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;

document.getElementById("footer").innerHTML+=`
<div class="col footersec">
                  <a href="index.html">Home</a>  
                  <a href="products.html">Products</a>  
                  <a href="about.html">About</a>  
                  <a href="contactus.html">Contact Us</a>  
                </div>
                <div class="col footersec">
                  <a href="davidoff.html">Davidoff</a>
                  <a href="dior.html">Dior</a>
                  <a href="ck.html">CK</a>
                </div>
                <div class="col footersec">
                  <input type="text" placeholder="Enter Your Email">
                  <div class="btn" style="border-radius: 0;border: 1px solid brown; font-size: 1.1rem; width: 30%;color: saddlebrown; padding-left: 25px; font-weight: bold;">Submit</div>
                </div>
                `;


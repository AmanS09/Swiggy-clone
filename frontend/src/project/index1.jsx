import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './style.css'; // Import the custom CSS file
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';


function Index1() {

  //Button Clicking Logic
  const handleClick = (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the href attribute of the clicked link
    const href = event.currentTarget.getAttribute('href');

    // Handle different link clicks based on the href attribute
    if (href === '/project/cart') {
      // Handle "Cart" link click
      // Navigate to the cart page or trigger any cart-related actions here
      // Example: history.push('/project/cart') if using React Router
    } else if (href === '/') {
      // Handle "LogOut" link click
      // Implement your logout functionality here
    }
  };
  
  const handleLogout = () => {
    // Perform logout action
    // For example, you can clear user session or perform any other required logout operations
    console.log("Logout Clicked");
  };
  

  // Function to add item to cart
  function addToCart(itemName, price) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const item = {
      name: itemName,
      price: price,
      quantity: 1,
    };

    cartItems.push(item);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount(cartItems.length);

    Swal.fire({
      icon: 'success',
      title: 'Item added to cart!',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  // Toggle Menu Defination
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    const targetElement = event.target;

    if (targetElement.closest('.sticky-button1') && !menuOpen) {
      setMenuOpen(true);
    } else if (!targetElement.closest('.menu')) {
      setMenuOpen(false);
    }
  };
  // Function to update the cart count display and store it in localStorage
  function updateCartCount(count) {
    const cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = count;
  }

  // Function to handle clicking on "Order Now" button
  function orderNow(foodName, price) {
    const foodNameInput = document.querySelector('input[placeholder="food name"]');
    const priceInput = document.querySelector('input[placeholder="price"]');

    // Set the food name and price in the input fields
    foodNameInput.value = foodName;
    priceInput.value = price;
  }


  React.useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCartCount(cartItems.length);
  }, []);

  React.useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCount = cartItems.length;
    localStorage.setItem('cartCount', cartCount);
  });

  return (
    <>
      <div className='check'>
        {/* Header section */}
        <header>
          <div className="logo">
            <div className="logo-container">
              <img src={require('./index_images/logo3.jpg')} alt="" />
              <span className="logo-text">Swiggato</span>
            </div>
          </div>

          <div id="menu-bar" className="fas fa-bars"></div>
          <nav className="navbar1">
            <a href="#home">
              <i className="fas fa-home"></i> Home
            </a>
            <a href="#About Us">
              <i className="fas fa-info-circle"></i> About Us
            </a>
            <a href="#speciality">
              <i className="fas fa-star"></i> Speciality
            </a>
            <a href="#Menu">
              <i className="fas fa-utensils"></i> Menu
            </a>
            <a href="#gallery">
              <i className="fas fa-image"></i> Gallery
            </a>
            <a href="#HealthyTips">
              <i className="fas fa-heart"></i> Healthy Tips
            </a>
            <Link to="/project/cart" id="cartLink">
            <i className="fas fa-shopping-cart">
              <span id="cartCount">0</span>
            </i>
            Cart
          </Link>
          <a href="/project/home" role="button" onClick={handleLogout}>
        LogOut
      </a>
          </nav>
        </header>

        {/* Home section */}
        <section className="home" id="home">
          <div className="content">
            <h3 style={{ fontWeight: 'bold' }}>Food Made With Love</h3>
            <p>
              The most important ingredient and healing effect in the preparation of all meals and dishes: is Love! It’s
              always available and free, it causes well being, health, joy, gratitude and satisfaction.
            </p>
            <a href="#home" className="btn1">
              Welcome
            </a>
          </div>
          <div className="image">
            <img src={require('./index_images/pizza.webp')} alt="" />
          </div>
        </section>

        {/* Steps section */}
        <div className="step-container">
          <h1 className="heading">
            How It <span>Works</span>
          </h1>
          <section className="steps">
            <div className="box">
              <img src={require('./index_images/step-1.jpg')} alt="" />
              <h3 style={{ fontWeight: 'bold' }}>Choose your favorite food</h3>
            </div>
            <div className="box">
              <img src={require('./index_images/step-2.jpg')} alt="" />
              <h3 style={{ fontWeight: 'bold' }}>Free and Fast delivery</h3>
            </div>
            <div className="box">
              <img src={require('./index_images/step-3.jpg')} alt="" />
              <h3 style={{ fontWeight: 'bold' }}>Easy payments methods</h3>
            </div>
            <div className="box">
              <img src={require('./index_images/step-4.jpg')} alt="" />
              <h3 style={{ fontWeight: 'bold' }}>And finally, enjoy your meal</h3>
            </div>
          </section>
        </div>

        {/* About Us section */}
        <section className="About Us" id="About Us">
          <h1 className="heading"> About <span>Us</span> </h1>
          <div className="about-section">
            <h1>About The Swiggato</h1>
            <p>Craving some delicious  food? Maybe you’re in the mood for a juicy steak?
              No matter what kind of meal you have in mind, The Swiggato is ready to prepare it for you.
              Since 1973, The Swiggato has been the go-to diner for residents of Binghamton, NY. Our diner serves breakfast all day, in addition to wholesome and flavorful dining options for lunch and dinner. From burgers to salads, seafood to pastas, you’ll find all kinds of hearty meals prepared fresh at The Swiggato. Our diner also has a full bakery with delicious baked goods and other treats, including our famous cheesecake. Sounds delicious, right?.</p>
            <p>We’re here to serve you the best food around, whenever you’re looking for a great Indian restaurant in India.</p>
          </div>
          <h2 style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '2rem', fontSize: '2.5rem' }}>Our Team</h2>
          <div className="row">
            <div className="column">
              <div className="card">
                <img src={require('./index_images/Aman3.jpg')} alt="Aman Srivastava" style={{ width: '100%' }} />
                <div className="container">
                  <h2 className='heading1'>Aman Srivastava</h2>
                  <h3 className="title">CEO & Founder</h3>
                  <h3 >Amansrivastava@gmail.com</h3>
                  <p>
                    <Link to="https://www.instagram.com/igsoul_aman/" target="_blank">
                      <button className="button" style={{ fontSize: '1.5rem' }}>Contact</button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div class="column">
              <div className="card">
                <img src={require('./index_images/Priyanshu.jpg')} alt="Priyanshu Srivastava" style={{ width: '100%' }} />
                <div className="container">
                  <h2 className='heading1'>Priyanshu Srivastava</h2>
                  <h3 className="title">Art Director & Co-founder</h3>
                  <h3>Priyanshusrivastava@gmail</h3>
                  <p>
                    <Link to="https://instagram.com/i_m_priyanshu.09/" target="_blank">
                      <button className="button" style={{ fontSize: '1.5rem' }}>Contact</button>
                    </Link>
                  </p></div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src={require('./index_images/Pranav.png')} alt="Pranav Bansal" style={{ width: '100%' }} />
                <div class="container">
                  <h2 className='heading1'>Pranav Bansal</h2>
                  <h3 class="title">Chairman and Managing Director</h3>
                  <h3>Pranavbansal@gmail.com</h3>
                  <p>
                    <Link to="https://instagram.com/pranav106/" target="_blank">
                      <button className="button" style={{ fontSize: '1.5rem' }}>Contact</button>
                    </Link>
                  </p></div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src={require('./index_images/Gaurav.jpg')} alt="Gaurav Kumar" style={{ width: '100%' }} />
                <div class="container">
                  <h2 className='heading1'>Gaurav Kumar</h2>
                  <h3 class="title">Head of Investments</h3>
                  <h3>Gauravkumar@gmail</h3>
                  <p>
                    <Link to="https://instagram.com/1up_gaurav/" target="_blank">
                      <button className="button" style={{ fontSize: '1.5rem' }}>Contact</button>
                    </Link>
                  </p></div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src={require('./index_images/AKshay.png')} alt="Akshay Pratap Singh" style={{ width: '100%' }} />
                <div class="container">
                  <h2 className='heading1'>Akshay Pratap Singh</h2>
                  <h3 class="title">Designer </h3>
                  <h3>Akshaypratap@gmail</h3>
                  <p>
                    <Link to="https://instagram.com/akshay_pratap_786/" target="_blank">
                      <button className="button" style={{ fontSize: '1.5rem' }}>Contact</button>
                    </Link>
                  </p></div>
              </div>
            </div>
          </div>
        </section>
        {/* About us Section Ends */}

        {/* Toggle Mennu Starts*/}

        <div className="sticky-button1">
          <div className="button3" onClick={toggleMenu}>
            <img src={require('./index_images/menu1.jpeg')} alt="Menu Icon" className="menu1-icon" />
          </div>
          <div className={`menu1 ${menuOpen ? 'open' : ''}`} id="menu">
            <div className="menu1-list-container">
              <ul className="menu-list">
                <li>
                  <span className="food-name">Veg Cheese Burger</span>
                  <span className="food-price"> Rs110</span>
                </li>
                <li>
                  <span className="food-name">Burrito</span>
                  <span className="food-price">Rs300</span>
                </li>
                <li>
                  <span className="food-name">Cakes</span>
                  <span className="food-price">Rs500</span>
                </li>
                <li>
                  <span className="food-name">Flavour barfi</span>
                  <span className="food-price"> Rs150</span>
                </li>
                <li>
                  <span className="food-name">Chocolate Cupcake</span>
                  <span className="food-price">Rs50</span>
                </li>
                <li>
                  <span className="food-name">Tasty burger</span>
                  <span className="food-price">Rs100</span>
                </li>
                <li>
                  <span className="food-name">Cold drink   Rs40</span>
                  <span className="food-price">Rs40</span>
                </li>
                <li>
                  <span className="food-name">Cold ice-cream</span>
                  <span className="food-price">Rs60</span>
                </li>
                <li>
                  <span className="food-name">Paneer sandwich</span>
                  <span className="food-price">Rs120</span>
                </li>
                <li>
                  <span className="food-name">Tasty cupcakes</span>
                  <span className="food-price">Rs50</span>
                </li>
                <li>
                  <span className="food-name">Crispy Fried Chicken</span>
                  <span className="food-price">Rs450</span>
                </li>
                <li>
                  <span className="food-name">Egg Toast</span>
                  <span className="food-price">Rs120</span>
                </li>
                <li>
                  <span className="food-name">Tasty sweets</span>
                  <span className="food-price">Rs150</span>
                </li>
                <li>
                  <span className="food-name">Chocolate</span>
                  <span className="food-price">Rs50</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Speciality section */}
        <section className="speciality" id="speciality">
          <h1 className="heading">  Our <span>Speciality</span> </h1>
          <div className="box-container">
            <div className="box">
              <img className="image" src={require('./index_images/s-img-1.jpg')} alt="" />
              <div className="content">
                <img src={require('./index_images/s-1.png')} alt="" />
                <h3>Tasty burger</h3>
                <p>Our mission is to serve a fresh, flavorful, flat patty burger made from the finest Indian Style, while becoming a real part of every neighborhood in which we open.</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={require('./index_images/s-img-2.jpg')} alt="" />
              <div className="content">
                <img src={require('./index_images/s-2.png')} alt="" />
                <h3>Tasty pizza</h3>
                <p>Our Pizza has the freshest pizza dough in the city,It’s made every day so that the flavour and texture of the dough are perfect every time you visit.</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={require('./index_images/s-img-3.jpg')} alt="" />
              <div className="content">
                <img src={require('./index_images/s-3.png')} alt="" />
                <h3>Cold Ice-cream</h3>
                <p>Delicious, creamy, satisfying flavors of Cold Love. Artisanal ice cream, handmade with all-natural ingredients. You can order ice cream online</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={require('./index_images/s-img-4.jpg')} alt="" />
              <div className="content">
                <img src={require('./index_images/s-4.png')} alt="" />
                <h3>Cold Drinks</h3>
                <p>You've organized a family get together,no worries! We are here to back you up. Place a cold drink online order at our restaurant and our delivery boy will be there at your service</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={require('./index_images/s-img-5.jpg')} alt="" />
              <div className="content">
                <img src={require('./index_images/s-5.png')} alt="" />
                <h3>Tasty sweets</h3>
                <p>Here are the best chocolates in our restaurant. Place a tasty sweets online order at our restaurant and our delivery boy will be there at your service.</p>
              </div>
            </div>
            <div className="box">
              <img className="image" src={require('./index_images/s-img-6.jpg')} alt="" />
              <div className="content">
                <img src={require('./index_images/s-6.png')} alt="" />
                <h3>Healthy Breakfast</h3>
                <p>Eat healthy breakfast like a king, lunch like a prince, and dinner like a pauper.
                  Place a healthy breakfast online order at our restaurant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu section */}
        <section className="Menu" id="Menu">
          <h1 className="heading">Menu - Most <span>Popular</span> Foods</h1>
          <div className="box-container">
            <div className="box">
              <span className="price" data-price="100">Rs.100</span>
              <img src={require('./index_images/p-1.jpg')} alt="" />
              <h3>Tasty burger</h3>
              <a href="#OrderNow" className="btn1" onClick={() => orderNow('Tasty Burger', 100)}>Order Now</a>
              <div className="icon">
                <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%' }} onClick={() => addToCart('Tasty Burger', 100)} />
              </div>
            </div>

            <div className="box">
              <span className="price" data-price="500">Rs.500</span>
              <img src={require('./index_images/p-2.jpg')} alt="" />
              <h3>Tasty cakes</h3>
              <a href="#OrderNow" className="btn1" onClick={() => orderNow('Tasty Cakes', 500)}>Order Now</a>
              <div className="icon">
                <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%' }} onClick={() => addToCart('Tasty Cakes', 500)} />
              </div>
            </div>

            <div className="box">
              <span className="price" data-price="150">Rs.150</span>
              <img src={require('./index_images/p-3.jpg')} alt="" />
              <h3>Tasty sweets</h3>
              <a href="#OrderNow" className="btn1" onClick={() => orderNow('Tasty Sweets', 150)}>Order Now</a>
              <div className="icon">
                <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%' }} onClick={() => addToCart('Tasty Sweets', 150)} />
              </div>
            </div>

            <div className="box">
              <span className="price" data-price="50">Rs.50</span>
              <img src={require('./index_images/p-4.jpg')} alt="" />
              <h3>Tasty cupcakes</h3>
              <a href="#OrderNow" className="btn1" onClick={() => orderNow('Tasty Cupcakes', 50)}>Order Now</a>
              <div className="icon">
                <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%' }} onClick={() => addToCart('Tasty Cupcakes', 50)} />
              </div>
            </div>

            <div className="box">
              <span className="price" data-price="40">Rs.40</span>
              <img src={require('./index_images/p-5.jpg')} alt="" />
              <h3>Cold Drinks</h3>
              <a href="#OrderNow" className="btn1" onClick={() => orderNow('Cold Drinks', 40)}>Order Now</a>
              <div className="icon">
                <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%' }} onClick={() => addToCart('Cold Drinks', 40)} />
              </div>
            </div>

            <div className="box">
              <span className="price" data-price="60">Rs.60</span>
              <img src={require('./index_images/p-6.jpg')} alt="" />
              <h3>cold ice-cream</h3>
              <a href="#OrderNow" className="btn1" onClick={() => orderNow('Cold Ice Cream', 60)}>Order Now</a>
              <div className="icon">
                <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%' }} onClick={() => addToCart('Cold Ice Cream', 60)} />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery section */}
        <section className="gallery" id="gallery">
          <h1 className="heading">Our Food <span>Gallery</span></h1>
          <div className="box-container">
            <div className="box">
              <img src={require('./index_images/g-1.jpg')} alt="" />
              <div className="content">
                <h3 className='gall'>Veg Cheese Burger</h3>
                <p>The chief ingredient in yummy food is love.</p>
                <a href="#OrderNow" className="btn1" onClick={() => orderNow('Veg Cheese Burger', 110)}>Order Now</a>
                <div className="icon">
                  <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%', paddingTop: '5px' }} onClick={() => addToCart('Veg Cheese Burger', 110)} />
                </div>
              </div>
            </div>

            <div className="box">
              <img src={require('./index_images/g-2.jpg')} alt="" />
              <div className="content">
                <h3 className='gall'>Paneer sandwiches</h3>
                <p>The chief ingredient in yummy food is love.</p>
                <a href="#OrderNow" className="btn1" onClick={() => orderNow('Paneer sandwich', 120)}>Order Now</a>
                <div className="icon">
                  <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%', paddingTop: '5px' }} onClick={() => addToCart('Paneer sandwich', 120)} />
                </div>
              </div>
            </div>

            {/* Add more boxes as needed */}
            {/* ... */}
            <div className="box">
              <img src={require('./index_images/g-3.jpg')} alt="" />
              <div className="content">
                <h3 className='gall'>Burrito</h3>
                <p>The chief ingredient in yummy food is love.</p>
                <a href="#OrderNow" className="btn1" onclick={() => orderNow('Burrito', 300)}>Order Now</a>
                <div className="icon">
                  <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%', paddingTop: '5px' }} onClick={() => addToCart('Burrito', 300)} />
                </div>
              </div>
            </div>
            <div className="box">
              <img src={require('./index_images/g-4.jpg')} alt="" />
              <div className="content">
                <h3 className='gall'>Chocolate Cupcake</h3>
                <p>The chief ingredient in yummy food is love.</p>
                <a href="#OrderNow" class="btn1" onclick={() => orderNow('Chocolate Cupcake', 50)}>Order Now</a>

                <div className="icon">
                  <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%', paddingTop: '5px' }} onClick={() => addToCart('Chocolate Cupcake', 50)} />
                </div>
              </div>
            </div>
            <div className="box">
              <img src={require('./index_images/g-5.jpg')} alt="" />
              <div className="content">
                <h3 className='gall'>Flavour barfi</h3>
                <p>The chief ingredient in yummy food is love.</p>
                <a href="#Order Now" class="btn1" onclick={() => orderNow('Flavour barfi', 150)}>Order Now</a>
                <div className="icon">
                  <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%', paddingTop: '5px' }} onClick={() => addToCart('Flavour barfi', 150)} />
                </div>
              </div>
            </div>
            <div className="box">
              <img src={require('./index_images/g-6.jpg')} alt="" />
              <div className="content">
                <h3 className='gall'>Crispy Fried Chicken</h3>
                <p>The chief ingredient in yummy food is love.</p>
                <a href="#Order Now" class="btn1" onclick={() => orderNow('crispy Fried Chicken', 450)}>Order Now</a>
                <div className="icon">
                  <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%', paddingTop: '5px' }} onClick={() => addToCart('crispy Fried Chicken', 450)} />
                </div>
              </div>
            </div>
            <div className="box">
              <img src={require('./index_images/g-7.jpg')} alt="" />
              <div className="content">
                <h3 className='gall'>Egg Toast</h3>
                <p>The chief ingredient in yummy food is love.</p>
                <a href="#Order Now" class="btn1" onclick={() => orderNow('Egg Toast', 120)}>Order Now</a>
                <div className="icon">
                  <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%', paddingTop: '5px' }} onClick={() => addToCart('Egg Toast', 120)} />
                </div>
              </div>

            </div>
            <div className="box">
              <img src={require('./index_images/g-8.jpg')} alt="" />
              <div className="content">
                <h3 className='gall'>Chocolate</h3>
                <p>The chief ingredient in yummy food is love.</p>
                <a href="#Order Now" class="btn1" onclick={() => orderNow('Chocolate', 50)}>Order Now</a>
                <div className="icon">
                  <img src={require('./index_images/cart.png')} alt="Add" style={{ width: '4.7rem', height: '4.7rem', borderRadius: '50%', paddingTop: '5px' }} onClick={() => addToCart('Chocolate', 50)} />
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* Healthy Tips section */}
        <section className="HealthyTips" id="HealthyTips">
          <h1 className="heading">
            <span>Healthy Tips</span>
          </h1>
          <div className="box-container">
            <div className="box">
              <img src={require('./index_images/ashok.jpg')} alt="ASHOK MITTAL" />
              <h3>ASHOK MITTAL</h3>
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>
                Start your morning off right with a big glass of water. After fasting all night, this first drink of water
                will help to hydrate your cells and wake you up.
              </p>
            </div>
            <div className="box">
              <img src={require('./index_images/rashmi.jpg')} alt="RASHMI MITTAL" />
              <h3>RASHMI MITTAL</h3>
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>Making your meals ahead of time will end up saving you plenty of time and stress in the long run!.</p>
            </div>
            <div className="box">
              <img src={require('./index_images/aman.jpg')} alt="Aman Mittal" />
              <h3>Aman Mittal</h3>
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
              <p>
                Sleep is an important part of health and if you don’t get enough of it, it can negatively impact your energy
                levels, motivation, concentration, and even appetite regulation.
              </p>
            </div>
          </div>
        </section>
        {/* Order Now Section */}
        <section className="Order Now" id="Order Now">
          <h1 className="heading">
            <span>Order</span> Now
          </h1>
          <div className="row">
            <div className="image">
              <img src={require('./index_images/order-img.jpg')} alt="" />
            </div>
            <form action="">
              <div className="inputBox">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="email" />
              </div>
              <div className="inputBox">
                <input type="number" placeholder="Number" />
                <input type="text" placeholder="Food name" />
                <input type="text" placeholder="Price" style={{ border: '2px solid green', color: 'green' }} />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Address" />
              </div>
              <a href="payment.html" className="btn1">Pay</a>
            </form>
          </div>
        </section>


        {/* Footer section */}
        <section className="footer">
          <div className="share">
            <a href="https://www.instagram.com/pranav106/" className="btn1" target="_blank" rel="noreferrer">Pranav</a>
            <a href="https://www.instagram.com/igsoul_aman/" className="btn1" target="_blank" rel="noreferrer">Aman</a>
            <a href="https://instagram.com/i_m_priyanshu.09/" className="btn1" target="_blank" rel="noreferrer">Priyanshu</a>
            <a href="https://instagram.com/1up_gaurav/" className="btn1" target="_blank" rel="noreferrer">Gaurav</a>
            <a href="https://instagram.com/akshay_pratap_786/#" className="btn1" target="_blank" rel="noreferrer">Akshay</a>
          </div>
        </section>
        {/* Footer Section ends */}

      </div>
    </>
  );
}

export default Index1;

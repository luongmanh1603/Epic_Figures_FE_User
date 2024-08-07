

function Header() {
   
    return (
      <>
      {/* Header Area Start */}
      <header className="large-screens">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse justify-content-between">
              <a className="navbar-brand" href="index-2.html">
                <img alt="logo" src="assets/media/logo.png" />
              </a>
              <ul className="navbar-nav mainmenu">
                <li className="menu-item has-children">
                  <a href="javascript:void(0);" className="main-menu-item active">
                    Home
                    <i className="fas fa-caret-down m-1" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="index-2.html" className="active">
                        Home 1
                      </a>
                    </li>
                    <li>
                      <a href="index-3.html">Home 2</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home 3</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item has-children">
                  <a href="javascript:void(0);" className="main-menu-item">
                    Games
                    <i className="fas fa-caret-down m-1" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="live-streams.html">Live Streams</a>
                    </li>
                    <li>
                      <a href="stream-detail.html">Stream Detail</a>
                    </li>
                    <li>
                      <a href="match-result.html">Match Results</a>
                    </li>
                    <li>
                      <a href="tournament-list.html">Tournaments</a>
                    </li>
                    <li>
                      <a href="tournment-detail.html">Tournament Detail</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item has-children">
                  <a href="javascript:void(0);" className="main-menu-item">
                    Shop
                    <i className="fas fa-caret-down m-1" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="product-detail.html">Product Detail</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item has-children">
                  <a href="javascript:void(0);" className="main-menu-item">
                    pages
                    <i className="fas fa-caret-down m-1" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="blogs.html">Blogs</a>
                    </li>
                    <li>
                      <a href="blog-detail.html">Blog Detail</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="signup.html">Sign UP</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="right-content unstyled">
                <li className="search-form non-active">
                  <form
                    method="get"
                    action="https://uiparadox.co.uk/public/templates/gamerx/v2/shop.html"
                  >
                    <div className="search-input-group">
                      <button type="submit" className="input-group-text">
                        <i className="fal fa-search" />
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </li>
                <li className="icon">
                  <a href="javascript:;" className="search-btn">
                    <i className="fal fa-search" />
                  </a>
                </li>
                <li className="icon">
                  <a href="cart.html">
                    <i className="fal fa-shopping-cart" />
                  </a>
                </li>
                <li className="icon">
                  <a href="login.html">
                    <i className="fal fa-user" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
    

    );
}

export default Header;

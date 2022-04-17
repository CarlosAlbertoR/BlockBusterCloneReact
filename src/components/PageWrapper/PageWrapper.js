import React from 'react';
import Login from '../Login/Login/Login';
import Signup from '../Login/Signup/Signup';
import MovieList from '../Movies/MovieList';
import Header from './Header/Header';
import Preloader from './Preloader/Preloader';

function PageWrapper() {
  return (
    <div>
      <Preloader />
      <Login />
      <Signup />
      <Header />

      <div className="hero common-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1>movie listing - list</h1>
                <ul className="breadcumb">
                  <li className="active">
                    <a href="http">Home</a>
                  </li>
                  <li>
                    <span className="ion-ios-arrow-right" /> movie listing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-single movie_list">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="topbar-filter">
                <p>
                  Found <span>1,608 movies</span> in total
                </p>
                Sort by:
                {/* <label>Sort by:</label> */}
                <select>
                  <option value="popularity">Popularity Descending</option>
                  <option value="popularity">Popularity Ascending</option>
                  <option value="rating">Rating Descending</option>
                  <option value="rating">Rating Ascending</option>
                  <option value="date">Release date Descending</option>
                  <option value="date">Release date Ascending</option>
                </select>
                <a href="movielist.html" className="list">
                  <i className="ion-ios-list-outline active" />
                </a>
                <a href="moviegrid.html" className="grid">
                  <i className="ion-grid" />
                </a>
              </div>

              <MovieList />
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="sidebar">
                <div className="searh-form">
                  <h4 className="sb-title">Search for movie</h4>
                  <form className="form-style-1" action="#">
                    <div className="row">
                      <div className="col-md-12 form-it">
                        Movie name
                        {/* <label>Movie name</label> */}
                        <input type="text" placeholder="Enter keywords" />
                      </div>
                      <div className="col-md-12 form-it">
                        Genres & Subgenres
                        {/* <label>Genres & Subgenres</label> */}
                        <div className="group-ip">
                          <select
                            name="skills"
                            multiple=""
                            className="ui fluid dropdown"
                          >
                            <option value="">Enter to filter genres</option>
                            <option value="Action1">Action 1</option>
                            <option value="Action2">Action 2</option>
                            <option value="Action3">Action 3</option>
                            <option value="Action4">Action 4</option>
                            <option value="Action5">Action 5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 form-it">
                        Rating Range
                        {/* <label>Rating Range</label> */}
                        <select>
                          <option value="range">
                            -- Select the rating range below --
                          </option>
                          <option value="saab">
                            -- Select the rating range below --
                          </option>
                          <option value="saab">
                            -- Select the rating range below --
                          </option>
                          <option value="saab">
                            -- Select the rating range below --
                          </option>
                        </select>
                      </div>
                      <div className="col-md-12 form-it">
                        {/* <label>Release Year</label> */}
                        Release Year
                        <div className="row">
                          <div className="col-md-6">
                            <select>
                              <option value="range">From</option>
                              <option value="number">10</option>
                              <option value="number">20</option>
                              <option value="number">30</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <select>
                              <option value="range">To</option>
                              <option value="number">20</option>
                              <option value="number">30</option>
                              <option value="number">40</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <input
                          className="submit"
                          type="submit"
                          value="submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="ads">
                  <img src="images/uploads/ads1.png" alt="" />
                </div>
                <div className="sb-facebook sb-it">
                  <h4 className="sb-title">Find us on Facebook</h4>
                  <iframe
                    src="#"
                    data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                    height="315"
                    title="unique-title-test"
                  />
                </div>
                <div className="sb-twitter sb-it">
                  <h4 className="sb-title">Tweet to us</h4>
                  <div className="slick-tw">
                    <div className="tweet item" id="" />
                    <div className="tweet item" id="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="ht-footer">
        <div className="container">
          <div className="flex-parent-ft">
            <div className="flex-child-ft item1">
              <a href="index-2.html">
                <img className="logo" src="images/logo1.png" alt="" />
              </a>
              <p>
                5th Avenue st, manhattan
                <br />
                New York, NY 10001
              </p>
              <p>
                Call us: <a href="http">(+01) 202 342 6789</a>
              </p>
            </div>
            <div className="flex-child-ft item2">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="http">About</a>
                </li>
                <li>
                  <a href="http">Blockbuster</a>
                </li>
                <li>
                  <a href="http">Contact Us</a>
                </li>
                <li>
                  <a href="http">Forums</a>
                </li>
                <li>
                  <a href="http">Blog</a>
                </li>
                <li>
                  <a href="http">Help Center</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item3">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="http">Terms of Use</a>
                </li>
                <li>
                  <a href="http">Privacy Policy</a>
                </li>
                <li>
                  <a href="http">Security</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item4">
              <h4>Account</h4>
              <ul>
                <li>
                  <a href="http">My Account</a>
                </li>
                <li>
                  <a href="http">Watchlist</a>
                </li>
                <li>
                  <a href="http">Collections</a>
                </li>
                <li>
                  <a href="http">User Guide</a>
                </li>
              </ul>
            </div>
            <div className="flex-child-ft item5">
              <h4>Newsletter</h4>
              <p>
                Subscribe to our newsletter system now <br />
                to get latest news from us.
              </p>
              <form action="http">
                <input type="text" placeholder="Enter your email..." />
              </form>
              <a href="http" className="btn">
                Subscribe now <i className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
        <div className="ft-copyright">
          <div className="ft-left">
            <p>
              <a
                target="_blank"
                href="https://www.templateshub.net"
                rel="noreferrer"
              >
                Templates Hub
              </a>
            </p>
          </div>
          <div className="backtotop">
            <p>
              <a href="http" id="back-to-top">
                Back to top <i className="ion-ios-arrow-thin-up" />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PageWrapper;

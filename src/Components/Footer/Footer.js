import React from 'react';
import './Footer.css'

const Footer = () => {
    return (


        <div>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <h3 className="text-white">CAR SHOP</h3>

                    <p class="footer-links">
                        <a href="#">Home</a>
                        ·
                        <a href="#">Blog</a>
                        ·
                        <a href="#">Pricing</a>
                        ·
                        <a href="#">About</a>
                        ·
                        <a href="#">Faq</a>
                        ·
                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">Car-Shop-bd@gmail.com </p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Mirpur</span> Dhaka, Bangladesh</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>019960647--</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a>contact@car-shop.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        Car Shop is Most Popular Shop in Bangladesh for Car
                    </p>

                    <div class="footer-icons">

                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a>

                    </div>

                </div>

                <div>
                    <h4 className="text-center mb-2 mt-5  text-white">Copyright © 2021 Car Shop .com</h4>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
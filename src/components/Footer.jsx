import React from 'react';
import { Link } from 'react-router-dom';
import './footer-styles/index.css'

const Footer = () => {
  return (
    <footer class="footer" >
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><Link to="/"> About us</Link></li>
  	 				<li><Link to="/"> Contact us</Link></li>
  	 				<li><Link to="/"> privacy policy</Link></li>
  	 				<li><Link to="/"> history</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><Link to="/"> FAQ</Link></li>
  	 				<li><Link to="/"> shipping</Link></li>
  	 				<li><Link to="/"> returns</Link></li>
  	 				<li><Link to="/"> order status</Link></li>
  	 				<li><Link to="/"> payment options</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>shop</h4>
  	 			<ul>
  	 				<li><Link to="/"> awal</Link></li>
  	 				<li><Link to="/"> fabin</Link></li>
  	 				<li><Link to="/"> noor</Link></li>
  	 				<li><Link to="/"> </Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<Link><i class="fab fa-facebook-f"></i></Link>
  	 				<Link to="/"> <i class="fab fa-twitter"></i></Link>
  	 				<Link to="/"> <i class="fab fa-instagram"></i></Link>
  	 				<Link to="/"> <i class="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
     <div className="copyright">
        &copy; Copyright 2023 Awal Dairy Co. W.L.L. All Rights Reserved.
      </div>
  </footer>

  )
}

export default Footer
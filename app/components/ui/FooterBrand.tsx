import type React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const FooterBrand: React.FC = () => {
	return (
		<div className="footer-section brand-section">
			<h3 className="footer-brand">PARVEENXKASHYAP</h3>
			<p className="footer-tagline">AI Engineer & ML Developer</p>
			<p className="footer-description">
				Building intelligent systems with AI, ML, and production-ready code.
			</p>
			<div className="footer-location">
				<FaMapMarkerAlt />
				<span>Ludhiana, Punjab, IN</span>
			</div>
		</div>
	);
};

export default FooterBrand;

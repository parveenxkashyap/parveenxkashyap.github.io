import type React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

const FooterLinks: React.FC = () => {
	return (
		<div className="footer-section links-section">
			<h4 className="footer-title">LINKS</h4>
			<div className="footer-links-list">
				<a
					href="https://github.com/parveenxkashyap"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-link-item"
				>
					<FaGithub className="link-icon" />
					<span className="link-text">GitHub</span>
				</a>
				<a
					href="https://www.linkedin.com/in/ksparveen/"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-link-item"
				>
					<FaLinkedin className="link-icon" />
					<span className="link-text">LinkedIn</span>
				</a>
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-link-item"
				>
					<FaFilePdf className="link-icon" />
					<span className="link-text">Resume</span>
				</a>
			</div>
		</div>
	);
};

export default FooterLinks;

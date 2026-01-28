import { Avatar } from "@base-ui/react/avatar";
import BracketLink from "./BracketLink";

const LINKS = [
	{ label: "github", href: "https://github.com/parveenxkashyap" },
	{ label: "linkedin", href: "https://www.linkedin.com/in/ksparveen/" },
	{ label: "email", href: "mailto:inparv@gmail.com" },
	{ label: "resume", href: "/resume.pdf" },
];

const Intro = () => {
	return (
		<section className="intro">
			<div className="intro__header">
				<Avatar.Root className="intro__avatar">
					<Avatar.Image src="https://github.com/parveenxkashyap.png" alt="Parveen Kashyap" />
					<Avatar.Fallback>PK</Avatar.Fallback>
				</Avatar.Root>
				<div className="intro__title-group">
					<h1 tabIndex={0}>Parveen Kashyap</h1>
					<p className="intro__subtitle" tabIndex={0}>AI Engineer & ML Developer</p>
				</div>
			</div>
			<p className="intro__about" tabIndex={0}>
			I'm a Master's student in AI & Machine Learning at Chandigarh University and a former AI Engineer Intern at ResoluteAI Software. 
			I specialize in building production-ready AI systems, from RAG pipelines and computer vision models to ML-powered automation tools. 
			My work spans across deep learning, NLP, and full-stack AI development. When I'm not coding, I'm exploring the latest in AI research, 
			working on side projects, or contributing to open-source ML tools.
			</p>
			<nav className="intro__links" aria-label="Social links">
				{LINKS.map((link) => (
					<BracketLink
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.label}
					</BracketLink>
				))}
			</nav>
		</section>
	);
};

export default Intro;

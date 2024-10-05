import Image from "next/image";
import Head from "next/head";
import styles from "./mentorias.module.css";
import {BannerMentorias} from "@/assets";

export default function Mentorias() {
	return (
		<>
			<Head>
				<title>Acompañamientos Personalizados - Visioneers</title>
				<meta
					name="description"
					content="Ofrecemos Acompañamientos Personalizados para atender las necesidades específicas de tu equipo y potenciar sus habilidades de manera efectiva y sostenida."
				/>
				<meta
					name="keywords"
					content="acompañamientos personalizados, inglés, habilidades, comunicación, desarrollo, vision, inglés para empresas"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://www.visioneers.com/mentorias" />

				{/* Open Graph Meta Tags */}
				<meta
					property="og:title"
					content="Acompañamientos Personalizados - Visioneers"
				/>
				<meta
					property="og:description"
					content="Acompañamientos Personalizados diseñados para atender las necesidades específicas de tu equipo."
				/>
				<meta
					property="og:image"
					content="https://www.visioneers.com/assets/img/BannerMentorias.jpg"
				/>
				<meta
					property="og:url"
					content="https://www.visioneers.com/mentorias"
				/>
				<meta property="og:type" content="website" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Acompañamientos Personalizados - Visioneers"
				/>
				<meta
					name="twitter:description"
					content="Ofrecemos Acompañamientos Personalizados para atender las necesidades específicas de tu equipo y potenciar sus habilidades de manera efectiva y sostenida."
				/>
				<meta
					name="twitter:image"
					content="https://www.visioneers.com/assets/img/BannerMentorias.jpg"
				/>

				{/* Markup Schema */}
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Service",
						name: "Acompañamientos Personalizados",
						description:
							"Ofrecemos Acompañamientos Personalizados para atender las necesidades específicas de tu equipo.",
						provider: {
							"@type": "Organization",
							name: "Visioneers",
							url: "https://www.visioneers.com",
						},
						url: "https://www.visioneers.com/mentorias",
					})}
				</script>
			</Head>

			<main className="w-full">
				{/* H1 oculto para SEO */}
				<h1 style={{display: "none"}}>
					Acompañamientos Personalizados - Visioneers
				</h1>

				<section className={styles.banner}>
					<Image
						src={BannerMentorias}
						alt="Banner Acompañamientos Personalizados"
						layout="fill"
						objectFit="cover"
						className={styles.bannerImage}
					/>
					<h2 className={styles.bannerTitle}>Acompañamientos Personalizados</h2>
				</section>

				<section className={`${styles.mentoriasContent}`}>
					<p className={styles.mentoriasText}>
						Entendemos que cada organización es única, y que los retos y
						objetivos de comunicación en inglés pueden variar ampliamente. Es
						por eso que ofrecemos Acompañamientos Personalizados, diseñados para{" "}
						<span className="text-customBlue font-bold">
							atender las necesidades específicas de tu equipo
						</span>{" "}
						y potenciar sus habilidades de manera efectiva y sostenida.
					</p>
				</section>

				<section className={`${styles.keyBenefits}`}>
					<div className={styles.leftSide}>
						<iframe
							className={styles.video}
							src="https://www.youtube.com/embed/EtmgJEAoCQI?si=bDhu4b27S58NHPY4"
							title="Visioneers Video"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
							allowFullScreen
						></iframe>
					</div>
					<div className={styles.rightSide}>
						<h2>
							Beneficios <span className={styles.highlightedText}>Clave </span>
						</h2>
						<ul className={styles.list}>
							<li className={styles.listItem}>
								<span className={styles.customBullet}></span>
								<span className={styles.highlightedText}>Resultados </span>{" "}
								Tangibles y Medibles
							</li>
							<li className={styles.listItem}>
								<span className={styles.customBullet}></span>
								Desarrollo Integral de{" "}
								<span className={styles.highlightedText}>Habilidades </span>
							</li>
							<li className={styles.listItem}>
								<span className={styles.customBullet}></span>
								Compromiso con el{" "}
								<span className={styles.highlightedText}>
									Éxito de tu equipo
								</span>
							</li>
						</ul>
					</div>
				</section>

				<section className={styles.contact}>
					<div className={styles.leftSide}>
						<h3>¿Deseas una cotización a la medida?</h3>
						<p>
							Déjanos tus datos y nos pondremos en contacto contigo tan pronto
							nos sea posible.
						</p>
					</div>
					<div className="rightSide">
						<h5>Formulario</h5>
					</div>
				</section>
			</main>
		</>
	);
}

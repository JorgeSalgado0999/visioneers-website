import Image from "next/image";
import Head from "next/head";
import styles from "./servicios.module.css";
import {
	BannerServicios,
	HomeIcon1,
	HomeIcon2,
	HomeIcon3,
	HomeIcon4,
	servicesBG1,
	servicesBg2,
} from "@/assets";
import {FaWhatsapp} from "react-icons/fa";

export const metadata = {
	title:
		"Servicios | Visioneers - Desarrollo Lingüístico y Comunicación Empresarial",
	description:
		"Descubre los servicios que Visioneers ofrece: desarrollo lingüístico, manejo de conversaciones difíciles, inteligencia emocional y team building en inglés.",
};

export default function Servicios() {
	return (
		<main className="w-full">
			<Head>
				<title>
					Servicios | Visioneers - Desarrollo Lingüístico y Comunicación
					Empresarial
				</title>
				<meta
					name="description"
					content="Descubre los servicios que Visioneers ofrece: desarrollo lingüístico, manejo de conversaciones difíciles, inteligencia emocional y team building en inglés."
				/>
				<meta
					name="keywords"
					content="servicios, desarrollo lingüístico, team building, inteligencia emocional, Visioneers"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Servicios | Visioneers - Desarrollo Lingüístico y Comunicación Empresarial"
				/>
				<meta
					property="og:description"
					content="Descubre los servicios que Visioneers ofrece: desarrollo lingüístico, manejo de conversaciones difíciles, inteligencia emocional y team building en inglés."
				/>
				<meta
					property="og:image"
					content="https://.mx/images/banner-servicios.png"
				/>
				<meta property="og:url" content="https://visioneers.com.mx/servicios" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			{/* H1 oculto para SEO */}
			<h1 style={{display: "none"}}>
				Servicios de Visioneers - Desarrollo Lingüístico y Comunicación
				Empresarial
			</h1>

			{/* Banner */}
			<section className={styles.banner}>
				<Image
					src={BannerServicios}
					alt="Conoce nuestros servicios en Visioneers"
					layout="fill"
					objectFit="cover"
					className={styles.bannerImage}
				/>
				<h2 className={styles.bannerTitle}>Servicios</h2>
			</section>

			{/* Servicios - Sección 1 */}
			<section className={`${styles.infoSection}`}>
				<div className={styles.servicesContainer}>
					<div className={styles.service}>
						<Image
							src={HomeIcon1}
							alt="Icono Desarrollo Lingüístico"
							className={styles.serviceIcon}
						/>
						<h3>Desarrollo Lingüístico en Inglés</h3>
						<p>
							Capacita a tus líderes y futuros líderes con las habilidades
							lingüísticas y comunicativas necesarias para inspirar, guiar y
							motivar a sus equipos en un entorno internacional.
						</p>
					</div>

					<div className={styles.service}>
						<Image
							src={HomeIcon2}
							alt="Icono Manejo de Conversaciones Difíciles"
							className={styles.serviceIcon}
						/>
						<h3>Manejo de Conversaciones Difíciles</h3>
						<p>
							Enseñamos técnicas para abordar y resolver conflictos de manera
							efectiva, asegurando que las conversaciones complejas se manejen
							con tacto, empatía y claridad en inglés.
						</p>
					</div>
				</div>
				<div className={styles.bgImageContainer}>
					<Image
						src={servicesBG1}
						alt="Fondo servicios Visioneers"
						objectFit="cover"
						className={styles.bgImage}
					/>
				</div>
			</section>

			{/* Servicios - Sección 2 */}
			<section className={`${styles.infoSection} ${styles.infoSection2}`}>
				<div className={styles.bgImageContainer}>
					<Image
						src={servicesBg2}
						alt="Fondo adicional de servicios"
						className={styles.bgImage2}
					/>
				</div>
				<div className={styles.servicesContainer}>
					<div className={styles.service}>
						<Image
							src={HomeIcon3}
							alt="Icono Inteligencia Emocional"
							className={styles.serviceIcon}
						/>
						<h3>Inteligencia Emocional en la Comunicación</h3>
						<p>
							Fomentamos la comprensión y gestión de las emociones en la
							interacción profesional, ayudando a tu equipo a desarrollar una
							comunicación más empática y efectiva en inglés.
						</p>
					</div>

					<div className={styles.service}>
						<Image
							src={HomeIcon4}
							alt="Icono Team Building"
							className={styles.serviceIcon}
						/>
						<h3>Team Building</h3>
						<p>
							Implementamos programas que fortalecen las relaciones y la
							colaboración dentro de tu equipo, mejorando la dinámica grupal y
							la efectividad colectiva, todo mientras se perfecciona la
							comunicación en inglés.
						</p>
					</div>
				</div>
			</section>

			{/* Sección de contacto */}
			<section className={styles.contact}>
				<div className={styles.leftSide}>
					<h3>
						<span className={styles.highlight}>Eleva</span> el Potencial de tu
						Empresa
					</h3>
				</div>
				<div className={styles.whatsappButtonContainer}>
					<a
						href="https://wa.me/5213311855150"
						target="_blank"
						className={styles.whatsappButton}
					>
						<FaWhatsapp className={styles.whatsIcon} />
						Contáctanos
					</a>
				</div>
			</section>

			{/* Schema Markup */}
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Service",
					name: "Servicios de Visioneers",
					description:
						"Desarrollo lingüístico, manejo de conversaciones difíciles, inteligencia emocional y team building en inglés.",
					provider: {
						"@type": "Organization",
						name: "Visioneers",
						logo: "https://visioneers.com.mx/logo.png",
						url: "https://visioneers.com.mx",
					},
					serviceType: [
						"Desarrollo Lingüístico",
						"Manejo de Conversaciones Difíciles",
						"Inteligencia Emocional",
						"Team Building",
					],
					areaServed: "MX",
				})}
			</script>
		</main>
	);
}

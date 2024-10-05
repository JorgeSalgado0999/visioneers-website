import Image from "next/image";
import styles from "./contacto.module.css";
import {BannerContacto, World} from "@/assets";
import {IoLogoWhatsapp} from "react-icons/io";
import {MdPhoneInTalk} from "react-icons/md";
import Head from "next/head";

export default function Contacto() {
	return (
		<>
			{/* Agregando etiquetas de metadatos y título */}
			<Head>
				<title>Contacto | Visioneers - Cursos de Inglés para Empresas</title>
				<meta
					name="description"
					content="Contacta a Visioneers para consultas sobre nuestros servicios de inglés empresarial. Ofrecemos clases de inglés presenciales y online adaptadas a tus necesidades."
				/>
				<meta
					name="keywords"
					content="Contacto Visioneers, inglés para empresas, clases de inglés, inglés online, cursos de inglés"
				/>
				<meta name="robots" content="index, follow" />
				<meta property="og:title" content="Contacto | Visioneers" />
				<meta
					property="og:description"
					content="Contacta a Visioneers para consultas sobre nuestros servicios de inglés empresarial. Ofrecemos clases de inglés presenciales y online."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.visioneers.com/contacto" />
				<meta
					property="og:image"
					content="https://www.visioneers.com/assets/banner-contacto.jpg"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Contacto | Visioneers" />
				<meta
					name="twitter:description"
					content="Contacta a Visioneers para consultas sobre nuestros servicios de inglés empresarial. Ofrecemos clases de inglés presenciales y online."
				/>
				<meta
					name="twitter:image"
					content="https://www.visioneers.com/assets/banner-contacto.jpg"
				/>
			</Head>

			<main className="w-full">
				{/* H1 oculto para SEO */}
				<h1 className="hidden">Contacto Visioneers - Inglés para Empresas</h1>

				<section className={styles.banner}>
					<Image
						src={BannerContacto}
						alt="Banner Contacto - Visioneers"
						layout="fill"
						objectFit="cover"
						className={styles.bannerImage}
					/>
					<h2 className={styles.bannerTitle}>Contacto</h2>
				</section>

				<section className={styles.contact}>
					<h2>Contamos con modalidad</h2>
					<h3>Presencial y Online</h3>
					<div className={styles.columns}>
						<div className={styles.leftSide}>
							<Image
								src={World}
								alt="Mapa del mundo representando nuestro alcance online"
								height={900}
								width={900}
								objectFit="contain"
							/>
						</div>
						<div className={styles.rightSide}>
							<div className={styles.box}>
								<div className={styles.boxLeft}>
									<MdPhoneInTalk className={styles.phoneIcon} />
								</div>
								<div className={styles.boxRight}>
									<h5>Llámanos al</h5>
									<a href="tel:+13322688620" className={styles.customHover}>
										1 33 2268 8620
									</a>
									<a href="tel:+13311855150" className={styles.customHover}>
										1 33 1185 5150
									</a>
								</div>
							</div>
							<div className={styles.box}>
								<div className={styles.boxLeft}>
									<IoLogoWhatsapp className={styles.whatsIcon} />
								</div>
								<div className={styles.boxRight}>
									<h5>Whatsapp</h5>
									<p>1 33 2268 8620</p>
									<a
										href="https://wa.me/5213311855150"
										target="_blank"
										className={styles.whatsappButton}
										rel="noopener noreferrer"
									>
										O bien, click aquí
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Schema Markup */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "ContactPage",
							name: "Contacto Visioneers",
							url: "https://www.visioneers.com/contacto",
							contactPoint: [
								{
									"@type": "ContactPoint",
									telephone: "+5213311855150",
									contactType: "Customer Service",
									availableLanguage: "Spanish",
									areaServed: "MX",
								},
							],
						}),
					}}
				></script>
			</main>
		</>
	);
}

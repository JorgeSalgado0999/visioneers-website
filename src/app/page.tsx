// import Image from "next/image";
import CustomCarousel from "./components/molecules/carousel";
import styles from "./Home.module.css";
import {HomeIcon1, HomeIcon2, HomeIcon3, HomeIcon4} from "@/assets";
import Image from "next/image";
import {FaWhatsapp} from "react-icons/fa";
import Head from "next/head";

export default function Home() {
	const carouselItems = [
		{
			title: "No enseñamos inglés, empoderamos empresas y personas",
			description: "para una comunicación efectiva.",
			img: "/assets/img/HomeBanner1.png",
			button: true,
			alignLeft: true,
		},
		{
			title: "Corporate Education",
			description: "",
			img: "/assets/img/HomeBanner2.png",
			button: true,
			alignLeft: false,
		},
		{
			title: "Executive English & Coaching to Empower Companies",
			description: "",
			img: "/assets/img/HomeBanner3.png",
			button: true,
			alignLeft: true,
		},
	];

	return (
		<>
			<Head>
				<title>
					Visioneers: Acompañamiento Personalizado y Servicios de Inglés
				</title>
				<meta
					name="description"
					content="Visioneers ofrece acompañamientos personalizados y programas de inglés enfocados en mejorar las habilidades de comunicación y liderazgo en las empresas."
				/>
				<meta
					property="og:title"
					content="Visioneers: Acompañamiento Personalizado y Servicios de Inglés"
				/>
				<meta
					property="og:description"
					content="Desarrolla las habilidades de tu equipo con nuestros programas de inglés personalizados, enfocados en liderazgo y resolución de conflictos."
				/>
				<meta property="og:image" content="/assets/img/HomeBanner1.png" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.visioneers.com" />
				<meta name="robots" content="index, follow" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Visioneers",
							url: "https://www.visioneers.com",
							logo: "/assets/img/logo.png",
							sameAs: [
								"https://www.facebook.com/visioneers",
								"https://www.linkedin.com/company/visioneers",
							],
							contactPoint: {
								"@type": "ContactPoint",
								telephone: "+5213311855150",
								contactType: "Customer Service",
								areaServed: "MX",
								availableLanguage: "Spanish",
							},
						}),
					}}
				/>
			</Head>

			<main className="w-full">
				<h1 className="hidden">
					Visioneers - Acompañamientos Personalizados en Inglés para Empresas
				</h1>

				<section className={styles.carouselContainer}>
					<CustomCarousel items={carouselItems} />
				</section>

				<section className={`w-full ${styles.section2}`}>
					<h2 className={`text-center`}>
						El inglés no es un arte, es una herramienta.
					</h2>
					<p className={`text-center`}>
						El arte debe tener perfección. El uso correcto de una herramienta
						requiere práctica, seguridad y convicción. En{" "}
						<span className="text-customPurple font-bold">Visioneers</span>,
						ganarás en el dominio del inglés para que seas más hábil al
						comunicarte.
					</p>
				</section>

				<section className={` ${styles.servicesContainer}`}>
					<h2 className={`${styles.servicesTitle}`}>
						Nuestros <span className="text-customPurple"> Servicios</span>
					</h2>
					<div className={styles.services}>
						<article className={styles.service}>
							<Image
								src={HomeIcon1}
								alt="Icono de desarrollo lingüístico en inglés"
								height={150}
								width={150}
								className={styles.carouselItem_image}
							/>
							<p className={`text-center`}>Desarrollo lingüístico en inglés</p>
						</article>
						<article className={styles.service}>
							<Image
								src={HomeIcon2}
								alt="Icono de manejo de conversaciones difíciles"
								height={150}
								width={150}
								className={styles.carouselItem_image}
							/>
							<p className={`text-center`}>
								Manejo de Conversaciones Difíciles
							</p>
						</article>
						<article className={styles.service}>
							<Image
								src={HomeIcon3}
								alt="Icono de inteligencia emocional"
								height={150}
								width={150}
								className={styles.carouselItem_image}
							/>
							<p className={`text-center`}>
								Inteligencia Emocional en la Comunicación
							</p>
						</article>
						<article className={styles.service}>
							<Image
								src={HomeIcon4}
								alt="Icono de Team Building"
								height={150}
								width={150}
								className={styles.carouselItem_image}
							/>
							<p className={`text-center`}>Team Building</p>
						</article>
					</div>
				</section>

				<section className={styles.videoContainer}>
					<iframe
						className={styles.video}
						src="https://www.youtube.com/embed/EtmgJEAoCQI?si=bDhu4b27S58NHPY4"
						title="Visioneers Video"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
						allowFullScreen
					></iframe>
				</section>

				<section className={` ${styles.bulletPointsContainer}`}>
					<div className={styles.bulletsLeftSide}>
						<h3 className={styles.bulletsTitle}>Por qué Visioneers</h3>
					</div>
					<div className={styles.bulletsRightSide}>
						<div className={styles.bulletPoint}>
							<h5 className="font-bold">Desarrollo Lingüístico en Inglés</h5>
							<p>
								Nos enfocamos en ampliar y fortalecer las habilidades de
								comunicación en inglés y liderazgo, a través del desarrollo de
								la inteligencia emocional y la toma de decisiones.
							</p>
						</div>
						<div className={styles.bulletPoint}>
							<h5 className="font-bold">
								Programas Personalizados para Equipos
							</h5>
							<p>
								Adaptamos nuestras soluciones a las necesidades específicas de
								tu empresa para fortalecer la integración del equipo y potenciar
								el liderazgo.
							</p>
						</div>
						<div className={styles.bulletPoint}>
							<h5 className="font-bold">Resultados Transformadores</h5>
							<p>
								Nuestros programas mejoran las habilidades lingüísticas y
								fortalecen la capacidad de tu equipo para liderar y resolver
								conflictos.
							</p>
						</div>
					</div>
				</section>

				<section className={` ${styles.section3}`}>
					<h2 className={`text-center hx2 font-bold mb-20`}>
						<span className="text-customPurple "> Eleva </span> el potencial de
						tu Empresa
					</h2>
					<p className=" text-center">
						En <span className="font-bold">Visioneers</span>, creemos que la
						clave para un liderazgo efectivo es el desarrollo integral de
						habilidades en inglés.
					</p>

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
			</main>
		</>
	);
}

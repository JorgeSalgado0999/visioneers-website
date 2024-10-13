import Image from "next/image";
import Head from "next/head";
import styles from "./nosotros.module.css";
import {BannerNosotros} from "@/assets";
import {ContactSection} from "../components/organisms/contactSection";

export const metadata = {
	title:
		"Nosotros | Visioneers - Equipo especializado en desarrollo y comunicación",
	description:
		"Conoce al equipo de Visioneers, expertos en acompañamiento personal y profesional. Especialistas en marketing, desarrollo lingüístico y liderazgo.",
};

export default function Nosotros() {
	const people = [
		{
			image: "",
			name: "Ixchel Quezada",
			description:
				"Soy mexicana, criada por un padre canadiense. Soy experta en el desarrollo lingüístico del idioma inglés, con especialización en niveles básico y avanzado. Me destaco en la creación de cursos personalizados, diseñados específicamente para cumplir con los objetivos únicos de cada cliente. Facilito el aprendizaje mediante un acompañamiento centrado en las fortalezas y el estilo de aprendizaje de cada persona.",
		},
		{
			image: "",
			name: "Chepe Espinoza",
			description:
				"Soy un apasionado de los acompañamientos individuales y grupales para impulsar el desarrollo personal y profesional. Me enfoco en diseñar, crear e influir en ambientes laborales que favorecen la integración, el sentido de pertenencia y la consolidación de vínculos. Estoy convencido de que los líderes de las empresas pueden influir de manera determinante en el logro de resultados y en la satisfacción de las personas.",
		},
		{
			image: "",
			name: "Juan Espinosa",
			description:
				"Soy especialista en marketing digital, con experiencia en el desarrollo y ejecución de campañas en Google Ads y Meta. Actualmente me desempeño como Social Media Strategist, liderando un equipo que gestiona diversas cuentas, donde creamos estrategias personalizadas y efectivas para cada cliente. En Visioneers, soy responsable del marketing y de toda la comunicación visual y de marca.",
		},
	];

	return (
		<main className="w-full">
			<Head>
				<title>
					Nosotros | Visioneers - Equipo especializado en desarrollo y
					comunicación
				</title>
				<meta
					name="description"
					content="Conoce al equipo de Visioneers, expertos en acompañamiento personal y profesional. Especialistas en marketing, desarrollo lingüístico y liderazgo."
				/>
				<meta
					name="keywords"
					content="desarrollo lingüístico, marketing digital, acompañamientos, liderazgo, Visioneers"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Nosotros | Visioneers - Equipo especializado en desarrollo y comunicación"
				/>
				<meta
					property="og:description"
					content="Conoce al equipo de Visioneers, expertos en acompañamiento personal y profesional. Especialistas en marketing, desarrollo lingüístico y liderazgo."
				/>
				<meta
					property="og:image"
					content="https://visioneers.com/images/banner-nosotros.png"
				/>
				<meta property="og:url" content="https://visioneers.com/nosotros" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			{/* H1 oculto para SEO */}
			<h1 style={{display: "none"}}>
				Visioneers - Equipo especializado en desarrollo y comunicación
			</h1>

			{/* Sección del banner */}
			<section className={styles.banner}>
				<Image
					src={BannerNosotros}
					alt="Conoce al equipo de Visioneers"
					layout="fill"
					objectFit="cover"
					className={styles.bannerImage}
				/>
				<h2 className={styles.bannerTitle}>Nosotros</h2>
			</section>

			{/* Información del equipo */}
			<section className={styles.people}>
				{/* <h2 className="text-center">Nuestro Equipo</h2> */}
				{people.map((person, index) => (
					<div className={styles.personCard} key={index}>
						<Image src={BannerNosotros} alt={`Foto de ${person.name}`} />
						<h3>{person.name}</h3>
						<p>{person.description}</p>
					</div>
				))}
			</section>

			{/* Contacto */}
			<ContactSection />

			{/* Schema Markup */}
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					name: "Visioneers",
					url: "https://visioneers.com",
					description:
						"Conoce al equipo de Visioneers, expertos en acompañamiento personal y profesional.",
					logo: "https://visioneers.com/logo.png",
					contactPoint: [
						{
							"@type": "ContactPoint",
							telephone: "+52-33-2268-8620",
							contactType: "Customer Service",
							areaServed: "MX",
							availableLanguage: ["Spanish", "English"],
						},
					],
					member: people.map((person) => ({
						"@type": "Person",
						name: person.name,
						description: person.description,
						image: `https://visioneers.com/images/${person.image}`,
					})),
				})}
			</script>
		</main>
	);
}

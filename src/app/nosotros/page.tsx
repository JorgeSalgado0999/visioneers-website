import Image from "next/image";
import styles from "./nosotros.module.css";
import {BannerNosotros} from "@/assets";

export default function Nosotros() {
	const people = [
		{
			image: "",
			name: "Ixchel Quezada",
			description:
				"Soy mexicana, criada por un padre canadiense. Soy experta en el desarrollo lingüístico del idioma inglés, con especialización en niveles básico y avanzado. Me destaco en la creación de cursos personalizados, diseñados específicamente para cumplir con los objetivos únicos de cada cliente. Facilito el aprendizaje mediante un acompañamiento centrado en las fortalezas y el estilo de aprendizaje de cada persona",
		},
		{
			image: "",
			name: "Chepe Espinoza",
			description:
				"Soy un apasionado de los acompañamientos individuales y grupales para impulsar el desarrollo personal y profesional. Me enfoco en diseñar, crear e influir en ambientes laborales que favorecen la integración, el sentido de pertenencia y la consolidación de vínculos. Estoy convencido de que los líderes de la empresas pueden influir de manera determinante en el logro de resultados y en la satisfacción de las personas.",
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
			<section className={styles.banner}>
				<Image
					src={BannerNosotros}
					alt="Nosotros"
					layout="fill"
					objectFit="cover"
					className={styles.bannerImage}
				/>
				<h2 className={styles.bannerTitle}>Nosotros</h2>
			</section>

			<section className={styles.people}>
				{people.map((person, index) => (
					<div className={styles.personCard} key={index}>
						<Image src={BannerNosotros} alt={person.name} />
						<h3>{person.name}</h3>
						<p>{person.description}</p>
					</div>
				))}
			</section>

			<section className={styles.contact}>
				<h3>¿Deseas una cotización a la medida?</h3>
			</section>
		</main>
	);
}

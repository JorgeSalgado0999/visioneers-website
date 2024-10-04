import Image from "next/image";
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

export default function Servicios() {
	return (
		<main className="w-full">
			<section className={styles.banner}>
				<Image
					src={BannerServicios}
					alt="Nosotros"
					layout="fill"
					objectFit="cover"
					className={styles.bannerImage}
				/>
				<h2 className={styles.bannerTitle}>Servicios</h2>
			</section>

			<section className={`${styles.infoSection}`}>
				<div className={styles.servicesContainer}>
					<div className={styles.service}>
						<Image
							src={HomeIcon1}
							alt="servicios icono 1"
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
							alt="servicios icono 2"
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
						alt="servicios imagen 1"
						objectFit="cover"
						className={styles.bgImage}
					/>
				</div>
			</section>

			<section className={`${styles.infoSection} ${styles.infoSection2}`}>
				<div className={styles.bgImageContainer}>
					<Image
						src={servicesBg2}
						alt="servicios imagen 1"
						className={styles.bgImage2}
					/>
				</div>
				<div className={styles.servicesContainer}>
					<div className={styles.service}>
						<Image
							src={HomeIcon3}
							alt="servicios icono 1"
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
							alt="servicios icono 4"
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

			<section className={styles.contact}>
				<div className={styles.leftSide}>
					<h3>Eleva el Potencial de tu Empresa</h3>
				</div>
				<div className="rightSide">
					<h5>Contáctanos</h5>
				</div>
			</section>
		</main>
	);
}

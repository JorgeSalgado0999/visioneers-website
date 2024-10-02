import Image from "next/image";
import styles from "./mentorias.module.css";
import {BannerMentorias} from "@/assets";

export default function Mentorias() {
	return (
		<main className="w-full">
			<section className={styles.banner}>
				<Image
					src={BannerMentorias}
					alt="Nosotros"
					layout="fill"
					objectFit="cover"
					className={styles.bannerImage}
				/>
				<h2 className={styles.bannerTitle}>Acompañamientos Personalizados</h2>
			</section>

			<section className={`${styles.mentoriasContent}`}>
				<p className={styles.mentoriasText}>
					Entendemos que cada organización es única, y que los retos y objetivos
					de comunicación en inglés pueden variar ampliamente. Es por eso que
					ofrecemos Acompañamientos Personalizados, diseñados para{" "}
					<span className="text-customBlue font-bold">
						atender las necesidades específicas de tu equipo
					</span>{" "}
					y potenciar sus habilidades de manera efectiva y sostenida.
				</p>
			</section>

			<section className={`${styles.keyBenefits}`}>
				<div className="leftSide">
					<iframe
						className="w-full max-w-3xl h-auto"
						src="https://www.youtube.com/embed/EtmgJEAoCQI?si=bDhu4b27S58NHPY4"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="rightSide">
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
							<span className={styles.highlightedText}>Éxito de tu equipo</span>
						</li>
					</ul>
				</div>
			</section>

			<section className={styles.contact}>
				<div className={styles.leftSide}>
					<h3>¿Deseas una cotización a la medida?</h3>
					<p>
						Déjanos tus datos y nos pondremos en contacto contigo tan pronto nos
						sea posible.
					</p>
				</div>
				<div className="rightSide">
					<h5>Formulario</h5>
				</div>
			</section>
		</main>
	);
}

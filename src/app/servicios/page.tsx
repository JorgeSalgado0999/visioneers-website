import Image from "next/image";
import styles from "./servicios.module.css";
import {BannerServicios, HomeIcon1} from "@/assets";

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

			<section className={styles.sectionInfo}>
				<Image
					src={HomeIcon1}
					alt="Nosotros"
					layout="fill"
					objectFit="cover"
					className={styles.bannerImage}
				/>
				<h2 className={styles.bannerTitle}>Servicios</h2>
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

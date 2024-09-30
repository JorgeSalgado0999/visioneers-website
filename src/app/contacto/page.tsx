import Image from "next/image";
import styles from "./contacto.module.css";
import {BannerContacto, World} from "@/assets";
import {IoLogoWhatsapp} from "react-icons/io";
import {MdPhoneInTalk} from "react-icons/md";

export default function Contacto() {
	return (
		<main className="w-full">
			<section className={styles.banner}>
				<Image
					src={BannerContacto}
					alt="Nosotros"
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
							alt="Mundo imagen"
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
								<p>1 33 2268 8620</p>
								<p>1 33 1185 5150</p>
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
								>
									O bien, click aquí
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

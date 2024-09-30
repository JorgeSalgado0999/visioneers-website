// import Image from "next/image";
import CustomCarousel from "./components/molecules/carousel";
import styles from "./Home.module.css";
import {HomeIcon1, HomeIcon2, HomeIcon3, HomeIcon4} from "@/assets";
import Image from "next/image";
import {FaWhatsapp} from "react-icons/fa";

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
		<main className="w-full">
			{/* <h1 className="text-4xl text-white">
					No enseñamos inglés, empoderamos empresas y personas
				</h1> */}
			<div className={styles.carouselContainer}>
				<CustomCarousel items={carouselItems} />
			</div>

			<section className={`w-full px-40 py-20`}>
				<h2 className={`text-center`}>
					El inglés no es un arte, es una herramienta.
				</h2>
				<p className={`text-center`}>
					El arte debe tener perfección. El uso correcto de una herramienta,
					unicamente conlleva práctica. Dominar el manejo de la herramienta{" "}
					<span className="text-customPurple font-bold">
						requiere práctica, seguridad y convicción.
					</span>{" "}
					En <span className="font-bold">Visioneers</span>, ganarás en el
					dominio del inglés para que seas más hábil al comunicarte.
				</p>
			</section>

			<section className={` ${styles.servicesContainer}`}>
				<h2 className={`text-center hx2 font-bold mb-20`}>
					Nuestros <span className="text-customPurple "> Servicios</span>
				</h2>
				<div className={styles.services}>
					<div className={styles.service}>
						<Image
							src={HomeIcon1}
							alt="Desarrollo lingüístico"
							height={150}
							width={150}
							style={{objectFit: "cover"}}
							className={styles.carouselItem_image}
						/>
						<p className={`text-center`}>Desarrollo lingüístico en inglés</p>
					</div>
					<div className={styles.service}>
						<Image
							src={HomeIcon2}
							alt="Manejo de Conversaciones Difíciles"
							height={150}
							width={150}
							objectFit="cover"
							className={styles.carouselItem_image}
						/>
						<p className={`text-center`}>Manejo de Conversaciones Difíciles</p>
					</div>
					<div className={styles.service}>
						<Image
							src={HomeIcon3}
							alt="Inteligencia Emocional en la Comunicación"
							height={150}
							width={150}
							objectFit="cover"
							className={styles.carouselItem_image}
						/>
						<p className={`text-center`}>
							Inteligencia Emocional en la Comunicación
						</p>
					</div>
					<div className={styles.service}>
						<Image
							src={HomeIcon4}
							alt="Team Building"
							height={150}
							width={150}
							objectFit="cover"
							className={styles.carouselItem_image}
						/>
						<p className={`text-center`}>Team Building</p>
					</div>
				</div>
			</section>

			<section className="w-full h-[60rem] px-20 py-[10rem] flex justify-center">
				<iframe
					className="w-full max-w-3xl h-auto"
					src="https://www.youtube.com/embed/EtmgJEAoCQI?si=bDhu4b27S58NHPY4"
					title="YouTube video player"
					frameBorder="0"
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
							Más allá de enseñar inglés, nos enfocamos en ampliar y fortalecer
							las habilidades de comunicación en inglés y liderazgo, a través
							del desarrollo de la inteligencia emocional, la gestión de
							conflictos y la toma de decisiones.
						</p>
					</div>

					<div className={styles.bulletPoint}>
						<h5 className="font-bold">Programas Personalizados para Equipos</h5>
						<p>
							Adaptamos nuestras soluciones a las necesidades específicas de tu
							empresa, ya sea para fortalecer la integración del equipo,
							resolver conflictos o potenciar el liderazgo.
						</p>
					</div>

					<div className={styles.bulletPoint}>
						<h5 className="font-bold">Resultados Transformadores</h5>
						<p>
							Nuestros programas mejoran las habilidades lingüísticas y
							fortalecen la capacidad de tu equipo para liderar, resolver
							conflictos y trabajar en conjunto de manera más efectiva.
						</p>
					</div>
				</div>
			</section>

			<section className="w-full h-[50rem] px-20 py-[10rem] flex-col justify-center items-center ">
				<h2 className={`text-center hx2 font-bold mb-20`}>
					<span className="text-customPurple "> Eleva </span> el potencial de tu
					Empresa
				</h2>
				<p className=" text-center">
					En <span className="font-bold">Visioneers</span>, creemos que la clave
					para un liderazgo efectivo y una comunicación sólida es el desarrollo
					integral de habilidades en inglés. Descubre cómo podemos ayudar a tu
					organización a alcanzar nuevas alturas a través de programas diseñados
					para transformar la manera en que tu equipo se comunica, lidera y
					colabora.
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
	);
}

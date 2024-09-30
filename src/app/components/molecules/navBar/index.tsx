import {Logo} from "@/assets";
import Image from "next/image";
import Link from "next/link"; // Importa el componente Link de Next.js
import React from "react";

import styles from "./navBar.module.css";

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			{/* logo img  */}
			<div className={styles.logo}>
				<Link href="/">
					<Image
						src={Logo}
						alt="logo"
						layout="responsive"
						width={150}
						height={150}
					/>
				</Link>
			</div>

			<ul className={styles.menuOptions}>
				<li className={styles.option}>
					<Link href="/mentorias">Acompañamientos personalizados</Link>
				</li>
				<li className={styles.option}>
					<Link href="/servicios">Servicios</Link>
				</li>
				<li className={styles.option}>
					<Link href="/nosotros">Nosotros</Link>
				</li>
				<li className={styles.option}>
					<Link href="/contacto">Contacto</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;

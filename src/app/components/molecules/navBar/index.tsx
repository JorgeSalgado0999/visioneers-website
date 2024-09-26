import {Logo} from "@/assets";
import Image from "next/image";
import React from "react";

import styles from "./navBar.module.css";

const NavBar = () => {
	return (
		<div className={styles.navBar}>
			{/* logo img  */}
			<div className={styles.logo}>
				<Image
					src={Logo}
					alt="logo"
					layout="responsive"
					width={150}
					height={150}
				/>
			</div>

			<ul className={styles.menuOptions}>
				<li className={styles.option}>Acompañamientos personalizados</li>
				<li className={styles.option}>Servicios</li>
				<li className={styles.option}>Nosotros</li>
				<li className={styles.option}>Contacto</li>
			</ul>
		</div>
	);
};

export default NavBar;

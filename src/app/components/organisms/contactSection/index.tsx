"use client";

import React, {useState} from "react";
import styles from "./contactSection.module.css";

// Definimos la interfaz para los errores de validación
interface ValidationErrors {
	empresa?: string;
	nombre?: string;
	estado?: string;
	telefono?: string;
	mensaje?: string;
}

// Definimos la URL de la API (reemplaza con tu URL)
const API_URL = "https://example.com/api/contact"; // Cambia esta URL por la tuya

export const ContactSection = () => {
	// Estados para cada campo del formulario
	const [empresa, setEmpresa] = useState<string>("");
	const [nombre, setNombre] = useState<string>("");
	const [estado, setEstado] = useState<string>("");
	const [telefono, setTelefono] = useState<string>("");
	const [mensaje, setMensaje] = useState<string>("");

	// Estado para manejar errores de validación
	const [errors, setErrors] = useState<ValidationErrors>({});

	// Función para validar el número de teléfono
	const validatePhone = (phone: string): boolean => {
		// Expresión regular para validar números de teléfono
		const phoneRegex = /^[0-9]{10}$/;
		return phoneRegex.test(phone);
	};

	// Función que se ejecuta al enviar el formulario
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Objeto para almacenar errores
		const validationErrors: ValidationErrors = {};

		// Validación de campos vacíos
		if (!empresa.trim())
			validationErrors.empresa = "El campo Empresa es obligatorio.";
		if (!nombre.trim())
			validationErrors.nombre = "El campo Nombre es obligatorio.";
		if (!estado.trim())
			validationErrors.estado = "El campo Estado es obligatorio.";
		if (!telefono.trim()) {
			validationErrors.telefono = "El campo Teléfono es obligatorio.";
		} else if (!validatePhone(telefono.trim())) {
			validationErrors.telefono = "El número de teléfono no es válido.";
		}
		if (!mensaje.trim())
			validationErrors.mensaje = "El campo Mensaje es obligatorio.";

		// Si hay errores, actualizamos el estado de errores
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			// Si no hay errores, proceder a enviar la información
			try {
				const response = await fetch(API_URL, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						empresa,
						nombre,
						estado,
						telefono,
						mensaje,
					}),
				});

				// Verificar la respuesta del servidor
				if (!response.ok) {
					throw new Error("Error en el envío de los datos.");
				}

				// Limpiar el formulario si es necesario
				setEmpresa("");
				setNombre("");
				setEstado("");
				setTelefono("");
				setMensaje("");
				setErrors({}); // Limpiar los errores si todo fue exitoso

				console.log("Datos enviados correctamente.");
			} catch (error) {
				console.error("Error al enviar los datos:", error);
			}
		}
	};

	return (
		<section className={styles.contactSection}>
			<div className={styles.leftSide}>
				<h3>¿Deseas una cotización a la medida?</h3>
				<p>Déjanos tus datos y nos pondremos en contacto contigo.</p>
			</div>
			<div className={styles.rightSide}>
				<form className={styles.contactForm} onSubmit={handleSubmit}>
					<fieldset>
						<legend className={styles.srOnly}>Formulario de contacto</legend>

						<div className={styles.formGroup}>
							<label htmlFor="empresa" className={styles.label}>
								* Empresa u organización
							</label>
							<input
								type="text"
								id="empresa"
								name="empresa"
								className={styles.input}
								value={empresa}
								onChange={(e) => setEmpresa(e.target.value)}
							/>
							{errors.empresa && (
								<span className={styles.error}>{errors.empresa}</span>
							)}
						</div>

						<div className={styles.formGroup}>
							<label htmlFor="nombre" className={styles.label}>
								* Nombre
							</label>
							<input
								type="text"
								id="nombre"
								name="nombre"
								className={styles.input}
								value={nombre}
								onChange={(e) => setNombre(e.target.value)}
							/>
							{errors.nombre && (
								<span className={styles.error}>{errors.nombre}</span>
							)}
						</div>

						<div className={styles.formGroup}>
							<label htmlFor="estado" className={styles.label}>
								* Estado
							</label>
							<input
								type="text"
								id="estado"
								name="estado"
								className={styles.input}
								value={estado}
								onChange={(e) => setEstado(e.target.value)}
							/>
							{errors.estado && (
								<span className={styles.error}>{errors.estado}</span>
							)}
						</div>

						<div className={styles.formGroup}>
							<label htmlFor="telefono" className={styles.label}>
								* Teléfono
							</label>
							<input
								type="tel"
								id="telefono"
								name="telefono"
								className={styles.input}
								value={telefono}
								onChange={(e) => setTelefono(e.target.value)}
							/>
							{errors.telefono && (
								<span className={styles.error}>{errors.telefono}</span>
							)}
						</div>

						<div className={styles.formGroup}>
							<label htmlFor="mensaje" className={styles.label}>
								* Compártenos un poco de lo que necesitas
							</label>
							<textarea
								id="mensaje"
								name="mensaje"
								className={styles.textArea}
								value={mensaje}
								onChange={(e) => setMensaje(e.target.value)}
							></textarea>
							{errors.mensaje && (
								<span className={styles.error}>{errors.mensaje}</span>
							)}
						</div>

						<div className={styles.buttonGroup}>
							<button type="submit" className={styles.button}>
								Enviar
							</button>
						</div>
					</fieldset>
				</form>
			</div>
		</section>
	);
};

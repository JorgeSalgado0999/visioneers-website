"use client";

import React, {useEffect, useState} from "react";
import styles from "./contactSection.module.css";

// Definimos la interfaz para los errores de validación
interface ValidationErrors {
	empresa?: string;
	nombre?: string;
	estado?: string;
	telefono?: string;
	correo?: string;
	mensaje?: string;
}

// Definimos la URL de la API (reemplaza con tu URL)
const API_URL =
	"https://6zd2gu40qg.execute-api.us-east-1.amazonaws.com/send-form";

// Constantes para el nombre de la clave en localStorage y el tiempo en milisegundos
const FORM_SUBMISSION_KEY = "formSubmissionTimestamp";
const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

export const ContactSection = () => {
	// Estados para cada campo del formulario
	const [empresa, setEmpresa] = useState<string>("");
	const [nombre, setNombre] = useState<string>("");
	const [estado, setEstado] = useState<string>("");
	const [telefono, setTelefono] = useState<string>("");
	const [correo, setCorreo] = useState<string>("");
	const [mensaje, setMensaje] = useState<string>("");
	const [responseError, setResponseError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const [hasLocalSubmitted, setHasLocalSubmitted] = useState(false);
	// Estado para manejar errores de validación
	const [errors, setErrors] = useState<ValidationErrors>({});

	// Verifica si ya se envió el formulario en las últimas 24 horas
	useEffect(() => {
		const lastSubmission = localStorage.getItem(FORM_SUBMISSION_KEY);
		if (lastSubmission) {
			const elapsedTime = Date.now() - parseInt(lastSubmission, 10);
			if (elapsedTime < ONE_DAY_MS) {
				setHasSubmitted(true);
			}
		}
	}, []);

	// Función para validar el número de teléfono
	const validatePhone = (phone: string): boolean => /^[0-9]{10}$/.test(phone);

	// Función para validar el correo electrónico
	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	// function esperar(ms: number) {
	// 	return new Promise((resolve) => setTimeout(resolve, ms));
	// }

	// Estado para manejar la respuesta del servidor
	const [response, setResponse] = useState<string>("");

	// Función que se ejecuta al enviar el formulario
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		// await esperar(2000);

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
		if (!correo.trim()) {
			validationErrors.correo = "El campo Correo es obligatorio.";
		} else if (!validateEmail(correo.trim())) {
			validationErrors.correo = "El correo no tiene un formato válido.";
		}
		if (!mensaje.trim())
			validationErrors.mensaje = "El campo Mensaje es obligatorio.";

		// Si hay errores, actualizamos el estado de errores
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			setLoading(false);
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
						correo,
						mensaje,
					}),
				});

				if (response.ok) {
					setHasLocalSubmitted(true);
					setResponseError("");
					setResponse(
						"Hemos enviado tu información con éxito. En breve nos pondremos en contacto contigo."
					);
					// Limpiar el formulario
					setEmpresa("");
					setNombre("");
					setEstado("");
					setTelefono("");
					setCorreo("");
					setMensaje("");
					setErrors({});

					// Guardar la fecha y hora de la última vez que se envió el formulario
					localStorage.setItem(FORM_SUBMISSION_KEY, Date.now().toString());
					// setHasSubmitted(true); // Revisar
				} else {
					setResponseError(
						"Hubo un problema al enviar los datos. Intenta de nuevo mas tarde."
					);
					throw new Error("Error en el envío de los datos.");
				}
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (error) {
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				// console.error("Error al enviar los datos:", error);
				setResponseError(
					"Hubo un problema al enviar los datos. Intenta de nuevo mas tarde."
				);
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<section className={styles.contactSection}>
			<div className={styles.leftSide}>
				<h3>¿Deseas una cotización a la medida?</h3>
				<p>Déjanos tus datos y nos pondremos en contacto contigo.</p>
			</div>
			{hasSubmitted ? (
				<div className={styles.confirmationMessage}>
					<p>¡Gracias por contactarnos!</p>
					<p>
						Recibimos tu mensaje y nos pondremos en contacto contigo en breve.
					</p>
				</div>
			) : (
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
								<label htmlFor="correo" className={styles.label}>
									* Correo Electrónico
								</label>
								<input
									type="email"
									id="correo"
									name="correo"
									className={styles.input}
									value={correo}
									onChange={(e) => setCorreo(e.target.value)}
								/>
								{errors.correo && (
									<span className={styles.error}>{errors.correo}</span>
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
								<button
									type="submit"
									className={styles.button}
									disabled={loading || hasLocalSubmitted}
								>
									Enviar
								</button>
								{loading && (
									<span className={styles.loading}>
										Espera mientras enviamos tu información...
									</span>
								)}
								{responseError && (
									<span className={styles.error}>{responseError}</span>
								)}
								{response && (
									<span className={styles.response}>{response}</span>
								)}
							</div>
						</fieldset>
					</form>
				</div>
			)}
		</section>
	);
};

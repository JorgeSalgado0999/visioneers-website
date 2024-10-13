// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: "https://visioneers.com.mx",
	generateRobotsTxt: true, // (Opcional) Generar robots.txt automáticamente
	sitemapSize: 7000, // (Opcional) Define el tamaño máximo de cada archivo de sitemap.xml
	changefreq: "daily", // Define la frecuencia con la que cambian las páginas
	priority: 0.7, // Define la prioridad de las URLs
};

// import Image from "next/image";
import {FullNavBar} from "./components/organisms/fullNavBar";
import Carousel from "./components/molecules/carousel";

export default function Home() {
	return (
		<div className="">
			<FullNavBar />
			{/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
			<main className="container bg-slate-800">
				{/* <h1 className="text-4xl text-white">
					No enseñamos inglés, empoderamos empresas y personas
				</h1> */}

				<Carousel />
			</main>
		</div>
	);
}

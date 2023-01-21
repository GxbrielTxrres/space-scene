import "@/styles/globals.css";

import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls, Stars } from "@react-three/drei";

import { Road } from "components/Road";
import { Car } from "components/Car";
import { Moon } from "components/Moon";

import {
	ChromaticAberration,
	EffectComposer,
} from "@react-three/postprocessing";
import Music from "components/Music";

export default function App({ Component, pageProps }) {
	return (
		<div className="webgl">
			<Canvas>
				<Environment preset="lobby" blur={1} />
				<color args={["#000000"]} attach="background" />
				<EffectComposer>
					<ChromaticAberration offset={[0.01, 0.01]} />
				</EffectComposer>

				<Moon />
				<Center>
					<Music />
					<Car />
					<Road />
				</Center>
				<Stars
					radius={40}
					depth={120}
					factor={10}
					count={2000}
					saturation={0.4}
					fade={true}
					speed={0.5}
				/>
			</Canvas>
			<Component {...pageProps} />;
		</div>
	);
}

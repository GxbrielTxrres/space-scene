import "@/styles/globals.css";
import { Canvas } from "@react-three/fiber";
import {
	Environment,
	Center,
	OrbitControls,
	Stars,
	Preload,
	Loader,
} from "@react-three/drei";

import { Road } from "components/Road";
import { Car } from "components/Car";
import { Moon } from "components/Moon";
import Music from "components/Music";

import {
	ChromaticAberration,
	EffectComposer,
	Glitch,
} from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
export default function App({ Component, pageProps }) {
	return (
		<div className="webgl">
			<Canvas>
				<Perf />

				<Preload all />
				<Environment resolution={64} preset="lobby" blur={1} />

				<EffectComposer
					disableNormalPass
					multisampling={0.5}
					autoClear
					renderPriority={1}
				>
					<ChromaticAberration offset={[0.01, 0.01]} />
				</EffectComposer>

				<Moon />
				<Stars
					radius={40}
					depth={120}
					factor={10}
					count={500}
					saturation={0.4}
					fade
					speed={1}
				/>

				<Center>
					<Music />
					<Car />
					<Road />
				</Center>
			</Canvas>
			<Loader />
			<Component {...pageProps} />;
		</div>
	);
}

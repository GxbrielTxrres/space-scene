import { Html } from "@react-three/drei";

export default function Music() {
	return (
		<Html
			position={[-9, 20, 60]}
			rotation={[0, -Math.PI / 6, 0]}
			transform
			occlude="blending"
		>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/RWAxhAMZqz4"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</Html>
	);
}

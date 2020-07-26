import React, { useEffect } from "react";

import { CanvasBuild } from "./../../utils";
import { MapConfig } from "./../../types";

import { Panel } from "../Panels";

export type ISizes = null | {
	width: number;
	height: number;
};

export const EditorCanvas: React.FC<MapConfig> = ({ tiles }) => {
	useEffect(() => {
		const { /* canvas, camera, */ scene, engine } = CanvasBuild(
			"#main-canvas",
			tiles as any[],
		);

		engine.runRenderLoop(() => {
			scene.render();
		});

		const resizeHandler = () => {
			engine.resize();
		};

		window.addEventListener("resize", resizeHandler, false);
		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, [tiles]);

	return (
		<>
			<canvas id="main-canvas"></canvas>
			<Panel />
		</>
	);
};

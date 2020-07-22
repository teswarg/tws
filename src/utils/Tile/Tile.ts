import {
	Scene,
	Vector3,
	ActionManager,
	ExecuteCodeAction,
	StandardMaterial,
	Tools,
	MeshBuilder,
} from "babylonjs";

import { setCurrentObject } from "../../store/editorStore";

import { TileGeometryConfig, textures } from "./index";

export const tileRotation = Tools.ToRadians(90);
export const defaultTerrain = "Grassland";

export const Tile = ({
	position,
	scene,
}: {
	position: Vector3;
	scene: Scene;
}) => {
	const {
		radiusBottom,
		radiusTop,
		height,
		radialSegments,
	} = TileGeometryConfig;
	const mesh = MeshBuilder.CreateCylinder("tile", {
		height,
		diameterTop: radiusTop * 2,
		diameterBottom: radiusBottom * 2,
		tessellation: radialSegments,
		hasRings: true,
	});
	const material = new StandardMaterial("tile material", scene);

	material.diffuseColor = textures[defaultTerrain];

	mesh.material = material;

	mesh.rotation = new Vector3(0, tileRotation, 0);
	mesh.position = position;

	const actionManager = new ActionManager(scene);
	mesh.actionManager = actionManager;
	mesh.actionManager.registerAction(
		new ExecuteCodeAction(ActionManager.OnPickTrigger, (event) => {
			setCurrentObject(event.source);
		}),
	);

	return mesh;
};

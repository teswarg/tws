import React from "react";
import { useStore } from "effector-react";

import "./index.css";

import {
	Panel as BulmaPanel,
	PanelHeading,
	PanelBlock,
	PanelIcon,
} from "./../../bulma";
import { editorStore } from "./../../store/editorStore";

import { BaseTerrainEnum } from "./../../types";

export const Panel = () => {
	const { currentInstrument } = useStore(editorStore);

	return (
		<BulmaPanel isColor="info" className="canvas-panel">
			<PanelHeading>{currentInstrument}</PanelHeading>
			<PanelBlock className="panel-select">
				<p className="control has-icons-left">
					<input className="input" type="text" placeholder="Search" />
					<span className="icon is-left">
						<i className="fas fa-search" aria-hidden="true"></i>
					</span>
				</p>
			</PanelBlock>
			<PanelBlock isActive className="panel-select">
				<PanelIcon icon="fas fa-book" />
				Base terrain
				<div className="select">
					<select>
						{Object.keys(BaseTerrainEnum).map((terrain) => (
							<option value={terrain} key={terrain}>
								{terrain}
							</option>
						))}
					</select>
				</div>
			</PanelBlock>
			<PanelBlock className="panel-select">
				<PanelIcon icon="fas fa-book" />
				Base terrain
				<div className="select">
					<select>
						{Object.keys(BaseTerrainEnum).map((terrain) => (
							<option value={terrain} key={terrain}>
								{terrain}
							</option>
						))}
					</select>
				</div>
			</PanelBlock>
			<PanelBlock>
				<PanelIcon icon="fas fa-book" />
				minireset.css
			</PanelBlock>
			<PanelBlock>
				<PanelIcon icon="fas fa-book" />
				jgthms.github.io
			</PanelBlock>
			<PanelBlock>
				<PanelIcon icon="fas fa-code-branch" />
				daniellowtw/infboard
			</PanelBlock>
			<PanelBlock>
				<PanelIcon icon="fas fa-code-branch" />
				mojs
			</PanelBlock>
			<PanelBlock>
				<input type="checkbox" />
				remember me
			</PanelBlock>
			<PanelBlock>
				<button className="button is-link is-outlined is-fullwidth">
					Reset all
				</button>
			</PanelBlock>
		</BulmaPanel>
	);
};
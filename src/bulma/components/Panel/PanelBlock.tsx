import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { getColorModifiers, getActiveModifiers } from "./../../utils";

export interface PanelBlock<T>
	extends Bulma.Tag,
		Bulma.Active,
		React.HTMLProps<T> {}

export const PanelBlock: React.FC<PanelBlock<HTMLElement>> = ({
	tag = "nav",
	isActive,
	...props
}) => {
	const className = classnames(
		"panel-block",
		{
			...getActiveModifiers({ isActive }),
		},
		props.className,
	);

	return React.createElement(tag, { ...props, className });
};

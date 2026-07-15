const TITLE_TEMPLATE = "The Engineering Sandbox |";

export const updateTitle = (newTitle = "") => {
	document.title = `${TITLE_TEMPLATE} ${newTitle}`;
	return;
};

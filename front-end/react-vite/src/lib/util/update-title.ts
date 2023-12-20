const TITLE_TEMPLATE = "The Engineering Sandbox |";

export const updateTitle = (newTitle = "") => {
  return (document.title = `${TITLE_TEMPLATE} ${newTitle}`);
};

(() => {
  const DEFAULT_HIDDEN_BUTTON_TEXT = "Show";
  const DEFAULT_EXPANDED_BUTTON_TEXT = "Hide";

  const buttonTextMap = {
    "recording-credits": {
      hidden: "Show recording credits",
      expanded: "Hide recording credits",
    },
  };

  document
    .querySelectorAll("[data-toggle-expand-id]")
    .forEach((toggleButton) => {
      const expandId = toggleButton.dataset.toggleExpandId;
      const expandElement = document.getElementById(expandId);

      expandElement.style.transition = "visibility 0s, opacity 1s ease-in-out";

      const show = (toggleButton) => {
        expandElement.style.visibility = "visible";
        expandElement.style.overflow = "auto";
        expandElement.style.opacity = "1";
        expandElement.style.height = "fit-content";
        expandElement.style.overflowY = "hidden";
        toggleButton.innerHTML = `
          <i class="fa-solid fa-circle-minus"></i> ${
            buttonTextMap[expandId].expanded ?? DEFAULT_EXPANDED_BUTTON_TEXT
          }`;
      };

      const hide = (toggleButton) => {
        expandElement.style.visibility = "hidden";
        expandElement.style.overflow = "hidden";
        expandElement.style.opacity = "0";
        expandElement.style.height = "0";
        expandElement.style.overflowY = "unset";
        toggleButton.innerHTML = `
          <i class="fa-solid fa-circle-plus"></i> ${
            buttonTextMap[expandId].hidden ?? DEFAULT_HIDDEN_BUTTON_TEXT
          }`;
      };

      if (toggleButton.hasAttribute("data-expanded")) {
        show(toggleButton);
      } else {
        hide(toggleButton);
      }

      toggleButton.onclick = ({ target }) => {
        if (target.hasAttribute("data-expanded")) {
          target.removeAttribute("data-expanded");
          hide(target);
        } else {
          target.setAttribute("data-expanded", "");
          show(target);
        }
      };
    });
})();

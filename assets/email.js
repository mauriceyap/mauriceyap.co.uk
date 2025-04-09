(() => {
  const EMAIL_VISIBLE_TIMEOUT = 5_000;

  [...document.getElementsByClassName("contact-grid__item--email")].forEach(
    (emailGridItem) => {
      const elToMutate = emailGridItem.getElementsByClassName(
        "contact-grid__item__body"
      )[0];

      if (!elToMutate) {
        return;
      }

      const originalText = elToMutate.innerText;
      let timeout;

      emailGridItem.onclick = () => {
        if (timeout) {
          clearTimeout(timeout);
        }

        // This is not meant to be a demonstration of robust encryption. This
        // very basic obfuscation is just to stop the most primitive web
        // crawlers from getting, storing and publishing my email address.
        const emailAddress = [...Array(7)].reduce(
          (b) => atob(b).split(atob("TmFDbA=="))[0],
          "Vm1wR2EwNUhSWGhUV0dST1ZtMW9WbGx0ZUV0alJsWnhWR3RPYUZKc2JETlhhMUpUWVZVeFdHUkVUbGRpV0ZKUVdWWlZlR050U2tWWGJHUlhaV3hhVlZacVNqUlhiVlpZVm10c2FsSnNXbFJhVjNSaFZWWmtjbHBFUWs5U01VcFlWakkxVjFaSFNrZFhia0pYWWtad00xVnRlR3RYUjFKR1YyeENWMkV3Y0ZoV1IzaHJZakZXY2sxWVZscGxiWGhXV1d4V1lWSldiSEpTVkd4UlZsUldiMVZVU2pOUVZUVm9VVEozUFU1aFEydz1OYUNs"
        );

        elToMutate.innerText = emailAddress;
        elToMutate.insertAdjacentHTML(
          "afterend",
          '<div class="contact-grid__item--copied-chip">Copied to clipboard!</div>'
        );
        navigator.clipboard.writeText(emailAddress);

        timeout = setTimeout(() => {
          elToMutate.innerText = originalText;
          elToMutate.parentNode.removeChild(
            elToMutate.parentNode.getElementsByClassName(
              "contact-grid__item--copied-chip"
            )[0]
          );
        }, EMAIL_VISIBLE_TIMEOUT);
      };
    }
  );
})();

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
          "Vm1wR1lWWXlSWGhYV0d4VlYwZDRWVmxVU205VlZscHpWbTFHYWxKc2NIaFZWM2gzWWtaS2RHUkVWbFZXYldoUVdWVmtTMU5XUm5OalJuQm9UV3hLTWxkV1pEUlNNRFZ6VjI1V1UySklRbkJaYkdoUFRrWmFSMWR0ZEZOaVZrWXpWR3hhYjJGR1NuSmpSVGxhWWxSR1UxUlhlR0ZUUjFaSFZHeGthR1ZyV2toV1JscHFUVlpXVjFkclZsTmlSVXBaVm0xNFlWVkdiRFpSVkVaVFZtMDVObGxyVlRGaFIwcFlWRlJXVjFKNlJraFZhMlJMVWxaYVZWVnJOVmRTVlZVMVZrY3hSMUpIU2tWaE0yUlFWa2RrTmxSdFJrUmlSRTAwVFZSUmVrNWhRMnd4TXpNNE5BPT1OYUNsNzIyODU="
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

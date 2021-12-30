window.onload = function () {
  var CSS_FRAMEWORKS = [
    {
      name: "Native",
      site: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      cdn: "",
    },
    {
      name: "Bootstrap",
      site: "https://getbootstrap.com/",
      cdn: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    },
    {
      name: "Materialize",
      site: "https://materializecss.com/",
      cdn: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    },
    {
      name: "Foundation",
      site: "https://get.foundation/",
      cdn: "https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css",
    },
    {
      name: "Bulma",
      site: "https://bulma.io/",
      cdn: "https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css",
    },
    {
      name: "UIkit",
      site: "https://getuikit.com/",
      cdn: "css/uikit.min.css",
    },
    {
      name: "Normalize.css",
      site: "https://necolas.github.io/normalize.css/",
      cdn: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
    },
    {
      name: "PURE.css",
      site: "https://purecss.io/start/",
      cdn: "https://unpkg.com/purecss@2.0.3/build/pure-min.css",
    },
    {
      name: "Tailwind",
      site: "",
      cdn: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",
    },
    {
      name: "w3.css",
      site: "https://www.w3schools.com/w3css/defaulT.asp",
      cdn: "https://www.w3schools.com/w3css/4/w3.css",
    },
    {
      name: "milligram",
      site: "https://milligram.io/",
      cdn: "https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.0/milligram.css",
    },
    {
      name: "Spectre",
      site: "https://picturepan2.github.io/spectre/",
      cdn: "https://unpkg.com/spectre.css/dist/spectre.min.css",
    },
    {
      name: "Picnic CSS",
      site: "https://picnicss.com/",
      cdn: "https://cdn.jsdelivr.net/npm/picnic",
    },
  ];

  class CssFrameworks extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      var link = document.createElement("link");
      link.rel = "stylesheet";
      document.head.appendChild(link);
      const cssButons = document.createElement("div");
      cssButons.style.display = "flex";
      cssButons.style.flexWrap = "wrap";
      cssButons.style.gap = "0.5rem";

      const frameworkLink = document.createElement("a");
      frameworkLink.style.display = "block";
      frameworkLink.style.padding = "1rem";
      CSS_FRAMEWORKS.forEach((cssFrm) => {
        const cssBtn = document.createElement("button");
        cssBtn.textContent = cssFrm.name;
        cssBtn.addEventListener("click", () => {
          link.href = cssFrm.cdn;
          frameworkLink.setAttribute("href", cssFrm.site);
          frameworkLink.textContent = cssFrm.name;
          document.querySelector("#result").textContent = "";
          document
            .querySelector("#result")
            .insertAdjacentHTML("afterbegin", textArea.value);
        });
        cssButons.appendChild(cssBtn);
      });

      const htmlEnterWarper = document.createElement("div");
      htmlEnterWarper.style.marginBottom = "1rem";

      const header = document.createElement("h2");
      header.textContent = "CSS FRAMEWORKES / RESETS TESTER";

      const textArea = document.createElement("textarea");
      textArea.setAttribute(
        "placeholder",
        "Enter HTML markup and press the FRAMEWORK button to see result"
      );
      textArea.style.width = "330px";
      textArea.style.height = "110px";
      textArea.style.fontSize = "1.5rem";

      htmlEnterWarper.append(header, textArea, cssButons, frameworkLink);

      this.shadowRoot.append(htmlEnterWarper);
    }
  }

  customElements.define("css-frameworks", CssFrameworks);
};

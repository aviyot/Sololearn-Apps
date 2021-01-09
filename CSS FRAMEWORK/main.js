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
      cdn:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
    },
    {
      name: "Materialize",
      site: "https://materializecss.com/",
      cdn:
        "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
    },
    {
      name: "Foundation",
      site: "https://get.foundation/",
      cdn:
        "https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css",
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
      cdn:
        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
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
      cdn:
        "https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.0/milligram.css",
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

  addCdn();

  function addCdn() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const cssButons = document.createElement("div");
    CSS_FRAMEWORKS.forEach((cssFrm) => {
      const cssBtn = document.createElement("button");
    const a = document.createElement("a");
         a.href = cssFrm.site;
         a.textContent = ">>";
         a.style.paddingLeft="20px";
         a.style.textDecoration = "none"

      cssBtn.textContent = cssFrm.name;

      cssBtn.appendChild(a);
   
     cssBtn.addEventListener("click", () => {
        link.href = cssFrm.cdn;
        const a = document.createElement("a");
         a.href = cssFrm.site;
         a.textContent = ">>";
         a.style.paddingLeft="20px";
         a.style.textDecoration = "none"
      });
 
 
      cssButons.appendChild(cssBtn);
    });
    document.querySelector("#cssfrm").appendChild(cssButons);
  }
  document.querySelector("#enter").addEventListener("click", function () {
    var htmlTag = document.querySelector("#htmlinput").value;
    document.querySelector("body").insertAdjacentHTML("afterend", htmlTag);
  });

  /* 
  addHref(
    "#bootstrap",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  );

  addHref("#native", "");

  addHref(
    "#mat",
    "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
  );

  addHref(
    "#fnd",
    "https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css"
  );

  addHref("#blm", "https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css");

  addHref("#uikit", "css/uikit.min.css");

  addHref(
    "#nor",
    "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
  );

  addHref("#pure", "https://unpkg.com/purecss@2.0.3/build/pure-min.css");

  addHref("#tw", "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css");

  addHref("#w3", "https://www.w3schools.com/w3css/4/w3.css");

  addHref(
    "#mg",
    "https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.0/milligram.css"
  );

  addHref("#sp", "https://unpkg.com/spectre.css/dist/spectre.min.css");

  addHref("#pic", "https://cdn.jsdelivr.net/npm/picnic");
  */
};

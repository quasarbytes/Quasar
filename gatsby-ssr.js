import React from "react";

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <meta key="httpEquiv" httpEquiv="X-UA-Compatible" content="IE=edge" />,
  <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />,
  <meta key="keywords" name="keywords" content="Quasar Bytes - Where Innovation Meets Precision in Every Pixel." />,
  <meta key="description" name="description" content="Quasar Bytes - Where Innovation Meets Precision in Every Pixel." />,
  <meta key="author" name="author" content="" />,
  <link key="styles-bs-icons" rel="stylesheet" href="/assets/css/lib/bootstrap-icons.css" />,
  <link key="styles-fa" rel="stylesheet" href="/assets/css/lib/all.min.css" />,
  <link key="styles-animate" rel="stylesheet" href="/assets/css/lib/animate.css" />,
  <link key="styles-all" rel="stylesheet" href="/assets/css/style.css" />,
  <link key="icon" rel="shortcut icon" href="/assets/img/updatedFav.svg" title="Favicon" sizes="16x16" />,
  <link key="InterFont" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />,
  <link key="MessiriFont" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap" />,
  <script key="pace" src="/assets/js/lib/pace.js"></script>,
  <script key="bootstrap" src="/assets/js/lib/bootstrap.bundle.min.js"></script>,
  <script key="mixitup" src="/assets/js/lib/mixitup.min.js"></script>,
  <script key="wow" src="/assets/js/lib/wow.min.js"></script>,
  <script key="html5shiv" src="/assets/js/lib/html5shiv.min.js"></script>,
  <script key="gtm">
    {`
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-PBJ43MVR");
    `}
  </script>
];

const PostBodyComponents = [
  <noscript key="gtm-noscript">
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-PBJ43MVR"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    ></iframe>
  </noscript>
];

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes,setPostBodyComponents }) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
  setPostBodyComponents(PostBodyComponents);
}

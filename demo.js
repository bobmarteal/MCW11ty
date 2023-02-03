// const Image = require("@11ty/eleventy-img");
// (async () => {
//   let stats = await Image(
//     "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop",
//     {
//       formats: ["avif", "webp", "jpeg"],
//       widths: [800],
//       dryRun: true,
//     }
//   );
//   console.log(
//     Image.generateHTML(stats, {
//       alt: "a big nebula",
//       loading: "lazy",
//       decoding: "async",
//     })
//   );
// })();
// const Image = require("@11ty/eleventy-img");
// (async () => {
//   let stats = await Image(
//     "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop",
//     {
//       formats: ["jpeg"],
//       widths: [1400],
//     }
//   );
//   console.log(
//     Image.generateHTML(stats, {
//       alt: "A bomb ass nebula",
//     })
//   );
// })();
const Image = require("@11ty/eleventy-img");

(async () => {
  const url = "https://images.unsplash.com/photo-1608178398319-48f814d0750c";

  const stats = await Image(url, {
    formats: ["webp", "jpeg"],
    widths: [null, 300, 600],
    dryRun: true,
  });
  console.log(stats);
})();

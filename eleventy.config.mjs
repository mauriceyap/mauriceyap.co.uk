import htmlmin from "html-minifier-terser";
import MarkdownIt from "markdown-it";

const FONT_WEIGHTS = [200, 300, 400, 500, 600, 700, 800];
const BRICOLAGE_GROTESQUE_SOURCE_DIR =
  "node_modules/@fontsource/bricolage-grotesque";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "assets/**/*": ".",
    "robots.txt": "robots.txt",

    "node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css":
      "fontawesome/css/fontawesome.min.css",
    "node_modules/@fortawesome/fontawesome-free/css/brands.min.css":
      "fontawesome/css/brands.min.css",
    "node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf":
      "fontawesome/webfonts/fa-brands-400.ttf",
    "node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2":
      "fontawesome/webfonts/fa-brands-400.woff2",
    "node_modules/@fortawesome/fontawesome-free/css/solid.min.css":
      "fontawesome/css/solid.min.css",
    "node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf":
      "fontawesome/webfonts/fa-solid-900.ttf",
    "node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2":
      "fontawesome/webfonts/fa-solid-900.woff2",

    "node_modules/modern-normalize/modern-normalize.css":
      "modern-normalize.css",

    ...FONT_WEIGHTS.reduce((acc, weight) => {
      acc[
        `${BRICOLAGE_GROTESQUE_SOURCE_DIR}/latin-${weight}.css`
      ] = `/bricolage-grotesque/latin-${weight}.css`;

      const woffFile = `bricolage-grotesque-latin-${weight}-normal.woff`;
      const woff2File = `bricolage-grotesque-latin-${weight}-normal.woff2`;
      acc[
        `${BRICOLAGE_GROTESQUE_SOURCE_DIR}/files/${woffFile}`
      ] = `/bricolage-grotesque/files/${woffFile}`;
      acc[
        `${BRICOLAGE_GROTESQUE_SOURCE_DIR}/files/${woff2File}`
      ] = `/bricolage-grotesque/files/${woff2File}`;

      return acc;
    }, {}),
  });

  eleventyConfig.addShortcode("preloadFonts", () =>
    FONT_WEIGHTS.reduce(
      (acc, weight) =>
        acc +
        `<link rel="preload" href="/bricolage-grotesque/files/bricolage-grotesque-latin-${weight}-normal.woff" as="font" type="font/woff" crossorigin>` +
        `<link rel="preload" href="/bricolage-grotesque/files/bricolage-grotesque-latin-${weight}-normal.woff2" as="font" type="font/woff2" crossorigin>`,
      ""
    )
  );

  const mdRender = new MarkdownIt();
  eleventyConfig.addFilter("renderUsingMarkdown", (rawString) =>
    mdRender.render(rawString)
  );

  eleventyConfig.addTransform("minify", function (content) {
    if (this.page.outputPath?.endsWith(".html")) {
      return htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });
    }

    return content;
  });
}

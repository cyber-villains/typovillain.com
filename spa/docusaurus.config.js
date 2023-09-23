// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TypoVillain",
  tagline: "Monitor the internet for threats targeting your Organization.",
  url: "https://typovillain.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cyber-villains",
  projectName: "typovillain.com", 
  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: "api/openapi.yaml",
          routeBasePath: "docs/auth"
        },
        docs: {
          routeBasePath: "about",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/cyber-villains/typovillain.com/tree/main/spa",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        proxy: {
          "/proxy": {
            target: "http://localhost:8091",
            pathRewrite: { "^/proxy": "" },
          },
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi",
      {
        id: "api",
        path: "api",
        routeBasePath: "docs",
      },
    ],
    [
      "docusaurus-plugin-dotenv",
      {
        systemvars: true,
      },
    ]
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        defaultMode: "dark",
      },
      navbar: {
        // title: "Villain Toolkit",
        logo: {
          alt: "Villain Toolkit Logo",
          src: "img/cap.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "About",
          },
          {
            to: "/docs",
            position: "left",
            label: "Docs",
          },
          {
            to: "/about/tutorials/intro",
            position: "left",
            label: "Tutorials",
          },
          {
            href: "https://github.com/cyber-villains",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://x.com/typovillain",
            position: "right",
            className: "header-x-link",
            "aria-label": "X.com",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `
        <small>
          ${process.env.GIT_REF_HASH} © ${new Date().getFullYear()} Villain LLC 
           &bull; <a href="/terms-of-service">Terms of Service</a>
           &bull; <a href="/privacy-policy">Privacy Policy</a>
          </small>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      api: {
        authPersistance: "localStorage",
        serverVariablesPersistance: "localStorage",
      },
    }),
};

module.exports = config;

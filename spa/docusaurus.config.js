// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Villain Toolkit",
  tagline: "Think like a Cyber Villain. Protect your Organization.",
  url: "https://villain.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cyber-villains",
  projectName: "villain.network", 
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
          // Please change this to your repo.
          editUrl:
            "https://github.com/cyber-villains/villain.network/tree/main/spa",
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
      "docusaurus2-dotenv",
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
            label: "Documentation",
          },
          {
            href: "https://github.com/cyber-villains",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `${process.env.GIT_REF_HASH} © ${new Date().getFullYear()} Villain LLC`,
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

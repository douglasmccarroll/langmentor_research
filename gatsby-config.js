module.exports = {
  siteMetadata: {
        title: `Language Collaborative Research`,
    contact: {
      phone: "320-300-0220",
      email: "contact@languagecollaborative.com",
    },
    menuLinks: [
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Team",
        link: "/team",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
  ],
};

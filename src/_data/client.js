module.exports = {
  name: "Pool Defenders",
  email: "info@pooldefenders.com",
  phoneForTel: "813-702-1099",
  phoneFormatted: "(813) 702-1099",
  cellForTel: "615-336-8401",
  cellFormatted: "(615) 336-8401",
  address: {
    lineOne: "31455 Paper Birch St",
    city: "Wesley Chapel",
    state: "FL",
    zip: "33545",
    country: "US",
    mapLink: "https://maps.app.goo.gl/ooe4nvKjK6q63ug86",
  },
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.pooldefenders.com",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};

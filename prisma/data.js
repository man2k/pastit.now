const shortid = require("shortid");

const paste = [
  {
    id: shortid.generate(),
    paste: {
      data: "1st message boi",
    },
    timestamp: `${new Date().getTime()}`,
    author: "anon",
    // reply: false,
    // replyTo: "",
  },
];

module.exports = {
  paste,
};

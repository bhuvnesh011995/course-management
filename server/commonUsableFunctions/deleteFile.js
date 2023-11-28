const fs = require("fs");

const deleteSelectedFile = (fileName) => {
  fs.unlink(`uploads\\images\\${fileName}`, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

module.exports = {
  deleteSelectedFile,
};

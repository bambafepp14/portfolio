const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../contents");
let contentList = [];

const getContents = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("echec de lecture  " + err);
    }
    let icontent = [];
    files.forEach((file, i) => {
      let obj = {};
      fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };

        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = (line.split(": ")[1]  ?? '').trim();
            });
            return obj;
          }
        };

        const parseContent = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, lines.length);
          }
          return lines.join("\n").trim();
        };

        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices });


        let objContent={

            id:metadata.id,
            title:metadata.title,
            image:metadata.image,
            type:metadata.type,
            price:metadata.price,
            content:content
        }

        contentList.push(objContent);
        let data=JSON.stringify(contentList);
        fs.writeFileSync('src/contents.json' , data)
      });
    });
  });
};

getContents()

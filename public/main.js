const path = require("path");
const fs = require("fs");



// le chemin des contenues du cms qui sont enregistrés avec l extension .md 

const dirPath = path.join(__dirname, "../contents");
// inittialisation de la liste des contenus
let contentList = [];

//  fonction qui recupere les fichiers qui sont contenu dans le dossier contents
const getContents = () => {

  // lecture du contenu du dossier dirPath
  fs.readdir(dirPath, (err, files) => {
    // files contient la liste des fichiers .md du dossier contents
    if (err) {
      return console.log("echec de lecture  " + err);
    }
    let icontent = [];
    // un boucle sur les fichiers
    files.
    // filter((file,i)=>i <2).
    forEach((file, i) => {
      let obj = {};
      // lecture du fichier avec le nom file
      fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) => {
        // contents est le contenu du fichier file 
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
            // on separe le text lines par le terme : le premier elemet devient la cle (key) et le deuxieme element devient la valeur 
            // exemple : title : bonheur devient obj ['title']= 'bonheur'
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
        console.log('file',file)
        const lines = contents.split("\n");
        console.log ('lines',lines) ;
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        console.log ('metadataIndices',metadataIndices);
        const metadata = parseMetadata({ lines, metadataIndices });
        console.log('metadata',metadata);
        const content = parseContent({ lines, metadataIndices });
        console.log ('content',content);


        let objContent={

            id:metadata.id,
            title:metadata.title,
            image:metadata.image,
            type:metadata.type,
            price:metadata.price,
            content:content
            
        }
        console.log('objcontent',objContent) ;

        contentList.push(objContent);
        console.log('contentList',contentList);
        let data=JSON.stringify(contentList);
        console.log('data',data) ;
        fs.writeFileSync('src/contents.json' , data)
      });
    });
  });
};

// appel de  la fonction
getContents()

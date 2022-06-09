import { NFTStorage, File} from "nft.storage";
import fs from "fs";


const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQ5RUY0NTVFZjlGOTA4NzJjRjIwYzMwRTZGNTdhQzQyODZBNkYwZDQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NDc3MjQxNDY2NywibmFtZSI6InByYWN0aWNlIn0.fClRJQjfU-73Q0D-_9qBlNua-NZdwf98fp2hSndNw28'
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

const metadata = await client.store({ 
    name: "Bing7's NFT",
    description: "Bing7's nft for practice!",
    image: new File([fs.readFileSync("./hi.GIF")], "hi.GIF", { type: "image/GIF"}),
    attributes: [
        {
            trait_type: "Rarity",
            value:"LEGENDARY",
        },
    ],
 });

console.log(metadata.url);
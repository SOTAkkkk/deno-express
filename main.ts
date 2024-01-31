// @ts-ignore
import express from "npm:express@4.18.2";
// @ts-ignore
import data from "./data.json" assert { type: "json" };

const app = express();

app.get("/", (req: any, res: any) => {
    res.send("Welcome to the Dinosaur API!");
});

app.get("/api", (req:any, res:any) => {
    res.send(data);
});

app.get("/api/:dinosaur", (req:any, res:any) => {
    if (req?.params?.dinosaur) {
        const found = data.find((item) =>
            item.name.toLowerCase() === req.params.dinosaur.toLowerCase()
        );
        if (found) {
            res.send(found);
        } else {
            res.send("No dinosaurs found.");
        }
    }
});

app.listen(8000);

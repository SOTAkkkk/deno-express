import express from "npm:express@4.18.2";
import data from "./data.json" with { type: "json" };

const app = express();

app.get("/", (_req: express.Request, res: express.Response) => {
    res.send("Welcome to the Dinosaur API!");
});

app.get("/api", (_req: express.Request, res: express.Response) => {
    res.send(data);
});

app.get("/api/:dinosaur", (req: express.Request, res: express.Response) => {
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

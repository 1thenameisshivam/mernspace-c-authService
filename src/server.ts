import app from "./app.ts";
import { PORT } from "./config/index.ts";

const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log("server is running on port", PORT);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();

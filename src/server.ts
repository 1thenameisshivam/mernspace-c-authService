import app from "./app.ts";
import { PORT } from "./config/index.ts";
import logger from "./config/logger.ts";

const startServer = () => {
    try {
        app.listen(PORT, () => {
            logger.info("server is running on port ", { port: PORT });
        });
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
};

startServer();

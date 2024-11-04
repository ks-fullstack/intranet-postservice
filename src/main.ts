import "dotenv/config";
import ExpressApp from "./utils/expressApp";

const port = process.env.PORT || 5001;

ExpressApp.connectApp();

ExpressApp.app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

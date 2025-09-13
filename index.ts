// This program will continuously take screenshots
// and feed them to an image recognition model,
// then write the results to a text file.

import { main } from "./src/main";



do { await main() } while (true);

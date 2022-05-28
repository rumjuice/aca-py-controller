import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";

// initialize JsonDB
const db = new JsonDB(new Config("connections", true, true));

/**
 * save connection to JSON.
 *
 * @param data
 */
async function saveConnection(data) {
  // save connection data to JSON file connections.json
  db.push(`/${data.state}[]`, data, true);
}

export default { saveConnection };

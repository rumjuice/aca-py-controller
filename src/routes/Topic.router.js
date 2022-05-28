import { Router } from "express";
import ConnectionService from "../services/Connection.service";

const router = Router();

// Paths
const path = {
  connections: "/connections",
};

/**
 * Connections webhook.
 */
router.post(path.connections, async (req, res) => {
  if (req.body) {
    await ConnectionService.saveConnection(req.body);

    return res.status(200).json("Webhook received");
  }

  return res.status(400).json("Bad request");
});

export default router;

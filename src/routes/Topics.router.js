import { Router } from "express";

// Constants
const router = Router();

// Paths
const path = {
  connections: "/connections",
};

/**
 * Connections webhook.
 */
router.get(path.connections, async (req, res) => {
  console.log(req);
  return res.status(200).json("Webhook received");
  // return res.status(400).json("Bad request");
});

export default router;

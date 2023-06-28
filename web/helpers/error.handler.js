export default function onError(error, res) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: "Unknown error" });
    }
  }
  
const express = express();
const router = express.Router();

// Risposta alla richiesta di lettura di tutti i post

router.get("/", (req, res) => {
  res.send("Post totali");
});

// Risposta alla richiesta di lettura di un post specifico

router.get("/:id", (req, res) => {
  const id = req.param.id;
  res.send("Ecco il post scelto:" + id);
});

// Risposta alla richiesta di creazione di un post

router.postt("/", (req, res) => {
  const id = req.param.id;
  res.send("Ecco il post scelto:" + id);
});

// Risposta alla richiesta di modifica totale di un post specifico

router.put("/:id", (req, res) => {
  const id = req.param.id;
  res.send("Ecco il post scelto:" + id);
});

// Risposta alla richiesta di modifica parziale di un post specifico

router.patch("/:id", (req, res) => {
  const id = req.param.id;
  res.send("Ecco il post scelto:" + id);
});

// Risposta alla richiesta di elimazione di un post specifico

router.delete("/:id", (req, res) => {
  const id = req.param.id;
  res.send("Ecco il post scelto:" + id);
});

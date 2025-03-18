import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  getUserByEmail,
  createUser,
  getStreams,
  addStream,
  deleteStream,
} from "../models/models.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

// Rota de registro
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se o usuário já existe
    const userExists = await getUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ message: "Usuário já existe" });
    }

    // Criar novo usuário
    const user = await createUser(name, email, password);

    // Gerar token JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || "sua_chave_secreta",
      { expiresIn: "24h" }
    );

    res.status(201).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ message: "Erro ao registrar usuário" });
  }
});

// Rota de login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }

    // Verificar senha
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }

    // Gerar token JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || "sua_chave_secreta",
      { expiresIn: "24h" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro ao fazer login" });
  }
});

// Rotas de Streaming Services
router.get("/streaming-services", authenticateToken, async (req, res) => {
  try {
    const streams = await getStreams(req.user.userId);
    res.json(streams);
  } catch (error) {
    console.error("Erro ao buscar streams:", error);
    res.status(500).json({ message: "Erro ao buscar streams" });
  }
});

router.post("/streaming-services", authenticateToken, async (req, res) => {
  try {
    const { service_name, plan_price, start_date } = req.body;

    if (!service_name || !plan_price || !start_date) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios" });
    }

    const stream = await addStream(
      req.user.userId,
      service_name,
      plan_price,
      start_date
    );
    res.status(201).json(stream);
  } catch (error) {
    console.error("Erro ao adicionar stream:", error);
    res.status(500).json({ message: "Erro ao adicionar stream" });
  }
});

router.delete(
  "/streaming-services/:id",
  authenticateToken,
  async (req, res) => {
    try {
      const streamId = req.params.id;
      await deleteStream(streamId, req.user.userId);
      res.json({ message: "Stream removido com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar stream:", error);
      res.status(500).json({ message: "Erro ao deletar stream" });
    }
  }
);

export default router;

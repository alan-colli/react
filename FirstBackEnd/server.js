import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  res.status(201).json(req.body);

  await prisma.user.create({
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
});

app.put("/users/:id", async (req, res) => {
  res.status(201).json(req.body);

  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });
});

app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Usuario deletado com sucesso" });
});

app.listen(3000);

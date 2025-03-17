import {
  getUserByEmail,
  createUser,
  deleteUser,
  getUserStreamingServices,
  addStreamingService,
  deleteStreamingService,
  updateStreamingService,
} from "../models/models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    throw error;
  }
};

export const register = async (req, res) => {
  const { name, email, password_hash } = req.body;
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return res.status(404).json({ error: "Email already exists" });
  }

  const user = await createUser(name, email, password_hash);
  res.json(user);
};

export const deleteUserController = async (req, res) => {
  try {
    const userId = req.user.id;

    await deleteUser(userId);

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    throw error;
  }
};

export const getUserStreamingServicesController = async (req, res) => {
  try {
    const userId = req.user.id;
    const streamingServices = await getUserStreamingServices(userId);

    return res.status(200).json(streamingServices);
  } catch (error) {
    console.error("Error fetching user streaming services:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const addStreamingServiceController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { service_name, plan_price } = req.body;

    if (!service_name || !plan_price) {
      return res.status(400).json({
        error: "Nome do serviço e preço do plano são obrigatórios",
      });
    }

    const newService = await addStreamingService(
      userId,
      service_name,
      plan_price
    );
    return res.status(201).json(newService);
  } catch (error) {
    console.error("Erro ao adicionar serviço de streaming:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const deleteStreamingServiceController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { serviceId } = req.params;

    if (!serviceId) {
      return res.status(400).json({
        error: "ID do serviço é obrigatório",
      });
    }

    const deletedService = await deleteStreamingService(userId, serviceId);

    if (!deletedService) {
      return res.status(404).json({
        error: "Serviço não encontrado ou não pertence ao usuário",
      });
    }

    return res.status(200).json({
      message: "Serviço deletado com sucesso",
      deletedService,
    });
  } catch (error) {
    console.error("Erro ao deletar serviço de streaming:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export const updateStreamingServiceController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { serviceId } = req.params;
    const { service_name, plan_price } = req.body;

    if (!serviceId) {
      return res.status(400).json({
        error: "ID do serviço é obrigatório",
      });
    }

    if (!service_name || !plan_price) {
      return res.status(400).json({
        error: "Nome do serviço e preço do plano são obrigatórios",
      });
    }

    const updatedService = await updateStreamingService(
      userId,
      serviceId,
      service_name,
      plan_price
    );

    if (!updatedService) {
      return res.status(404).json({
        error: "Serviço não encontrado ou não pertence ao usuário",
      });
    }

    return res.status(200).json({
      message: "Serviço atualizado com sucesso",
      updatedService,
    });
  } catch (error) {
    console.error("Erro ao atualizar serviço de streaming:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getBeaches = async (req: Request, res: Response) => {
  try {
    const beaches = await prisma.beach.findMany({
      select: {
        name: true,
        city: true,
        state: true,
        country: true,
        coordinates: true,
        beachType: true,
        evaluations: {
          select: {
            finalEvaluation: true,
            description: true,
            images: true,
          },
        },
      },
    });

    if (!beaches) {
      res.status(401).json({ message: "No se encuentran playas registradas" });
    } else {
      res.status(200).json({ data: beaches, message: "Lista de Playas" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getBeachId = async (req: Request, res: Response) => {
  const { beachID } = req.body;

  try {
    const beach = await prisma.beach.findUnique({
      where: { id: beachID },
      select: {
        name: true,
        city: true,
        state: true,
        country: true,
        coordinates: true,
        beachType: true,
        evaluations: {
          select: {
            finalEvaluation: true,
            description: true,
            images: true,
          },
        },
      },
    });

    if (!beach) {
      res.status(401).json({ message: "No se encuentra la playa que busca" });
    } else {
      res.status(200).json({ data: beach, message: "Playa encontrada" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const createBeach = async (req: Request, res: Response) => {
  const {
    name,
    city,
    state,
    country,
    coordinates,
    residencialOcupattion,
    rigidization,
    principalUse,
    enviromentUse,
    legalProtection,
    services,
    paisaje,
    accesoVehicular,
  } = req.body;

  try {
    const beachType = "POPULATED";

    const beach = await prisma.beach.create({
      data: {
        name,
        city,
        state,
        country,
        coordinates,
        residencialOcupattion,
        rigidization,
        principalUse,
        enviromentUse,
        legalProtection,
        services,
        paisaje,
        accesoVehicular,
        beachType,
      },
    });

    if (!beach) {
      res.status(401).json({ message: "No se encuentra la playa que busca" });
    }

    res.status(200).json({ data: beach, message: "Datos de la playa guardados correctamente" });

  } catch (error) {
    console.log("Error:", error);
    res.status(500).send({message: "Internal Server Error"})
  }
};

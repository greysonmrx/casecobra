"use server";

import type {
  CaseColor,
  CaseFinish,
  CaseMaterial,
  PhoneModel,
} from "@prisma/client";

import { db } from "@/db";

export type SaveConfigurationArguments = {
  color: CaseColor;
  finish: CaseFinish;
  material: CaseMaterial;
  model: PhoneModel;
  configId: string;
};

async function saveConfiguration({
  color,
  finish,
  material,
  model,
  configId,
}: SaveConfigurationArguments) {
  await db.configuration.update({
    where: { id: configId },
    data: { color, finish, material, model },
  });
}

export { saveConfiguration };

import HttpError from '@wasp/core/HttpError.js'

export const createUser = async (args, context) => {
  const { username, password, drivingLicense, education, registration } = args;

  const user = await context.entities.User.create({
    data: {
      username,
      password,
      drivingLicense,
      education,
      registration
    }
  });

  return user;
}

export const updateVehicle = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const vehicle = await context.entities.Vehicle.findUnique({
    where: { id: args.id }
  });
  if (vehicle.userId !== context.user.id) { throw new HttpError(403) };

  return context.entities.Vehicle.update({
    where: { id: args.id },
    data: { tires: args.tires, lightFront: args.lightFront, lightBack: args.lightBack, sideMirror: args.sideMirror, logoOnSides: args.logoOnSides, logoOnFrontDoor: args.logoOnFrontDoor, logoOnFront: args.logoOnFront, logoOnBack: args.logoOnBack }
  });
}

export const updateEquipment = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const equipment = await context.entities.Equipment.findUnique({
    where: { id: args.id }
  });
  if (equipment.userId !== context.user.id) { throw new HttpError(403) };

  return context.entities.Equipment.update({
    where: { id: args.id },
    data: { ADR: args.ADR, safetyWest: args.safetyWest, safetyGlasses: args.safetyGlasses, safetyGloves: args.safetyGloves, safetyShoes: args.safetyShoes, palletJack: args.palletJack, uniform: args.uniform }
  });
}
import HttpError from '@wasp/core/HttpError.js'

export const getUser = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const user = await context.entities.User.findUnique({
    where: { id: context.user.id },
    include: {
      vehicles: true,
      equipments: true
    }
  });

  if (!user) throw new HttpError(404, 'User not found');

  return user;
}

export const getVehicle = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Vehicle.findUnique({
    where: { userId: context.user.id },
  });
}

export const getEquipment = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const equipment = await context.entities.Equipment.findMany({
    where: {
      userId: context.user.id
    }
  });

  return equipment;
}
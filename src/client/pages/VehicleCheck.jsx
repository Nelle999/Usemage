import React from 'react';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getVehicle from '@wasp/queries/getVehicle';
import updateVehicle from '@wasp/actions/updateVehicle';

export function VehicleCheck() {
  const { data: vehicle, isLoading, error } = useQuery(getVehicle);
  const updateVehicleFn = useAction(updateVehicle);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleAreaClick = (area) => {
    updateVehicleFn({ id: vehicle.id, ...area });
  };

  return (
    <div className=''>
      <img src='/path/to/van/image' alt='Van' />
      <div className=''>
        <button
          onClick={() => handleAreaClick({ tires: true })}
          className=''
        >
          Tires
        </button>
        <button
          onClick={() => handleAreaClick({ lightFront: true })}
          className=''
        >
          Light Front
        </button>
        <button
          onClick={() => handleAreaClick({ lightBack: true })}
          className=''
        >
          Light Back
        </button>
        <button
          onClick={() => handleAreaClick({ sideMirror: true })}
          className=''
        >
          Side Mirror
        </button>
        <button
          onClick={() => handleAreaClick({ logoOnSides: true })}
          className=''
        >
          Logo on Sides
        </button>
        <button
          onClick={() => handleAreaClick({ logoOnFrontDoor: true })}
          className=''
        >
          Logo on Front Door
        </button>
        <button
          onClick={() => handleAreaClick({ logoOnFront: true })}
          className=''
        >
          Logo on Front
        </button>
        <button
          onClick={() => handleAreaClick({ logoOnBack: true })}
          className=''
        >
          Logo on Back
        </button>
      </div>
    </div>
  );
}
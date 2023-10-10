import React from 'react';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getEquipment from '@wasp/queries/getEquipment';
import updateEquipment from '@wasp/actions/updateEquipment';

export function EquipmentCheck() {
  const { data: equipment, isLoading, error } = useQuery(getEquipment);
  const updateEquipmentFn = useAction(updateEquipment);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleEquipmentCheck = (equipmentId, checked) => {
    updateEquipmentFn({ id: equipmentId, checked });
  };

  return (
    <div className='p-4'>
      {equipment.map((item) => (
        <div
          key={item.id}
          className='flex items-center justify-between bg-gray-100 p-4 mb-4 rounded-lg'
        >
          <div>{item.name}</div>
          <div>
            <input
              type='checkbox'
              checked={item.checked}
              onChange={() => handleEquipmentCheck(item.id, !item.checked)}
              className='mr-2 h-6 w-6'
            />
            <span>{item.checked ? 'Approved' : 'Faulty'}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getUser from '@wasp/queries/getUser';

export function Dashboard() {
  const { data: user, isLoading, error } = useQuery(getUser);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div className='p-4'>
      <h2 className='text-3xl font-bold mb-4'>Vehicle and Equipment Status</h2>
      <div className='bg-gray-100 p-4 mb-4 rounded-lg'>
        <div className='text-xl font-bold mb-2'>Driver Information</div>
        <div>Username: {user.username}</div>
        <div>Driving License: {user.drivingLicense ? 'Yes' : 'No'}</div>
        <div>Education: {user.education}</div>
        <div>Registration: {user.registration}</div>
      </div>
      <div className='bg-gray-100 p-4 mb-4 rounded-lg'>
        <div className='text-xl font-bold mb-2'>Vehicle Status</div>
        <div>Tires: {user.vehicles[0]?.tires ? 'Approved' : 'Faulty'}</div>
        <div>Light Front: {user.vehicles[0]?.lightFront ? 'Approved' : 'Faulty'}</div>
        <div>Light Back: {user.vehicles[0]?.lightBack ? 'Approved' : 'Faulty'}</div>
        <div>Side Mirror: {user.vehicles[0]?.sideMirror ? 'Approved' : 'Faulty'}</div>
        <div>Logo on Sides: {user.vehicles[0]?.logoOnSides ? 'Approved' : 'Faulty'}</div>
        <div>Logo on Front Door: {user.vehicles[0]?.logoOnFrontDoor ? 'Approved' : 'Faulty'}</div>
        <div>Logo on Front: {user.vehicles[0]?.logoOnFront ? 'Approved' : 'Faulty'}</div>
        <div>Logo on Back: {user.vehicles[0]?.logoOnBack ? 'Approved' : 'Faulty'}</div>
      </div>
      <div className='bg-gray-100 p-4 mb-4 rounded-lg'>
        <div className='text-xl font-bold mb-2'>Equipment Status</div>
        <div>ADR Equipment: {user.equipments[0]?.ADR ? 'Approved' : 'Faulty'}</div>
        <div>Safety West: {user.equipments[0]?.safetyWest ? 'Approved' : 'Faulty'}</div>
        <div>Safety Glasses: {user.equipments[0]?.safetyGlasses ? 'Approved' : 'Faulty'}</div>
        <div>Safety Gloves: {user.equipments[0]?.safetyGloves ? 'Approved' : 'Faulty'}</div>
        <div>Safety Shoes: {user.equipments[0]?.safetyShoes ? 'Approved' : 'Faulty'}</div>
        <div>Pallet Jack: {user.equipments[0]?.palletJack ? 'Approved' : 'Faulty'}</div>
        <div>Uniform: {user.equipments[0]?.uniform ? 'Approved' : 'Faulty'}</div>
      </div>
      <Link to='/driver-registration' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Driver Registration</Link>
      <Link to='/vehicle-check' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2'>Vehicle Check</Link>
      <Link to='/equipment-check' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2'>Equipment Check</Link>
    </div>
  );
}
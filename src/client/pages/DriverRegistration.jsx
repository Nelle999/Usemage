import React, { useState } from 'react';
import { useAction } from '@wasp/actions';
import createUser from '@wasp/actions/createUser';

export function DriverRegistration() {
  const createUserFn = useAction(createUser);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [drivingLicense, setDrivingLicense] = useState(false);
  const [education, setEducation] = useState('');
  const [registration, setRegistration] = useState('');

  const handleRegister = () => {
    createUserFn({
      username,
      password,
      drivingLicense,
      education,
      registration
    });
  };

  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Username'
        className='px-1 py-2 border rounded text-lg'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        className='px-1 py-2 border rounded text-lg'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className='flex items-center gap-x-2'>
        <input
          type='checkbox'
          checked={drivingLicense}
          onChange={(e) => setDrivingLicense(e.target.checked)}
        />
        <label>Driving License</label>
      </div>
      <input
        type='text'
        placeholder='Education'
        className='px-1 py-2 border rounded text-lg'
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
      <input
        type='text'
        placeholder='Registration'
        className='px-1 py-2 border rounded text-lg'
        value={registration}
        onChange={(e) => setRegistration(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded'
      >
        Register
      </button>
    </div>
  );
}
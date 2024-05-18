import React from 'react';
import { Input, Button } from "@nextui-org/react";

const Register = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center text-red-700'>Registration Form</h2>
        
        <div className='space-y-4'>
          <Input
            type="text"
            label="First Name"
            fullWidth
            placeholder="Enter your first name"
          />
          <Input
            type="text"
            label="Last Name"
            fullWidth
            placeholder="Enter your last name"
          />
          <Input
            type="email"
            label="Email"
            fullWidth
            placeholder="Enter your email"
          />
          <Input
            type="password"
            label="Password"
            fullWidth
            placeholder="Enter your password"
          />
          <Button color="primary" fullWidth>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Register;

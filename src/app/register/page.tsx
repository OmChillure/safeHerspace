"use client"
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setMessage('Phone number must be 10 digits');
      return;
    }

    const response = await fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, email, password, phone }),
    });

    const data = await response.text();

    if (response.ok) {
      setMessage('User Registered Successfully!');
      return router.push('/login')
    } else {
      return setMessage(data);
    }
  };

  return (
  <div className="flex h-[100vh] items-center justify-center p-4 sm:p-6 lg:px-8">
  <div className="text-black dark:text-white p-6 sm:p-8 rounded-3xl w-full border-[1px] border-gray-400 transition-transform transform hover:scale-105 dark:hover:border-pink-500 dark:border-white max-w-md sm:max-w-lg lg:max-w-xl shadow-border-light dark:shadow-border-dark">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
      Register
    </h1>
    {message && <p className="mb-4 text-center">{message}</p>}
    <form onSubmit={handleRegister}>
      <div className="mb-4">
        <label
          className="block dark:text-white text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-indigo-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block dark:text-white text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-indigo-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block dark:text-white text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-indigo-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          className="block dark:text-white text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-indigo-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label
          className="block dark:text-white text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Phone
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:border-indigo-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</div>


  );
};

export default RegisterPage;

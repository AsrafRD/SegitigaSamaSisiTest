import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import InputForm from '../Elements/Input/Input';
import Button from '../Elements/Button/Button';

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await dispatch(login({ email, password })).unwrap();
      const { user } = response;
      if (user.level === 3) {
        navigate('/user');
      } else if (user.level === 2) {
        navigate('/verificator');
      } else if (user.level === 1) {
        navigate('/admin');
      } else {
        console.error('Unknown user level:', user.level);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@email.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*********"
        name="password"
      />
      <Button className="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;

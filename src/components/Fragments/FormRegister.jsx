import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../store/actions/authActions';
import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Button";

const FormRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const fullname = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await dispatch(register({ name: fullname, email, password })).unwrap();
      toast.success('Registration successful! Please log in.');navigate('/login');
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <InputForm 
        label="Fullname"
        type="text"
        placeholder="Insert your fullname here..."
        name="fullname"
        required
      />
      <InputForm 
        label="Email"
        type="email"
        placeholder="example@email.com"
        name="email"
        required
      />
      <InputForm 
        label="Password"
        type="password"
        placeholder="*********"
        name="password"
        required
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
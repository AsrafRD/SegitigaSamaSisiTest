import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { buatIzin, fetchPermittionById, updatePermission } from '../../store/actions/permittionActions.js';
import InputForm from '../Elements/Input';
import Button from '../Elements/Button/Button';

const FormPermittion = ({ mode = 'create', initialData = {}, onSuccess }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [subject, setSubject] = useState(initialData.subject || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (mode === 'edit' && id) {
      const fetchPermittion = async () => {
        try {
          setLoading(true);
          const result = await dispatch(fetchPermittionById(id)).unwrap();
          setSubject(result.subject);
          setDescription(result.description);
        } catch (err) {
          setError(err.message || 'Failed to fetch permittion');
        } finally {
          setLoading(false);
        }
      };
      fetchPermittion();
    }
  }, [dispatch, id, mode]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (mode === 'create') {
        await dispatch(buatIzin({ subject, description })).unwrap();
        toast.success('Permittion created successfully!');
      } else {
        await dispatch(updatePermission({ id, subject, description })).unwrap();
        toast.success('Permittion updated successfully!');
      }
      if (onSuccess) onSuccess();
      navigate('/user');
    } catch (error) {
      toast.error(`Operation failed: ${error.message}`);
    }
  };

  const handleCancel = () => {
    navigate('/user'); // Use navigate for redirection
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <InputForm 
        label="Subject"
        type="text"
        placeholder="Insert your subject"
        name="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <InputForm 
        label="Description"
        type="textarea"
        placeholder="Your description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        {mode === 'create' ? 'Save' : 'Update'}
      </Button>
      <Button classname="bg-red-500 mt-5 w-full" onClick={handleCancel}>
        Cancel
      </Button>
    </form>
  );
};

export default FormPermittion;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchpermittion } from '../../store/actions/permittionActions.js';
import { toast } from 'react-toastify';
import Button from '../Elements/Button/Button';
import { useNavigate } from 'react-router-dom';

const PermittionDatas = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const permittion = useSelector((state) => state.permittion.permittion);

  const handleCreate = () => {
    navigate('/permittion/create');
  };

  const handleEdit = (id) => {
    navigate(`/permittion/edit/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchpermittion()).unwrap();
      } catch (err) {
        setError(err.message || 'Failed to fetch permittion');
        toast.error('Failed to fetch permittion: ' + (err.message || 'Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-4 flex justify-end">
        <Button classname="ml-5 bg-blue-500 w-1/2" onClick={handleCreate}>
          Create a permittion
        </Button>
      </div>
      {permittion.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-gray-700">Subject</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-gray-700">Description</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-gray-700">Created At</th>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {permittion.map((data) => (
              <tr key={data.id}>
                <td className="py-2 px-4 border-b border-gray-300">{data.subject}</td>
                <td className="py-2 px-4 border-b border-gray-300">{data.description}</td>
                <td className="py-2 px-4 border-b border-gray-300">{new Date(data.created_at).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  <button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 mr-2" onClick={() => handleEdit(data.id)}>
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center py-4">No permittion available.</p>
      )}
    </div>
  );
};

export default PermittionDatas;

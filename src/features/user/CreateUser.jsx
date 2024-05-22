import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    if(!username) return;
    dispatch(updateName(username));  //se coloca en el submit y no directamente en el formulario.  updateName = action created function y pasamos la action.payload y modificara el state. 
navigate ("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-stone-600md:text-base mb-4 text-sm">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

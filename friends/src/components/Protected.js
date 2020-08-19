import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initValues = {
  name: '',
  age: '',
  email: '',
  id: new Date()
}

export const Protected = () => {

  const [friends, setFriends] = useState();
  const [formValues, setFormValues] = useState(initValues);

  const handleChanges = e => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    axiosWithAuth().get('/api/friends')
  .then(res => {
      console.log(res);
      // return res;
      setFriends(res.data)
  })
  .catch(err => {
      console.dir(err);
  })
  }, [friends]);

  // console.log(friends);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post(`/api/friends`, formValues)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.dir(err)
    })
  }

  console.log(formValues)

  return (
    <div>
      <h2>This is the protected page...</h2>

      <form>
        <h2>Make a friend</h2>

        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          value={formValues.name}
          onChange={handleChanges}
        />

        <label htmlFor='age'>Age:</label>
        <input
          type='text'
          name='age'
          value={formValues.age}
          onChange={handleChanges}
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          value={formValues.email}
          onChange={handleChanges}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>

      { friends ?
        friends.map(friend => {
          return (
            <div key={friend.id}>
              <h2>{friend.name}</h2>
              <h3>{friend.age}</h3>
              <h3>{friend.email}</h3>
            </div>
          )
        }) : null
      }
    </div>
  )
}

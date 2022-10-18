import React, {useState} from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  else if(!input.password){
    errors.password = 'Password is required';
  }
  else if(input.password.length<6){
    errors.password = 'Password is too short';
  }
  else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = 'Password is invalid' 
  }
  else if(/\s/.test(input.password)){
    errors.password = 'Password should not have whitespaces'
  }
  

  return errors;
};

export default function  Form() {
  const [input, setInput] = useState({
    username: '',
    password: '',
    })

  const [errors, setErrors] = useState({});

  const onChangeInput = (e) => {
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
   
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
      <form action="">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={input.username} onChange={onChangeInput} className={errors.username && 'danger'}/>
          {errors.username && (
            <p className="danger">{errors.username}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={input.password} onChange={onChangeInput} className={errors.password && 'danger'}/>
          {errors.password && (
            <p className="danger">{errors.password}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
  )
}

import React from 'react';
import { useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      emailField: '',
      pswField: ''      
    },
    onSubmit: values =>{
      alert("Login Succesful");
      console.log('form:',values);
    },
    validate: values =>{
      let errors = {};
      if(!values.name) errors.name = 'field required';
      if (!values.emailField) {
        errors.emailField = 'field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'username should be an email address';
      };
      if(!values.pswField) errors.pswField = 'field required';
      return errors;
    }
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name:</div>
        <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null}
        <div>Email:</div>
        <input type="text" name="emailField" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div> : null}        
        <div>Password:</div>
        <input type="text" name="pswField" onChange={formik.handleChange} value={formik.values.pswField}/><br/>
        {formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div> : null}                
        <button name="suubmitBtn" type="submit">Submit</button>
      </form>      
    </div>
  );
}

export default App;

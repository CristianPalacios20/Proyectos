import {useState, useRef} from 'react';
import emailjs from 'emailjs-com';

export default function useContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const sendEmail = (e) =>{
    e.preventDefault();

    if(form.current){
      emailjs.sendForm('service_29p33tw', 'template_26l8l5x', form.current, 'NXJ3dRGXW4UhLxN4u')
      .then((result) =>{
        console.log(result);
        alert('Correo enviado correctamente!');
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
      }, (error) =>{
        console.error(error);
        alert('Hubo un error al enviar el correo, intente nuevamente!.');
      });
    }else{
      console.log('No se ha podido acceder al formulario.');
    }
  }
  
  return {
    form,
    formData,
    handleChange,
    sendEmail
  };
};

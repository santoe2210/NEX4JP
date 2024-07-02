import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import NavBar from './TestNav';
import MyFooter from './MyFooter';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your logic to send email here
    try {
      const response = await fetch('info@nex4.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('メールの送信に成功しました！');
        setFormData({
          cname:'',
          bname:'',
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('メールの送信に失敗しました。');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('メールの送信に失敗しました。');
    }
  };

  return (
    <div path="faq" className="md-px-14 px-20 py-12 max-w-screen-2xl mx-auto items-center justify-center w-full">
        {/* <div className="mb-16">
                <NavBar/>    
        </div> */}
        <div className='flex items-center justify-center mt-20'>
        <form className="flex max-w-md flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="会社名" /><span className="text-red-500">*</span>
        </div>
        <TextInput type="text"
          id="cname"
          name="cname"
          value={formData.name}
          onChange={handleChange}
          required/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="部署名" /><span className="text-red-500">*</span>
        </div>
        <TextInput type="text"
          id="bname"
          name="bname"
          value={formData.name}
          onChange={handleChange}
          required/>
      </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="名前" /><span className="text-red-500">*</span>
        </div>
        <TextInput type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="メールアドレス" /><span className="text-red-500">*</span>
        </div>
        <TextInput type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="件名" /><span className="text-red-500">*</span>
        </div>
        <TextInput type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required />
      </div>
      <div className="flex items-center gap-2">
      <Label htmlFor="password1" value="お問い合わせ内容" /><span className="text-red-500">*</span>
      </div>
      <Textarea id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
           placeholder="メッセージ" required rows={4} />
      <Button type="submit">送信する</Button>
    </form>
    </div>
    {/* <div>
           <MyFooter/> 
        </div>  */}
    </div>
  );
};

export default ContactForm;

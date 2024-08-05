import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import NavBar from './TestNav';
import MyFooter from './MyFooter';
import headerImage from '../assets/icons/background (2).jpg';
import '../assets/css/contact.css';

const ContactForm = () => {
  // Initialize state to store form data
  const [formData, setFormData] = useState({
    cname: '',
    bname: '',
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input change and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
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
        // Reset form data after successful submission
        setFormData({
          cname: '',
          bname: '',
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
    <div id="faq" className="py-12 max-w-screen-2xl mx-auto items-center justify-center w-full">
      {/* Uncomment to include the NavBar */}
      {/* <div className="mb-16">
          <NavBar/>
      </div> */}
      <div className='header_photo'>
        <img src={headerImage} alt="Header Image" />
        <h1>お問い合わせ</h1>
      </div>
      <div className='flex items-center justify-center contact_form faq-container'>
        <form className="flex max-w-md mx-auto flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="cname" value="会社名" /><span className="text-red-500">*</span>
            </div>
            <TextInput
              type="text"
              id="cname"
              name="cname"
              value={formData.cname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bname" value="部署名" /><span className="text-red-500">*</span>
            </div>
            <TextInput
              type="text"
              id="bname"
              name="bname"
              value={formData.bname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="名前" /><span className="text-red-500">*</span>
            </div>
            <TextInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="メールアドレス" /><span className="text-red-500">*</span>
            </div>
            <TextInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="subject" value="件名" /><span className="text-red-500">*</span>
            </div>
            <TextInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="message" value="お問い合わせ内容" /><span className="text-red-500">*</span>
          </div>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="メッセージ"
            required
            rows={4}
          />
          <Button type="submit">送信する</Button>
        </form>
      </div>
      {/* Map and contact details */}
      <div className="contact-section">
        <h2 className="section-title">連絡先</h2>
        <div className="contact-buttons">
          <div className="contact-button">
            <span className="icon">&#128222;</span>
            <div className="text-content">
              <div className="text-title">電話番号</div>
              <div className="text-detail">(+81)-080-9996-1692</div>
            </div>
          </div>
          <div className="contact-button">
            <span className="icon">&#9993;</span>
            <div className="text-content">
              <div className="text-title">メール</div>
              <div className="text-detail"> info@nex4.net</div>
            </div>
          </div>
          <div className="contact-button">
            <span className="icon">&#127759;</span>
            <div className="text-content">
              <div className="text-title">会社の所在地</div>
              <div className="text-detail">〒114-0003, 東京都北区豊島8丁目27-2-207</div>
            </div>
          </div>
        </div>
        <div className='map-container'>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe 
                className="gmap_iframe" 
                width="100%" 
                height="100%"
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=東京都北区豊島8丁目27-2-207&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Uncomment to include the Footer */}
      {/* <div>
          <MyFooter/>
      </div> */}
    </div>
  );
};

export default ContactForm;

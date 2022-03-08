import { useState } from 'react'


const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
            email
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setEmail('')
    }

    return (
        <div className='ContactContainer'>
          <div>Contacto</div>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Nombre:
              <input
                className='InputContact'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>  
            <label className='LabelContact'>Telefono:
              <input
                className='InputContact'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>Direccion:
              <input
                className='InputContact'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>Email: 
              <input
                className='InputContact'
                type='text'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </label>
            <button className='Button' type='submit'>Confirmar</button>
          </form>
        </div>
      )
}

export default ContactForm
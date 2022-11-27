import { useEffect, useState } from "react"
import { Button } from "../../../styles/buttons"
import { Label } from "../../../styles/text"

const Form = () => {
  const [data, setData] = useState({
    name: '',
    msg: '',
    subject: ''
  })

  const resetAlerts = () => {
    return {
      name: {
        status: false,
        msg: '¡El Nombre es Obligatorio!'
      },
      subject: {
        status: false,
        msg: '¡El Asunto es Obligatorio!'
      },
      msg: {
        status: false,
        msg: '¡El Mensaje es Obligatorio!'
      }
    }
  }

  const [alert, setAlert] = useState(resetAlerts())

  const handleChange = e => {
    const { target: { id: column, value } } = e
    setData({
      ...data,
      [column]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Validar todos los campos
    const errors = []
    let obj = resetAlerts()

    Object.keys(data).forEach((column, i) => {
      if(data[column] !== ''){
        console.log(`${column}`);
        return
      }

      errors.push(i)
      obj = {
        ...obj,
        [column]: {
          ...obj[column],
          status: true
        }
      }
    })

    setAlert(obj)

    if(errors.length){
      return
    }

    const { name, subject, msg } = data
    window.open(`mailto:mtz0mau2002@gmail.com?Subject=${subject}&body=${msg}%0AEnviado por ${name}`, '_blank')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4"
    >
      <div className="grid gap-1">
        <Label htmlFor='name'>Nombre Completo</Label>
        <input 
          onChange={handleChange}
          type="text"
          className={`bg-gray-800 text-gray-200 px-5 py-2 rounded-md focus-visible:outline-none focus-visible:outline-gray-700 placeholder:text-gray-400 border ${alert.name.status ? 'border-red-500' : 'border-gray-800'}`}
          placeholder="Ingresa tu nombre"
          id="name"
          value={data.name}
          autoComplete='nickname'
        />
        {alert.name.status && (
          <div className="text-red-500">{alert.name.msg}</div>
        )}
      </div>
      
      <div className="grid gap-1">
        <Label htmlFor='subject'>Asunto</Label>
        <input 
          onChange={handleChange}
          type="text"
          className={`bg-gray-800 text-gray-200 px-5 py-2 rounded-md focus-visible:outline-none focus-visible:outline-gray-700 placeholder:text-gray-400 border ${alert.subject.status ? 'border-red-500' : 'border-gray-800'}`}
          placeholder="Ingresa el asunto"
          id="subject" 
          value={data.subject}
        />
        {alert.subject.status && (
          <div className="text-red-500">{alert.subject.msg}</div>
        )}
      </div>
      
      <div className="grid gap-1">
        <Label htmlFor='msg'>Mensaje</Label>
        <textarea
          onChange={handleChange}
          className={`bg-gray-800 text-gray-200 px-5 py-2 rounded-md focus-visible:outline-none focus-visible:outline-gray-700 placeholder:text-gray-400 resize-none border ${alert.msg.status ? 'border-red-500' : 'border-gray-800'}`}
          id="msg" 
          value={data.msg}
          rows={4}
          placeholder='Ingresa tu mensaje'
        ></textarea>
        {alert.msg.status && (
          <div className="text-red-500">{alert.msg.msg}</div>
        )}
      </div>

      <Button type="submit" className='w-fit mt-1'>
        Enviar
      </Button>
    </form>
  )
}

export default Form
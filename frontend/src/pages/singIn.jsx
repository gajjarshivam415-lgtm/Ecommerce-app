import { useState } from "react"
import api from '../api/axios'

const SingIn = () => {
    const [form, setForm] = useState({
       name:'',
       email:'',
       password:''
    })

    const [msg,setMsg] = useState('')

    
    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]:[e.target.value]
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post('/auth/singIn', form)
            setMsg(response.data.massage)

        } catch (err) {
            setMsg(err.response?.data?.message|| err.massage)
        }

    }
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
            <div className="w-1/4 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl py-8">SingIn</h1>
                <h3>{msg}</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <h3>Username</h3>
                    <input type="text" name="name" onChange={handleChange} className=""/>
                    <h3>Email</h3>
                    <input type="text" name="email" onChange={handleChange} />
                    <h3>Password</h3>
                    <input type="password" name="password" onChange={handleChange} className=""/><br/>

                    <button type="submit" className="bg-blue-400 py-2 text-xl rounded-2xl hover:scale-101">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SingIn
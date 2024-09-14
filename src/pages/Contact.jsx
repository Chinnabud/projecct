import React from 'react'
import Layout from '../components/Layout'; 

const Contact = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 mt-10 text-alin:center">ช่องทางการติดต่อ</h1>
      <hr className='mt-5 mb-5' />

      <div className="card shadow rounded-md p-10 bg-slate-100">
      <h2>062-9387887,087-898989</h2>
      <h2>90 ถนน เทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม นครปฐม 73000</h2>
      <h2>rodde@gmail.com</h2>
   

      </div>
      <h1 className="font-bold text-4xl text-blue-950 mt-10 text-alin:center">ช่องทางออนไลน์</h1>
      
    </Layout>
  )
}

export default Contact
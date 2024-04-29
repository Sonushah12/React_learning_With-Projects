import React from 'react'
import {Col, Container, Row, Form} from 'react-bootstrap'


const handleClick = ()=>{
    alert("You clicked me!")
}

const LogIn = () => {
  return (
    <>
        <Container>
            <Row>
                <Col lg='3'>
                    <div className='rounded-lg border-2 border-solid border-sky-500'>
                        <h1 className='p-5 mt-4 mb-3 text-red-700 text-4xl'> Log In</h1>
                    <Form  method='post'>
                        <label className= ' text-center p-3 mt-2 border-rounded outline-none' htmlFor="email" clas>Email: </label>
                        <input
                            className='w-100 p-2 mb-2 rounded-lg border-gray-500 border-2 bg-white '
                         type="email" id="email" name="email" placeholder="Enter your email"/><br/>
                        <label htmlFor="password" className='text-center p-3 mt-2 border-rounded outline-none'>Password: </label>
                        <input
                            className='w-100 p-2 mb-2 border-2 rounded-lg border-gray-500'
                             type="password" placeholder='password' />
                    </Form>
                    <button  onClick={handleClick} className='p-2 mt-4 mb-3 text-gray-900 rounded-lg bg-sky-700 boder-solid hover:bg-lime-400'>Submit</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default LogIn
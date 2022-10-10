import React from 'react';
import { Form } from 'react-bootstrap';

const Inquiry = () => {
    return (
        <div className='bg-success w-75 mx-auto my-5 rounded-3'>
            <h1 className='text-center text-warning pt-5'>Want to Ask something?</h1>
               <Form className='w-50 mx-auto py-5 text-white'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Inquiry</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <button type="button" class="btn btn-warning my-5 mx-auto">Submit</button>
            </Form.Group>
        </Form>

        </div>
        
     
    );
};

export default Inquiry;
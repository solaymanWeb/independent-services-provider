import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div>
          <Container fluid="md">
            <Row>
                <Col>
              <div className='blog-text'>
              <h3>Why are you using firebase? what other option do you have to implement authentication</h3>
              <p></p>
                <p></p>
              </div>
                </Col>
            </Row>
            <Row>
         
            <Col>
            <div className="blog-text">
                <h3>What other service dose firebase provided other then authentication</h3>
                <p>ফায়ারবেজ শুধু আমাদেরকে অথেনটিকেশন এর ‍সর্ভিস দেয় না । আর ও অনেক কিছু দিয়ে থাকে ।সকল ধরনের অথেনটিকেশন ‍সিস্টেম গুগল অথেনটিকেশন, ইমেইল পাসওয়ার্ড অথেনটিকেশন, ফেসবুক, টুইটার গিটহাব ইত্যাদি অথেনটিকেশন । এর পরে সার্ভার / ডাটাবেস সিস্টেম ও  আমরা ফায়ারবেস থেকে ব্যবহার কেরতে পারি । আবার যদি কোন ইমেজ রাখার স্টোরেজ প্রয়োজন হয় সেটাই ও ফায়ারবেজ আমাদেরকে প্রভাইট করে থাকে । ফায়ারবেজ  এ আমরা সাইট হোস্ট করতে পারি । ফায়ারবেজ আমাদেরকে হোস্টিং দিয়ে থাকে । আমরা চাইলে রিয়েল টাইম অ্যাপ তৈরি করতে পারি ফায়ারবেজ এ সিস্টেম ব্যবহার করে ।  </p>
                </div>
                </Col>
         
            </Row>
            </Container>
        </div>
    );
};

export default Blog;
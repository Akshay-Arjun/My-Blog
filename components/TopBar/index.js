import React, { Component } from 'react';
import Link from 'next/link';
import { ORG_NAME } from '../../lib/constants';
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from '../Container';

export default class TopBar extends Component {
  render() {
    return (
      <>
      <Container>
        <div style={{ textAlign: 'center' ,paddingTop:'20px'}}>
          <Link href="/">
          <span className='cursor-pointer text-accent-2 text-sm font-bold text-accent-3 site-title mx-auto'>{ORG_NAME}</span>
          </Link>
        </div>
        
        </Container>
      </>
    );
  }
}

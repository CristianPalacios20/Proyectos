// import React from 'react'
import Header from './components/header';
import Menu from './components/menu';
import Main from './components/main';
import '../../styles/dashboard.css';

export default function Dashboard() {
  return (
    <>
      <div className='dashboard'>
          <Header/>
          <Menu/>
          <Main/>
      </div>
    </>
  )
}

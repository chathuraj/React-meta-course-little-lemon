import React ,{ useState } from 'react'
import Nav from './Nav'
import '../styles.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header  className={`col-12 ${isOpen ? "open-containor" : ""}`}>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}

export default Header

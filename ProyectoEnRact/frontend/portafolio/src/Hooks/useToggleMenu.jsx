import { useState } from 'react'

export default function useToggleMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () =>{
        setIsMenuOpen(prev => !prev);
    }
    
  return { isMenuOpen, toggleMenu }
}

import React from 'react'
import {Link} from 'react-router-dom'
import s from './Routes.module.css'

function Header() {
    return (
        <div className={s.dropdown}>
            <button className={s.dropbtn}>Navbar</button>
            <div className={s.dropdownContent}>
                <Link to="pre-junior">Pre-Junior</Link>
                <Link to="junior">Junior</Link>
                <Link to="junior-plus">Junior-Plus</Link>
            </div>
        </div>
    )
}

export default Header

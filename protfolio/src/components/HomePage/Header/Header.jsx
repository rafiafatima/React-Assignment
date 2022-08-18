import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div>
             {/* Nvabr Code Start Here */}
             <header className='d-flex justify-content-between align-items-center main_header p-3'>
                    <div className='logo_main'>

                    </div>
                    <div>
                        <ul className='d-flex navigation'>
                            <li>
                                <a href='!'>Home</a>
                            </li>
                            <li>
                                <a href='!'>About</a>
                            </li>
                            <li>
                                <a href='!'>Protfolio</a>
                            </li>
                            <li>
                                <a href='!'>Pages</a>
                            </li>
                            <li>
                                <a href='!'>Blog</a>
                            </li>
                            <li>
                                <a href='!'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='lets_talk_btn'>Let's Talk</button>
                    </div>
                </header>
    </div>
  )
}

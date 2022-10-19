import React from 'react'


export default function Header(){
    return(
        <header>
            <div className='flex'>
                <div>
                    <img src="../img/logo.png" alt="" />   
                </div>
                <div>
                    <button className='botton-2'>Crear cuenta</button>
                    <button className='botton-2'>Iniciar sesión</button>
                </div>
            </div>
        </header>
    )
}
import { useState } from 'react'
import bg from "../assets/bg.jpg"
import girl from "../assets/girl.png"
import trees from "../assets/trees.png"
import leaf1 from "../assets/leaf_01.png"
import leaf2 from "../assets/leaf_02.png"
import leaf3 from "../assets/leaf_03.png"
import leaf4 from "../assets/leaf_04.png"
 
function Fall() {

  return (
    <>
      <div className='relatove flex justify-center items-center w-[100%] h-[100vh] overflow-x-hidden'>
        <div className='absolute w-[100%] h-[100vh] overflow-hidden flex content-center items-center z-[1] pl-[50%]'>
          <div className='absolute block inset-0 pointer-events-none w-[100%] h-[100%] top-0 left-0'>
              <div><img src={leaf1} alt="" className='relative left-[20%] animate-slideOutDown'></img></div>
              <div><img src={leaf2} alt="" className='relative left-[20%] animate-slideOutDown'></img></div>
              <div><img src={leaf3} alt="" className='relative left-[70%] animate-slideOutDown'></img></div>
              <div><img src={leaf4} alt="" className='relative left-[70%] animate-slideOutDown'></img></div>
              <div><img src={leaf1} alt="" className='relative left-[10%] animate-slideOutDown'></img></div>
              <div><img src={leaf2} alt="" className='relative left-[45%] animate-slideOutDown'></img></div>
              <div><img src={leaf3} alt="" className='relative left-[90%] animate-slideOutDown'></img></div>
              <div><img src={leaf4} alt="" className='relative left-[75%] animate-slideOutDown'></img></div>
          </div>
        </div>
        <img src={bg} alt="" className='absolute top-0 left-0 w-[100%] h-[100%] object-cover'></img>
        <img src={girl} alt="" className='absolute animate-wiggle pb-20 h-[60%]'></img>
        <div className='relative p-[60px] bg-bg-rgba backdrop-blur-[15px] border-solid border-x-white border-[1px]
        border-b-[1px] border-b-solid border-b-border
        border-r-solid border-r-[1px] border-r-border
        rounded-[20px] w-[500px] flex flex-col gap-[30px] shadow-2xl shadow-black'>
          <h2 className='relatove w-[100%] text-center text-4xl font-semibold text-red-900 mb-[10px]'>Login</h2>
          <div>
            <input type="text" placeholder='Usuário' className='relative w-[100%] pt-[15px] pr-[20px] outline-none text-lg 
            text-red-900 rounded-md bg-white border-none pl-5 pb-2 mb-5 placeholder:text-red-900'></input>
            <input type="password" placeholder='Senha' className='relative w-[100%] pt-[15px] pr-[20px] outline-none text-lg 
            text-red-900 rounded-md bg-white border-none pl-5 pb-2 mb-5 placeholder:text-red-900'></input>
          </div>
          <div>
            <input type="submit" value="Login" className='relative w-[100%] pt-[15px] pr-[20px] outline-none rounded-md border-none pl-5 pb-3
              bg-red-900 text-white cursor-pointer text-lg font-semibold duration-250 hover:bg-red-600'></input>
          </div>
          <div className='flex-nowrap content-between'>
            <a href="#" className='text-lg text-red-900 font-medium decoration-none'>Esqueceu sua senha?</a>
            <a href="#" className='text-lg text-red-900 font-medium underline pl-24'>Cadastre-se</a>
          </div>
        </div>
        <img src={trees} alt="" className='absolute top-0 left-0 w-[100%] h-[100%] object-cover z-100 pointer-events-none'></img>
      </div>
    </>
  )
}

export default Fall

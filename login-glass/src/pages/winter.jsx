import winterbg from "../assets/winterbg.jpg"
import girlwinter from "../assets/girl1.png"
import trees from "../assets/treessnow.png"
import snow1 from "../assets/snow1.png"
import snow2 from "../assets/snow2.png"

import {Link} from "react-router-dom" 

function Winter () {
    return (
        <div className='relative flex justify-center items-center w-[100%] h-[100vh] overflow-x-hidden'>
        <div className='absolute w-[100%] h-[100vh] overflow-hidden flex content-center items-center z-[1] pl-[50%]'>
          <div className='absolute block inset-0 pointer-events-none w-[100%] h-[100%] top-0 left-0'>
             <div><img src={snow1} alt="" className='relative h-[50px] w-[50px] left-[20%] animate-[slideOutDown2_6s_linear_infinite]'></img></div>
              <div><img src={snow2} alt="" className='relative left-[25%] animate-[slideOutDown2_8s_linear_infinite]'></img></div>
              <div><img src={snow2} alt="" className='relative left-[60%] animate-[slideOutDown2_4s_linear_infinite] '></img></div>
              <div><img src={snow2} alt="" className='relative left-[77%] animate-[slideOutDown2_7s_linear_infinite]'></img></div>
              <div><img src={snow2} alt="" className='relative h-[50px] w-[50px] left-[10%] animate-[slideOutDown2_6s_linear_infinite]'></img></div>
              <div><img src={snow1} alt="" className='relative h-[50px] w-[50px] left-[45%] animate-[slideOutDown2_5s_linear_infinite]'></img></div>
              <div><img src={snow2} alt="" className='relative left-[90%] animate-[slideOutDown2_9s_linear_infinite]'></img></div>
              <div><img src={snow2} alt="" className='relative left-[75%] animate-[slideOutDown2_6s_linear_infinite]'></img></div>
              <div><img src={snow2} alt="" className='relative left-[70%] animate-[slideOutDown2_7s_linear_infinite]'></img></div>
              <div><img src={snow2} alt="" className='relative h-[30px] w-[30px] left-[15%] animate-[slideOutDown2_7s_linear_infinite]'></img></div>
              <div><img src={snow1} alt="" className='relative h-[50px] w-[50px] left-[48%] animate-[slideOutDown2_4s_linear_infinite]'></img></div>
              <div><img src={snow2} alt="" className='relative left-[94%] h-[30px] w-[30px] animate-[slideOutDown2_3s_linear_infinite]'></img></div>
              <div><img src={snow2} alt="" className='relative h-[30px] w-[30px] left-[71%] animate-[slideOutDown2_5s_linear_infinite]'></img></div>  
          </div>
        </div>
        <img src={winterbg} alt="" className='absolute top-0 left-0 w-[100%] h-[100%] object-cover'></img>
        <img src={girlwinter} alt="" className='absolute animate-wiggle2 pb-10 h-[100%]'></img>
        <Link to="/"> <button className="fixed h-[5%] w-[5%] rounded-full bg-purple-500 right-12 bottom-[60%] text-black font-bold text-lg cursor-pointer duration-200 z-50 hover:bg-purple-200" type="buttom">Mudar &#10140;</button></Link>
        <div className='relative p-[60px] bg-bg-rgba backdrop-blur-[15px] border-solid border-x-white border-[1px]
        border-b-[1px] border-b-solid border-b-border
        border-r-solid border-r-[1px] border-r-border
        rounded-[20px] w-[500px] flex flex-col gap-[30px] shadow-2xl shadow-black z-[2]'>
          <h2 className='relatove w-[100%] text-center text-4xl font-semibold text-sky-900 mb-[10px]'>Login</h2>
          <div>
            <input type="text" placeholder='Usuário' className='relative w-[100%] pt-[15px] pr-[20px] outline-none text-lg 
            text-sky-900 rounded-md bg-white border-none pl-5 pb-2 mb-5 placeholder:text-sky-900'></input>
            <input type="password" placeholder='Senha' className='relative w-[100%] pt-[15px] pr-[20px] outline-none text-lg 
            text-sky-900 rounded-md bg-white border-none pl-5 pb-2 mb-5 placeholder:text-sky-900'></input>
          </div>
          <div>
            <input type="submit" value="Login" className='relative w-[100%] pt-[15px] pr-[20px] outline-none rounded-md border-none pl-5 pb-3
              bg-sky-900 text-white cursor-pointer text-lg font-semibold duration-250 hover:bg-red-600'></input>
          </div>
          <div className='flex-nowrap content-between'>
            <a href="#" className='text-lg text-sky-900 font-medium decoration-none'>Esqueceu sua senha?</a>
            <a href="#" className='text-lg text-sky-900 font-medium underline pl-24'>Cadastre-se</a>
          </div>
        </div>
        <img src={trees} alt="" className='absolute z-100 top-0 left-0 pr-[30%] w-[100%] h-[100%] object-cover pointer-events-none'></img>
      </div>
    )
}

export default Winter

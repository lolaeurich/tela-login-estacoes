import beach from "../assets/beach.jpg"
import surf from "../assets/11.png"
import beach2 from "../assets/9.png"
import sun from "../assets/sun.png" 

function Summer() {

  return (
    <>
      <div className='relatove flex justify-center items-center w-[100%] h-[100vh] overflow-x-hidden'>
        <div className='absolute w-[100%] h-[100vh] overflow-hidden flex content-center items-center z-[1] pl-[50%]'>
          <div className='absolute block inset-0 pointer-events-none w-[100%] h-[100%] top-0 left-0'>
              <div><img src={""} alt="" className='relative left-[20%] animate-slideOutDown'></img></div>
              <div><img src={""} alt="" className='relative left-[20%] animate-slideOutDown'></img></div>
              <div><img src={""} alt="" className='relative left-[70%] animate-slideOutDown'></img></div>
              <div><img src={""} alt="" className='relative left-[70%] animate-slideOutDown'></img></div>
              <div><img src={""} alt="" className='relative left-[10%] animate-slideOutDown'></img></div>
              <div><img src={""} alt="" className='relative left-[45%] animate-slideOutDown'></img></div>
              <div><img src={""} alt="" className='relative left-[90%] animate-slideOutDown'></img></div>
              <div><img src={""} alt="" className='relative left-[75%] animate-slideOutDown'></img></div>
          </div>
        </div>
        <img src={beach} alt="" className='absolute top-0 left-0 w-[100%] h-[100%] object-cover'></img>
        <img src={surf} alt="" className='fixed animate-wiggle pb-20 h-[60%]'></img>
        <img src={sun} alt="" className='absolute animate-pulse right-4 top-[-10%] h-[60%] w-[30%]'></img>
        <div className='relative p-[60px] bg-bg-rgba backdrop-blur-[15px] border-solid border-x-white border-[1px]
        border-b-[1px] border-b-solid border-b-border
        border-r-solid border-r-[1px] border-r-border
        rounded-[20px] w-[500px] flex flex-col gap-[30px] shadow-2xl shadow-black z-[2]'>
          <h2 className='relatove w-[100%] text-center text-4xl font-semibold text-lime-600 mb-[10px]'>Login</h2>
          <div>
            <input type="text" placeholder='Usuário' className='relative w-[100%] pt-[15px] pr-[20px] outline-none text-lg 
            text-lime-500 rounded-md bg-white border-none pl-5 pb-2 mb-5 placeholder:text-lime-500'></input>
            <input type="password" placeholder='Senha' className='relative w-[100%] pt-[15px] pr-[20px] outline-none text-lg 
            text-lime-500 rounded-md bg-white border-none pl-5 pb-2 mb-5 placeholder:text-lime-500'></input>
          </div>
          <div>
            <input type="submit" value="Login" className='relative w-[100%] pt-[15px] pr-[20px] outline-none rounded-md border-none pl-5 pb-3
              bg-lime-500 text-white cursor-pointer text-lg font-semibold duration-250 hover:bg-lime-600'></input>
          </div>
          <div className='flex-nowrap content-between'>
            <a href="#" className='text-lg text-lime-600 font-medium decoration-none'>Esqueceu sua senha?</a>
            <a href="#" className='text-lg text-lime-600 font-medium underline pl-24'>Cadastre-se</a>
          </div>
        </div>
        <img src={beach2} alt="" className='absolute top-0 left-0 w-[100%] h-[100%] object-cover z-100 pointer-events-none'></img>
      </div>
    </>
  )
}

export default Summer

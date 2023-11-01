import spring from "../assets/spring.jpg"
import girl from "../assets/springgirl.png"
import trees from "../assets/1.png"
import flower1 from "../assets/flower1.png"
import flower2 from "../assets/flower2.png"
import flower3 from "../assets/flower3.png"
import flower4 from "../assets/flower4.png"


function Spring () {
    return (
        <div className='relative flex justify-center items-center w-[100%] h-[100vh] overflow-x-hidden'>
        <div className='absolute w-[100%] h-[100vh] overflow-hidden flex content-center items-center z-[1] pl-[50%]'>
          <div className='absolute block inset-0 pointer-events-none w-[100%] h-[100%] top-0 left-0'>
             <div><img src={flower1} alt="" className='relative h-[50px] w-[50px] left-[20%] animate-[slideOutDown2_6s_linear_infinite]'></img></div>
              <div><img src={flower2} alt="" className='relative h-[50px] w-[50px] left-[25%] animate-[slideOutDown2_8s_linear_infinite]'></img></div>
              <div><img src={flower3} alt="" className='relative h-[50px] w-[50px] left-[60%] animate-[slideOutDown2_4s_linear_infinite] '></img></div>
              <div><img src={flower4} alt="" className='relative h-[50px] w-[50px] left-[77%] animate-[slideOutDown2_7s_linear_infinite]'></img></div>
              <div><img src={flower1} alt="" className='relative h-[50px] w-[50px] left-[10%] animate-[slideOutDown2_6s_linear_infinite]'></img></div>
              <div><img src={flower2} alt="" className='relative h-[50px] w-[50px] left-[45%] animate-[slideOutDown2_5s_linear_infinite]'></img></div>
              <div><img src={flower3} alt="" className='relative h-[50px] w-[50px] left-[90%] animate-[slideOutDown2_9s_linear_infinite]'></img></div>
              <div><img src={flower4} alt="" className='relative h-[50px] w-[50px] left-[75%] animate-[slideOutDown2_6s_linear_infinite]'></img></div>
              <div><img src={flower2} alt="" className='relative h-[50px] w-[50px] left-[70%] animate-[slideOutDown2_7s_linear_infinite]'></img></div>
              <div><img src={flower1} alt="" className='relative h-[30px] w-[30px] left-[15%] animate-[slideOutDown2_7s_linear_infinite]'></img></div>
              <div><img src={flower2} alt="" className='relative h-[50px] w-[50px] left-[48%] animate-[slideOutDown2_4s_linear_infinite]'></img></div>
              <div><img src={flower4} alt="" className='relative left-[94%] h-[30px] w-[30px] animate-[slideOutDown2_3s_linear_infinite]'></img></div>
            <div><img src={flower3} alt="" className='relative h-[30px] w-[30px] left-[71%] animate-[slideOutDown2_5s_linear_infinite]'></img></div>
          </div>
        </div>
        <img src={spring} alt="" className='absolute top-0 left-0 w-[100%] h-[100%] object-cover'></img>
        <img src={girl} alt="" className='absolute animate-wiggle2 pb-10 h-[72%]'></img>
        
        <div className='relative p-[60px] bg-bg-rgba backdrop-blur-[15px] border-solid border-x-white border-[1px]
        border-b-[1px] border-b-solid border-b-border
        border-r-solid border-r-[1px] border-r-border
        rounded-[20px] w-[500px] flex flex-col gap-[30px] shadow-2xl shadow-black z-[2]'>
          <h2 className='relatove w-[100%] text-center text-4xl font-semibold text-red-400 mb-[10px]'>Login</h2>
          <div>
            <input type="text" placeholder='Usuário' className='relative w-[100%] pt-[15px] pr-[20px] outline-none text-lg 
            text-red-300 rounded-md bg-white border-none pl-5 pb-2 mb-5 placeholder:text-red-400'></input>
            <input type="password" placeholder='Senha' className='relative w-[100%] pt-[15px] pr-[20px] outline-none text-lg 
            text-red-300 rounded-md bg-white border-none pl-5 pb-2 mb-5 placeholder:text-red-400'></input>
          </div>
          <div>
            <input type="submit" value="Login" className='relative w-[100%] pt-[15px] pr-[20px] outline-none rounded-md border-none pl-5 pb-3
              bg-red-400 text-white cursor-pointer text-lg font-semibold duration-250 hover:bg-pink-600'></input>
          </div>
          <div className='flex-nowrap content-between'>
            <a href="#" className='text-lg text-pink-600 font-medium decoration-none'>Esqueceu sua senha?</a>
            <a href="#" className='text-lg text-pink-600 font-medium underline pl-24'>Cadastre-se</a>
          </div>
        </div>
        <img src={trees} alt="" className='absolute z-100 top-0 left-0 pr-[30%] w-[100%] h-[100%] object-cover pointer-events-none'></img>
      </div>
    )
}

export default Spring
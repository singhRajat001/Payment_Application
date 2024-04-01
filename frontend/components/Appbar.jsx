import { Button } from "./Button"
import { useNavigate } from "react-router-dom";
export const Appbar = ({name}) => {
    const navigate = useNavigate();
  return <div className={'shadow h-14 flex justify-between bg-green-50 text-white'}>
      <div className={'flex flex-col justify-center h-full ml-4 text-black font-bold'}>
          Payment App
      </div>
      <div className={'flex'}>
          <div className={'flex flex-col justify-center h-full mr-4 text-black font-bold'}>
              {name}
          </div>
          <div className={'text-black flex flex-col justify-center h-full mr-4 font-bold'}>
            <Button label={"Logout>"} 
                onClick={()=>{
                    navigate("/")
                    localStorage.removeItem("token")
                }}
            >Logout</Button>
          </div>
      </div>
  </div>
}
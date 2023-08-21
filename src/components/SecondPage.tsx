import { useNavigate } from "react-router-dom";
import { DataDisplay } from "./DataDisplay";
import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {            // More props can be added in future
    setInvalidTry: Dispatch<SetStateAction<boolean>>;
}

export const SecondPage:React.FC<Props> = (props: Props) => {
  const navigate = useNavigate()
  
  //console.log(localStorage.getItem('datakey'))

  if(localStorage.getItem('datakey')){
    return(
        <DataDisplay/>
    )
  }else{
    useEffect(() => {
        props.setInvalidTry(true);
        navigate('/');
    })
  }
}

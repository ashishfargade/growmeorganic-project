import { useNavigate } from "react-router-dom";
import { DataDisplay } from "./DataDisplay";
import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {            // More props can be added in future
    userExists: boolean;
    setInvalidTry: Dispatch<SetStateAction<boolean>>;
}

export const SecondPage:React.FC<Props> = (props: Props) => {
  const formDone = props.userExists;
  const navigate = useNavigate()

  if(formDone === true){
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

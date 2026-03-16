import Button from "../../../components/Button/Button";

import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'


import { PageWrapper, ButtonControl } from "./styles";

function Aple() {
    const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    return () => {
    }
  }, [])
   return (
    <PageWrapper>
 Aple is popular company
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Aple;

   

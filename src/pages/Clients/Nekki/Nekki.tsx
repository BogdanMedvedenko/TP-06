import Button from "../../../components/Button/Button";

import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'


import { PageWrapper, ButtonControl } from "./styles";

function Nekki() {
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
 Nekki is game  company
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}
export default Nekki;
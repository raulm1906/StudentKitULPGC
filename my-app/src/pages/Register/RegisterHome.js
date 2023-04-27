import RegisterForm from "./RegisterForm";
import RegisterPortada from "./RegisterPortada";
import { Box } from "@chakra-ui/react";
function RegisterHome() {
    return(
       <Box display={"flex"}>
        <RegisterForm style={{flexBasic: '50%'}}>
        </RegisterForm>
        <RegisterPortada style={{flexBasic: '50%'}}>
        </RegisterPortada>
       </Box>
    )
}

export default RegisterHome
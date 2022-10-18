import { Button, Center, Stack, Text, Image, Input } from "@chakra-ui/react"
import { Session } from "next-auth"
import { signIn } from "next-auth/react"
import { useState } from "react";

interface IAuthProps {
    session: Session | null;
    reloadSession: () => void
}

const Auth: React.FunctionComponent<IAuthProps> = ({session, reloadSession})=> {

    const [username, setUsername] = useState('')

    const onSubmit = async () =>{
        try{

        }catch(error){
            console.log("onSubmit error", error)
        }

    }
    return (

        <Center height='100vh' border = '1px solid red'>
            <Stack spacing ={8} align="center">
                {session ? (
                    <>
                        <Text fontSize="3xl">Create a username</Text>
                        <Input placeholder="Entter a username" value ={username} onChange = {(event) => setUsername(event.target.value)}></Input>
                        <Button width="100%" onClick={onSubmit}>Save</Button>
                    </>
                ) : 
                <>
                    <Text fontSize = "3xl">MessangerQl</Text>
                    <Button onClick={() => signIn('google')} leftIcon = {<Image height="20px" src="/images/googlelogo.png"/>}>
                        Continue with google
                    </Button>
                </>}
            </Stack>
        </Center>
    )
}

export default Auth
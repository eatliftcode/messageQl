import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

const Chat = (props) => {
    return (
        <div>Chat
            <Button onClick={() => signOut()}>Log Out</Button>
        </div>
    )
}

export default Chat;
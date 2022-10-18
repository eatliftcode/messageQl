import { Box } from '@chakra-ui/react';
import type { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from "next-auth/react";
import Auth from '../components/auth/auth';
import Chat from '../components/chat/chat';
import { Session } from 'next-auth';

const Home: NextPage = () => {
  const {data} = useSession();
  console.log("HERE is data", data)

  const reloadSession = () => {

  }

  return (
      <Box>
        {data?.user.username ? <Chat/> : <Auth session={data} reloadSession = {reloadSession}/>}
      </Box>
  )
}

export const getServerSideProps = async (context: NextPageContext)=>{
  const session = await getSession(context)

  return {
    props: {
      data: session
    }
  }
}

export default Home

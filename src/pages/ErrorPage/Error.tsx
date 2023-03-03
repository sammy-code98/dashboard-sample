import React from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { useRouteError, Link } from 'react-router-dom'

type RouteError = {
  statusText?: string;
  message?: string
}
export default function Error() {
  const err = useRouteError() as RouteError
  return (
    <Box>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' py='12rem'>
        <Heading size='4xl' color='primary.100'>Opps</Heading>
        <Box mt='2rem' px='1rem'>
          <Text color='primary.700' fontSize='xl' textAlign='center'>Sorry, an unexpected error has occurred  or Something you are looking for is {" "}
            <Text as='span' color='primary.100' fontWeight={700}> {" "}{err?.statusText || err?.message}</Text>
            .</Text>
        </Box>
        <Box mt='2rem'>
          <Link to='/'>
            <Button variant='solid' bg='primary.100' color='white' _hover={{
              opacity: '.8'
            }}>
              Take me Home
            </Button>
          </Link>

        </Box>

      </Box>
    </Box>
  )
}


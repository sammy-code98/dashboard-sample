import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {
    Box, Text, Image, Spacer, FormControl,
    FormLabel,
    Input,
    Button,
} from "@chakra-ui/react"
import Logo from "../../assets/logo.svg"
import { loginSchema } from '../../utils/yupSchema'

interface LoginInputs {
    email: string,
    password: string
}
export default function Login(): JSX.Element {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>({
        resolver: yupResolver(loginSchema)
    })

    const onSubmit = (data: LoginInputs, e: any) => {
        e.preventDefault()
        console.log(data);

    }
    return (
        <Box >
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                py='10rem'
            >
                <Box p='4rem' bgColor='white' borderRadius='xl' shadow={{ base: 'none', md: 'md' }}>
                    <Box display='flex' justifyContent='space-between' alignItems='center' gap={12}>
                        <Image src={Logo} alt='credib logo' />
                        <Spacer />
                        <Text color='primary.700' fontWeight={700} fontSize='xl'>Login</Text>
                    </Box>
                    <Box as='form' mt='2rem' onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel htmlFor='email' mb=".5em" color='primary.700'>Email address</FormLabel>
                            <Input type='email'
                                variant='filled'
                                border="2px"
                                placeholder="credibvendor@gmail.com"
                                _placeholder={{ opacity: 1, color: 'textFaint' }}
                                size="md"
                                focusBorderColor="primary.200"
                                {...register("email", {
                                    required: true,
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                                })}
                            />
                            <Text mt='.5em' color='red.500'>{errors.email?.message}</Text>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='password' mb=".5em" mt='1rem' color='primary.700'>Enter Password</FormLabel>
                            <Input type='password'
                                variant='filled'
                                border="2px"
                                placeholder="6+ Characters"
                                _placeholder={{ opacity: 1, color: 'textFaint' }}
                                size="md"
                                focusBorderColor="primary.200"
                                {...register("password", { required: true })}
                            />
                            <Text mt='.5em' color='red.500'>{errors.password?.message}</Text>
                        </FormControl>
                        <Box mt='2rem'>
                            <Button type="submit"
                                colorScheme='primary'
                                variant='solid'
                                borderRadius='8px'
                                width='100%'>
                                Login
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

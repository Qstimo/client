import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFormData } from "@/types/auth.interface";
import Loader from "@/components/ui/Loader";
import Button from "@/components/ui/button/button";
import AuthFields from "./AuthFields";
import { useAuthMutations } from "./useAuthMutation";


export const Auth: FC = () => {
    const [isReg, setIsReg] = useState(false)

    
    const { handleSubmit, reset, control } = useForm<IAuthFormData>({
        mode: 'onChange',
        
    })

    const { isLoading, loginSync, registerSync } = useAuthMutations(reset)

    const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
        if (isReg) registerSync(data)
            else loginSync(data)
    }
    
    const textAuth = isReg ? 'Sign Up' : 'Login'


    return (
        <View className="mx-2 items-center justify-center h-full" >
            <View className="w-9/12">
                <Text className="text-center text-black text-3xl font-medium mb-8">
                    {textAuth}
                </Text>

                {isLoading
                    ? <Loader />
                    : <>
                        <AuthFields control={control} />

                        <Button onPress={handleSubmit(onSubmit)}>{textAuth}</Button>
                        <Pressable onPress={() => setIsReg(prev => !prev)}>
                            <Text className="text-black text-center text-base mt-6" >
                                {isReg
                                    ? 'Already have an account?'
                                    : 'Don`t have an account?'}
                                <Text className="text-[#47aa52]">
                                    {textAuth}
                                </Text>
                            </Text>
                        </Pressable>
                    </>}
            </View>
        </View>
    )
}
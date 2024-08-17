import { FC, PropsWithChildren } from "react";
import { Pressable, Text } from "react-native";
import { IButton } from "./button.interface";
import clsx from 'clsx'

 const Button:FC<PropsWithChildren<IButton>> = ({children, className, ...rest})=>{
    return (
        <Pressable {...rest} className={clsx('self-center mt-3.5 bg-[#47aa52] w-full py-3 font-light rounded-lg', className)}>
            <Text className="text-white text-center font-medium text-lg">{children}</Text>
        </Pressable>
    )
}
export default Button
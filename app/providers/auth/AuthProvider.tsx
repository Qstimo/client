import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { IContext, TypeUserState } from "./auth-provider.interface";
import * as SplashScreen from 'expo-splash-screen'
import { IUser } from "@/types/user.interface";
import { getAccessToken, getUserFromStorage } from "@/services/auth/auth.helper";

let ignore = SplashScreen.preventAutoHideAsync()

export const AuthContext = createContext({ } as IContext)
 const AuthProvider:FC<PropsWithChildren<unknown>> = ({children})=>{
    const [user, setUser ] = useState<TypeUserState>({} as IUser)

    useEffect(()=>{
        let mounted = true
        const checkAccessToken = async ()=>{
            try {
                const accessToken = await getAccessToken()

                if(accessToken){
                    const user = await getUserFromStorage()
                    if(mounted) setUser(user)
                }
            } catch {
                
            } finally{
                await SplashScreen.hideAsync()
            }
        }

        let ignore = checkAccessToken()

        return ()=>{
            mounted = false
        }
    },[])


    return (
        <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider
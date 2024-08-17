import { useAuth } from "@/hooks/useAuth";
import { FC } from "react";
import { Image, Text, View } from "react-native";
import { useProfile } from "./useProfile";
import Layout from "@/components/ui/layout/Layout";
import Heading from "@/components/ui/layout/Heading";
import Button from "@/components/ui/button/button";
import { AuthService } from "@/services/auth/auth.service";

 const Profile:FC = ()=>{
    const {setUser} = useAuth()

    const {profile} = useProfile()

    return (
        <Layout>
            <Heading isCenter>Profile</Heading>

            <View className="my-6 items-center justify-center">
                <Image source={{uri: profile?.avatarPath}} className="w-40 h-40 rounded-full"/>
            </View>
            <Button onPress={()=> AuthService.logout().then(()=> setUser(null))} className="mt-5">Logout</Button>
        </Layout>
    )
}
export default Profile

import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useGetAllCategoryes } from "./useGetAllCategoryes";
import { useTypedNavigation } from "@/hooks/udeTypedNavigation";
import Loader from "@/components/ui/Loader";
import Heading from "@/components/ui/layout/Heading";
import { getMediaSource } from "@/utils/getMediaSource";


const Categories: FC = () => {
    const { categories, isLoading } = useGetAllCategoryes()
    const { navigate } = useTypedNavigation()

    return isLoading ? <Loader /> : (
        <View className="flex flex-col mt-5 mb-4">
            <Heading>
                Categories
            </Heading>

            <View className="flex-row justify-center mt-5">
                {categories?.map(categories => (
                    <Pressable className="rounded-xl bg-gray-100 p-5 mx-2 " key={categories.id} onPress={() => navigate('Category', { slug: categories.slug })}>
                        <Image
                            source={getMediaSource(categories.image)}
                            className="w-10 h-8 mb-2 p-3"
                            style={{ resizeMode: 'cover' }}
                        />
                        <Text className="font-normal text-ts text-center">{categories.name}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    )
}
export default Categories

import { useTypedNavigation } from "@/hooks/udeTypedNavigation";
import { IProduct } from "@/types/product.interface";
import { getMediaSource } from "@/utils/getMediaSource";
import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import ProductInfo from "./ProductInfo";

interface IProductItem {
    product: IProduct
}


const ProductItem: FC<IProductItem> = ({ product }) => {
    const { navigate } = useTypedNavigation()

    return (
        <View className="rounded-lg flex-col mb-3.5" >
            <Pressable
                onPress={() => navigate('Product', { slug: product.slug })}
                className="bg-gray-100 rounded-xl relative overflow-hidden p-5 flex items-center justify-center"
            >
                <Image width={130} height={130} source={getMediaSource(product.image)}/>
            </Pressable>
            <ProductInfo product={product}/>
        </View>
    )
}
export default ProductItem  
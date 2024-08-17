
import { IProduct } from "@/types/product.interface";
import { convertPrice } from "@/utils/convertPrice";
import { FC } from "react";
import { Text, View } from "react-native";


interface IProductInfo {
    product: IProduct
}

const ProductInfo: FC<IProductInfo> = ({ product }) => {
    return (
        <View className="my-3 ">
            <Text className="font-semibold text-base ">
                {product.name}
            </Text>
            <Text className="py-1.5 ">
                {product.category.name}
            </Text>
            <Text className="font-normal mt-1 text-sm text-center py-0.5 w-[55px] rounded-full text-white bg-[#47aa52]">
                {convertPrice(product.price)}
            </Text>
        </View>
    )
}
export default ProductInfo
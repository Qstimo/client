import { useTypedRoute } from "@/hooks/udeTypedRoute"
import { ProductService } from "@/services/product.service"
import { useQuery } from "@tanstack/react-query"

export const useProduct = () => {
    const { params } = useTypedRoute<'Product'>()

    const { isLoading, data: product } = useQuery({
        queryKey: ['get product by slug', params.slug],
        queryFn: () => ProductService.getBySlug(params.slug)
    })
    const productId = product?.id || ''



    return {  product, isLoading }
}
import { useTypedRoute } from "@/hooks/udeTypedRoute"
import { CategoryService } from "@/services/categories.service"
import { ProductService } from "@/services/product.service"
import { useQuery } from "@tanstack/react-query"

export const useCategory = () => {
    const { params } = useTypedRoute<'Category'>()

    const { isLoading: isCategoryLoading, data: category } = useQuery({
        queryKey: ['get category by slug', params.slug],
        queryFn: () => CategoryService.getBySlug(params.slug)
    })
    const categoryId = category?.id || ''

    const { isLoading: isProductLoading, data: products } = useQuery({
        queryKey: ['get product category by slug', params.slug],
        queryFn: () => ProductService.getByCategory(params.slug),
        enabled: !!categoryId
    })

    return { category, products, isLoding: isCategoryLoading || isProductLoading }
}
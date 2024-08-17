import { useForm } from "react-hook-form"
import { ISearchFormData } from "./seacrh.interface"
import { useDebounce } from "@/hooks/useDebounce"
import { useMemo } from "react"

export const useSearchForm = () => {
    const { control, watch } = useForm<ISearchFormData>({
        mode: 'onChange',
    })
    const searchTerm = watch('searchTerm')
    const debouncedSeach = useDebounce(searchTerm, 500)

    return useMemo(() => ({ debouncedSeach, searchTerm, control }), [searchTerm])
}

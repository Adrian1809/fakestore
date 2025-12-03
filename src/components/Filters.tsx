"use client";

import { FC } from "react";
import SortByMenu from "./SortByMenu";
import FilterCheckbox from "./FilterCheckbox";
import { useSelector } from "react-redux";
import { selectShop } from "@/redux/features/shopSlice";
import { useListCategoriesQuery } from "@/redux/api/shopAPISlice";

export interface FiltersProps {
  data?: null | string[];
}

const Filters: FC<FiltersProps> = ({ ...props }) => {
  const { activeCategory } = useSelector(selectShop);
  // Obtener categorías desde RTK Query (client-side) para evitar problemas con Cloudflare
  const { data: categories } = useListCategoriesQuery();
  
  // Usar categorías de RTK Query si están disponibles, sino usar props
  const displayCategories = categories || props?.data;

  return (
    <div className="flex w-full justify-between flex-wrap gap-4 px-4 py-4 md:py-8">
      <div className="flex gap-4 flex-wrap items-center">
        {displayCategories?.map((item: string, idx: number) => (
          <div key={idx}>
            <FilterCheckbox label={item} isActive={activeCategory === item} />
          </div>
        ))}
      </div>

      <div className="shrink-0">
        <SortByMenu />
      </div>
    </div>
  );
};

export default Filters;

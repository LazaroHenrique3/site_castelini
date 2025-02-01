import { IHighlightItemType } from "@/types/IHighlightItemType";

export const HighlightCard = ({ item }: { item: IHighlightItemType }) => (
    <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel}>
      <div className="w-[250px] md:w-[300px] flex gap-3 items-center justify-center p-2 rounded-lg border-2 border-gray-300 shrink-0">
        {item.icon}
        <p className="font-semibold text-sm md:text-base text-slate-600">{item.text}</p>
      </div>
    </a>
  );

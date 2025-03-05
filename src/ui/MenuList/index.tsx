import MenuListItem from "./Item";
import { Menu } from "./type";

interface MenuListProps {
  list: Menu[];
}

export default function MenuList({ list }: MenuListProps) {
  return (
    <ul className="flex flex-col gap-y-1.5">
      {list?.length > 0 &&
        list.map((item) => (
          <MenuListItem key={item.name + item.link} {...item} />
        ))}
    </ul>
  );
}

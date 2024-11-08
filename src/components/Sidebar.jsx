import { getCategoryMenu } from "../lib/gameQueries"
import SidebarNav from "../components/SidebarNav"

export default async function SideBar() {
  const categoryMenu = await getCategoryMenu();

  return (
    <aside className="w-64 p-4 hidden lg:flex flex-col">
      <SidebarNav categoryMenu={categoryMenu} />
    </aside>
  )
}
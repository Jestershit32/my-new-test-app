import HeaderLogo from "@components/нeader-logo/header-logo"
import style from "./header.module.css"
import MiniProfileCard from "@components/miniProfileCard/miniProfileCard"


export default function Header() {

  return <header className={style.header}>
    <HeaderLogo className={style.headerLogo} />
    <MiniProfileCard />
  </header>
}
import HeaderLogo from "@/components/header-logo/header-logo"
import style from "./header.module.css"


export default function Header() {

  return <header className={style.header}>
    <HeaderLogo className={style.headerLogo} />
  </header>
}
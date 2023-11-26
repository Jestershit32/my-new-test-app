import Image from "next/image"
import style from "./miniProfileCard.module.css"
import iconCreator from "@services/whiteIcons/iconCreator.svg"
import {comfortaa} from "@utils/constants/fonts"


export default function MiniProfileCard() {

  return (
    <div className={style.miniProfileCard+" "+ comfortaa.className}>
      <div className={style.miniProfileCard__fistBlock}>
        <Image className={style.miniProfileCard__image} src={""} alt={""} />
        <p className={style.miniProfileCard__name} >Веденев Максим</p>
      </div>
      <div className={style.miniProfileCard__secondBlock}>
        <Image className={style.miniProfileCard__icon} src={iconCreator} alt={iconCreator} />
        <p className={style.miniProfileCard__nick}>jestershit32</p>
      </div>
      <p className={style.miniProfileCard__button}>Выход</p>
    </div>
  )
}
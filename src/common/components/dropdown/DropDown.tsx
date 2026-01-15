import s from './style.module.scss'
type Props = {
    items: string[]
}

export function DropDown ({items}: Props) {
  return (
    <div className={s.content}>DropDown</div>
  )
}

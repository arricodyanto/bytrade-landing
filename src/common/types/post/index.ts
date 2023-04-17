import { Url } from "next/dist/shared/lib/router/router"

export type TArticleProps = {
    src: string
    level: string
    link: Url
    title: string
    body: string
}
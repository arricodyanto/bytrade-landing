export type TCoinItemProps = {
    href?: string
    chips: keyof typeof import('react-cryptoicon')
    name: string
    value: number
    precentage: number
}
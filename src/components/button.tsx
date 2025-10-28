interface Props {
    text: string;
    styles?: string;
}
export const Button = ({ text, styles='' }: Props) => {
    return (
 <button className={`bg-gradient-to-b from-teal-200 to-cyan-500 
    h-12 ${styles} rounded-3xl hover:from-cyan-500 hover:to-teal-200 cursor-pointer` }>{text}</button>
    )
}
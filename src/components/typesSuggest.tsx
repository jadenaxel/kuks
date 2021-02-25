import { memo } from "react"

function typesSuggest({ icon = "", title, quantity }: { icon: string | undefined, title: string, quantity: number }) {
    if (icon.length === 0) {
        return (
            <div className="suggest-border d-flex justify-content-between align-items-center">
                <p>{title}</p>
                <p>({quantity})</p>
            </div>
        )
    }
    return (
        <div className="suggest-border d-flex justify-content-between align-items-center">
            <i className={icon}></i>
            <p>{title}</p>
            <p>({quantity})</p>
        </div>
    )
}
export default memo(typesSuggest);
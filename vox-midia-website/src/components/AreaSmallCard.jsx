import { Link } from "react-router"

export default function AreaSmallCard (props) {
    return (
        <>
            <Link>
                <div>
                    <h3 className="font-league-spartan font-medium text-vox-7 text-2xl">{props.children}</h3>
                </div>
            </Link>
        </>
    )
}
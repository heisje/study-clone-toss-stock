import Svgs from "@/shared/svgs/sprites.svg"
import {HTMLAttributes} from "react";

type SVGIconNames =
    | 'search'
    | 'home'
    | 'benefit'
    | 'pay'
    | 'stock'
    | 'line_three'
    | 'heart'
    | 'arrow_right'
    | 'rocket'
    | 'increase'
    | 'pot'
    | 'korea'
    | 'usa'
    | 'graduate'
    | 'factory'
    | 'vehicle'
    | 'meat'
    | 'clothes'
    | 'cosmetic'
    | 'fire'
    | 'toss'

interface SVGIconProps extends HTMLAttributes<SVGElement> {
    iconId: SVGIconNames;
    size: number;
}

export const SvgIcon = ({id, size = 24, ...props}: SVGIconProps) => (
    <svg width={size} height={size} {...props}>
        <use href={`${Svgs}#${id}`}/>
    </svg>
)


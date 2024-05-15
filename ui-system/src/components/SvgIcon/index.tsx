import Svgs from "@/shared/svgs/sprites.svg"
import {HTMLAttributes} from "react";

export type SVGIconNames =
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

export interface SVGIconProps extends HTMLAttributes<SVGElement> {
    iconId: SVGIconNames;
    size?: number;
}

export const SvgIcon = ({iconId, size = 24, ...props}: SVGIconProps) => (
    <svg width={size} height={size} {...props}>
        <use href={`${Svgs}#${iconId}`}/>
    </svg>
)


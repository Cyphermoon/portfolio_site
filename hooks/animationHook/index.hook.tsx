import { animationClassesType } from "./type"

export const useAnimationClass = (animationFunc: Function, animationClasses: animationClassesType) => {
    let isAnimatable: boolean
    let animationClass: string

    if (animationFunc) {
        isAnimatable = true
        animationClass = animationClasses.animatable
    } else {
        isAnimatable = false
        animationClass = animationClasses.non_animatable
    }

    return { isAnimatable, animationClass }
}
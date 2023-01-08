import { animationClassesType } from "./type"

export const useAnimationClass = (animationFunc: Function | undefined, animationClasses: animationClassesType) => {
    /**
     * Returns animatable class if the animatable function is defined.
     * It returns non-animatable class otherwise
     */

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
import { createContext, useContext, useState } from "react"

interface Props {
  children: React.ReactNode
}

interface ContextProps {
  animationLoading: boolean,
  setAnimationLoading: (f: boolean) => void
}

export const useLoaderAnimation = () => useContext(AnimationContext)


const AnimationContext = createContext<ContextProps>({
  animationLoading: true,
  setAnimationLoading: () => { },
})


const LoaderAnimationContext = ({ children }: Props) => {
  const [animationLoading, setAnimationLoading] = useState(true)


  return (
    <AnimationContext.Provider value={{ animationLoading, setAnimationLoading }}>
      {children}
    </AnimationContext.Provider>
  )
}

export default LoaderAnimationContext

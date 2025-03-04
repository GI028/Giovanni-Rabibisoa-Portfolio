import Lottie from "lottie-react"
import React from "react"
import Card from "."

type Props = {
  children: React.ReactNode
  animation: object
  className?: string
  animationClassName?: string
  contentClassName?: string
}

export default function LottieCard({
  animation,
  children,
  className,
  animationClassName,
  contentClassName,
}: Props) {
  return (
    <Card
      head={<Lottie animationData={animation} />}
      headClassName={animationClassName}
      contentClassName={contentClassName}
      className={className}
    >
      {children}
    </Card>
  )
  // return (
  //   <div className="bg-bg-2 rounded p-2 shadow-md">
  //     <div className={cn('aspect-square',animationClassName)}>
  //       <Lottie animationData={animation} />
  //     </div>
  //     <div className={contentClassName}>{children}</div>
  //   </div>
  // )
}

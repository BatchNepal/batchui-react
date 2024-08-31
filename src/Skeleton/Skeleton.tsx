import React from "react"
import { cn } from "../../helpers"


export const Skeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div ref={ref} className={cn("animate-pulse bg-[#f0f0f0e8]", className)} {...rest} />
  )
})

Skeleton.displayName = "batchui-skeleton"


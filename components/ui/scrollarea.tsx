'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from '@/lib/utils'

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(
      'overflow-hidden rounded-md border bg-white dark:bg-gray-950 [--scrollbar-size:10px]',
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="p-2 w-full h-full border-inherit">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar
      orientation="vertical"
      className="flex select-none touch-none p-1 bg-gray-300 dark:bg-gray-700"
    >
      <ScrollAreaPrimitive.Thumb className="flex-1 bg-gray-500 rounded-full" />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner className="bg-gray-200 dark:bg-gray-800" />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

export { ScrollArea }

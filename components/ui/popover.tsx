'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '@/lib/utils'

// Abstract Popover component setup
const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverPortal = PopoverPrimitive.Portal

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <PopoverPortal>
    <PopoverPrimitive.Content
      ref={ref}
      className={cn(
        'z-50 w-64 rounded-md border border-gray-200 bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-950',
        className,
      )}
      {...props}
    >
      {children}
      <PopoverPrimitive.Close className="absolute right-2 top-2 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-gray-300">
        <span className="sr-only">Close</span> ✕
      </PopoverPrimitive.Close>
    </PopoverPrimitive.Content>
  </PopoverPortal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }

'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type KeyboardShortcutsDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const shortcuts = [
  { key: 'P or Space', description: 'Toggle start/pause timer' },
  { key: 'R', description: 'Reset timer to 00:00' },
  { key: 'F', description: 'Toggle fullscreen mode' },
  { key: '?', description: 'Show keyboard shortcuts' },
]

export function KeyboardShortcutsDialog({
  open,
  onOpenChange,
}: KeyboardShortcutsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {shortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-2 last:border-b-0"
            >
              <kbd className="px-3 py-1.5 text-sm font-semibold bg-gray-100 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-600">
                {shortcut.key}
              </kbd>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-4 flex-1 text-right">
                {shortcut.description}
              </span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

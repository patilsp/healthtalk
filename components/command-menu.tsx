"use client"

import { DialogProps } from "@radix-ui/react-alert-dialog"
import {
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import * as React from "react"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/new-york/ui/command"

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search Doctors...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="bg-muted absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[16px] font-medium opacity-100 sm:flex">
          <span className="text-[10px]">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog
        className={cn(
          "fixed inset-0 z-50 bg-black/80",
          "data-[state=open]:animate-in",
          "data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0",
          "data-[state=open]:fade-in-0"
        )}
        open={open}
        onOpenChange={setOpen}
      >
        <div className="relative flex flex-col h-full bg-white rounded-lg overflow-auto p-4">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Links">
              {docsConfig.mainNav
                .filter((navitem) => !navitem.external)
                .map((navItem) => (
                  <CommandItem
                    key={navItem.href}
                    value={navItem.title}
                    onSelect={() => {
                      runCommand(() => router.push(navItem.href as string))
                    }}
                    className={cn(
                      "relative flex cursor-default select-none items-center text-sm outline-none",
                      "aria-selected:bg-accent aria-selected:text-accent-foreground",
                      "data-[disabled]:opacity-50 hover:bg-gray-200 transition-colors rounded-md p-2",
                      {
                        // Add any additional conditional styles here if needed
                        // E.g., "bg-gray-200": open,
                      }
                    )}
                  >
                    <FileIcon className="mr-2 size-4" />
                    {navItem.title}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Theme">
              <CommandItem
                onSelect={() => runCommand(() => setTheme("light"))}
                className={cn(
                  "relative flex cursor-default select-none items-center text-sm outline-none",
                  "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  "data-[disabled]:opacity-50 hover:bg-gray-200 transition-colors rounded-md p-2"
                )}
              >
                <SunIcon className="mr-2 size-4" />
                Light
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => setTheme("dark"))}
                className={cn(
                  "relative flex cursor-default select-none items-center text-sm outline-none",
                  "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  "data-[disabled]:opacity-50 hover:bg-gray-200 transition-colors rounded-md p-2"
                )}
              >
                <MoonIcon className="mr-2 size-4" />
                Dark
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => setTheme("system"))}
                className={cn(
                  "relative flex cursor-default select-none items-center text-sm outline-none",
                  "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  "data-[disabled]:opacity-50 hover:bg-gray-200 transition-colors rounded-md p-2"
                )}
              >
                <LaptopIcon className="mr-2 size-4" />
                System
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </CommandDialog>
    </>
  )
}

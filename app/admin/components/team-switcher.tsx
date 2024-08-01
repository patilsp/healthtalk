"use client"

import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"
import * as React from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const groups = [
  {
    label: "Specialists",
    doctors: [
      {
        label: "Dr. John Doe",
        value: "dr-john-doe",
      },
      {
        label: "Dr. Jane Smith",
        value: "dr-jane-smith",
      },
    ],
  },
  {
    label: "General Practitioners",
    doctors: [
      {
        label: "Dr. Alan Brown",
        value: "dr-alan-brown",
      },
      {
        label: "Dr. Emily White",
        value: "dr-emily-white",
      },
    ],
  },
]

type Doctor = (typeof groups)[number]["doctors"][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface DoctorSwitcherProps extends PopoverTriggerProps {}

export default function DoctorSwitcher({ className }: DoctorSwitcherProps) {
  const [open, setOpen] = React.useState(false)
  const [showNewDoctorDialog, setShowNewDoctorDialog] = React.useState(false)
  const [selectedDoctor, setSelectedDoctor] = React.useState<Doctor>(
    groups[0].doctors[0]
  )

  return (
    <Dialog open={showNewDoctorDialog} onOpenChange={setShowNewDoctorDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a doctor"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 size-5">
              <AvatarImage
                src={`https://avatars.dicebear.com/api/initials/${selectedDoctor.value}.svg`}
                alt={selectedDoctor.label}
              />
              <AvatarFallback>DC</AvatarFallback>
            </Avatar>
            {selectedDoctor.label}
            <CaretSortIcon className="ml-auto size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search doctor..." />
              <CommandEmpty>No doctor found.</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.doctors.map((doctor) => (
                    <CommandItem
                      key={doctor.value}
                      onSelect={() => {
                        setSelectedDoctor(doctor)
                        setOpen(false)
                      }}
                      className="text-sm"
                    >
                      <Avatar className="mr-2 size-5">
                        <AvatarImage
                          src={`https://avatars.dicebear.com/api/initials/${doctor.value}.svg`}
                          alt={doctor.label}
                          className="grayscale"
                        />
                        <AvatarFallback>DC</AvatarFallback>
                      </Avatar>
                      {doctor.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedDoctor.value === doctor.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewDoctorDialog(true)
                    }}
                  >
                    <PlusCircledIcon className="mr-2 size-5" />
                    Add Doctor
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Doctor</DialogTitle>
          <DialogDescription>
            Add a new doctor to manage your team.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Doctor name</Label>
              <Input id="name" placeholder="Dr. New Doctor" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">
                    <span className="font-medium">General Medicine</span>
                  </SelectItem>
                  <SelectItem value="pediatric">
                    <span className="font-medium">Pediatrics</span>
                  </SelectItem>
                  <SelectItem value="cardiology">
                    <span className="font-medium">Cardiology</span>
                  </SelectItem>
                  <SelectItem value="orthopedic">
                    <span className="font-medium">Orthopedics</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewDoctorDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Add Doctor</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

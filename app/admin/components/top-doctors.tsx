import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/registry/new-york/ui/avatar";
  
  export function TopDoctors() {
    return (
      <div className="space-y-8">
        <div className="flex items-center">
          <Avatar className="size-9">
            <AvatarImage src="/avatars/doctor1.png" alt="Dr. Smith Avatar" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Dr. John Smith</p>
            <p className="text-sm text-muted-foreground">Cardiologist</p>
          </div>
          <div className="ml-auto font-medium">5.0</div>
        </div>
        <div className="flex items-center">
          <Avatar className="size-9">
            <AvatarImage src="/avatars/doctor2.png" alt="Dr. Kim Avatar" />
            <AvatarFallback>DK</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Dr. Sarah Kim</p>
            <p className="text-sm text-muted-foreground">Neurologist</p>
          </div>
          <div className="ml-auto font-medium">4.8</div>
        </div>
        <div className="flex items-center">
          <Avatar className="size-9">
            <AvatarImage src="/avatars/doctor3.png" alt="Dr. Lee Avatar" />
            <AvatarFallback>DL</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Dr. Michael Lee</p>
            <p className="text-sm text-muted-foreground">Dermatologist</p>
          </div>
          <div className="ml-auto font-medium">4.7</div>
        </div>
        <div className="flex items-center">
          <Avatar className="size-9">
            <AvatarImage src="/avatars/doctor4.png" alt="Dr. Nguyen Avatar" />
            <AvatarFallback>DN</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Dr. Emma Nguyen</p>
            <p className="text-sm text-muted-foreground">Pediatrician</p>
          </div>
          <div className="ml-auto font-medium">4.9</div>
        </div>
        <div className="flex items-center">
          <Avatar className="size-9">
            <AvatarImage src="/avatars/doctor5.png" alt="Dr. Patel Avatar" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">Dr. Rahul Patel</p>
            <p className="text-sm text-muted-foreground">Orthopedist</p>
          </div>
          <div className="ml-auto font-medium">4.6</div>
        </div>
      </div>
    );
  }
  
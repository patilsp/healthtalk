import Image from "next/image";

import { CalendarDateRangePicker } from "@/app/admin/components/date-range-picker";
import { Overview } from "@/app/admin/components/overview";
import { Search } from "@/app/admin/components/search";
import TeamSwitcher from "@/app/admin/components/team-switcher";
import { TopDoctors } from "@/app/admin/components/top-doctors";
import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { Button } from "@/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();
  return (
    <div className="border p-4">
      <div className="flex flex-col md:flex-row">
       
        <div className="flex-1 space-y-4 pt-6">
        <div className="mb-2 border-b">
          <div className="flex h-16 items-center px-2 gap-2">
            <TeamSwitcher />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
            </div>
          </div>
        </div>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Home</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <section className="admin-stat">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <StatCard
                    type="appointments"
                    count={appointments.scheduledCount}
                    label="Scheduled appointments"
                    icon={"/assets/icons/appointments.svg"}
                    className="card"
                  />
                  <StatCard
                    type="pending"
                    count={appointments.pendingCount}
                    label="Pending appointments"
                    icon={"/assets/icons/pending.svg"}
                    className="card"
                  />
                  <StatCard
                    type="cancelled"
                    count={appointments.cancelledCount}
                    label="Cancelled appointments"
                    icon={"/assets/icons/cancelled.svg"}
                    className="card"
                  />
                  <StatCard
                    type="total"
                    count={appointments.totalCount}
                    label="Total appointments"
                    icon={"/assets/icons/appointments.svg"}
                    className="card"
                  />
                </div>
              </section>

              <div className="mx-auto flex flex-col space-y-14">
                <main className="admin-main">
                  <DataTable columns={columns} data={appointments.documents} />
                </main>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-1 lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-1 lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Top Doctors</CardTitle>
                    <CardDescription>Choose your best doctor</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TopDoctors />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reports">
              <section className="grid items-center gap-4">
                <div className="mb-2 flex justify-center">
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight dark:text-white">
                    Coming Soon!
                  </h1>
                </div>
                <div className="flex justify-center">
                  <p className="mx-auto max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
                    Exciting Changes Ahead! Our website is currently under construction, and we are working hard to bring you a brand new experience. Stay tuned for our upcoming launch and get ready for something amazing!
                  </p>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/assets/images/website-maintenance.svg"
                    width={500}
                    height={560}
                    alt="Website Maintenance"
                    className="object-contain"
                  />
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

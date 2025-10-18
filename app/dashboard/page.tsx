import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";

// Фиктивные данные для быстрого старта
const totalPaidInvoices = 12345;
const totalPendingInvoices = 6789;
const numberOfInvoices = 42;
const numberOfCustomers = 10;
const revenue = [1000, 2000, 1500, 2500];
const latestInvoices = [
  { id: 1, customer: "Alice", amount: 666 },
  { id: 2, customer: "Bob", amount: 123 },
];

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>

      
    </main>
  );
}

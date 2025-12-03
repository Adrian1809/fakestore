import Dashboard from "@/components/Dashboard";

export default async function Home() {
  return (
    <div className="w-full h-full bg-slate-50">
      <Dashboard data={null} />
    </div>
  );
}

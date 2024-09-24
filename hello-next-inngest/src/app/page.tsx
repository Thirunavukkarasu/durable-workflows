'use client';
type Tenant = {
  name: string;
  id: string;
};
const tenants: Tenant[] = [
  {
    name: "John",
    id: "john",
  },
  {
    name: "Will",
    id: "will",
  },
  {
    name: "Dan",
    id: "dan",
  },
];
export default function Home() {
  const addOneMessage = async (tenant:Tenant) => {
    await addMessage(tenant, 1);
  };

  const addFiveMessage = async (tenant:Tenant) => {
    await addMessage(tenant, 5);
  };

  const addMessage = async (tenant:Tenant, count:number) => {
    await fetch("/api/queues/add-messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tenantId: tenant.id, count }),
    });
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl my-8">
          Multi Tenant Aware Queues with Inngest
        </h1>
        <hr />
        <h3 className="text-xl my-3 font-bold">Jobs</h3>
        <div className="space-y-3 mt-6">
          {tenants.map((tenant) => (
            <div key={tenant.id} className="flex items-center space-x-2">
              <button
                className="rounded-full border p-2"
                onClick={() => addOneMessage(tenant)}
              >
                +1
              </button>
              <button
                className="rounded-full border p-2"
                onClick={() => addFiveMessage(tenant)}
              >
                +5
              </button>
              <h2>{tenant.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

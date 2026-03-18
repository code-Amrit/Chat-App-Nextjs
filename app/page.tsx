import { getUser } from "@/core/clients/GetUserService";

export default async function Home() {
  const response = await getUser.getUser();
  const users = response.All_Users;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <ul className="space-y-3">
        {users.map((user, index) => (
          <li
            key={ index}
            className="bg-zinc-900 text-white px-4 py-2 rounded-lg border border-zinc-800"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

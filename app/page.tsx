import { getUser } from "@/core/clients/GetUserService";

export default async function Home() {
  const response = await getUser.getUser();
  const users = response.All_Users;
  console.log(users);
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       {users.map((user, index) => (
          <h1 className="text-primary-50" key={index}>{user.name}</h1>
        ))}
    </div>
  );
}

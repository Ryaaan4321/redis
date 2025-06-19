import { getuser } from "./actions/useraction";

interface Props {
  searchParams: { user?: string };
}

export default async function Home({ searchParams }: Props) {
  const userId = "3";
  console.log("user id = ", userId);

  const user = await getuser(userId);
  console.log("user = ", user);
  console.log("user profession  = ",user.profession)
  if (!user) return <div>No user found</div>;
  return (
    <div className="p-4">
      <pre className="bg-gray-100  text-black p-2 rounded text-sm">
        {JSON.stringify(user, null, 2)}
      </pre>

      <h1 className="text-2xl font-bold mt-4">Hi, {user.name}</h1>
      <p>Profession: {user.profession}</p>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
    </div>
  );
}

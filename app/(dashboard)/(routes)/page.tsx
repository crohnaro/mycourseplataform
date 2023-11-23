import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      <p>Hello</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
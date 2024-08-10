"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const navigate =(name)=>{
    router.push(name);
  }
  return (
    <main>
       <Link href="/homepage">Go to Home Page</Link><br/><br/>
      <Link href="/about">Go to About Page</Link><br/><br/>
      <button onClick={()=>navigate("/about")}>About</button><br/><br/>
      <button onClick={()=>navigate("/homepage")}>Homepage</button>

    </main>
     
     
  );
}

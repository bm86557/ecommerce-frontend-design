import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h2>Assignment Task - E-commerce Website</h2><br />
      <p><Link href={'/web-main'}>Main Page</Link></p>
    </div>
  );
}

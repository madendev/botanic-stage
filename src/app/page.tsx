import { StageNav, MainStage, WhatsAppButton } from "@/components";

/* {Home page} */
export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <StageNav />
      <MainStage />
      <WhatsAppButton />
    </main>
  );
}

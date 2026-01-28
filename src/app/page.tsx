import WhatsAppButton from "@/components/actions/WhatsAppButton";
import MainStage from "@/components/MainStage";
import StageNav from "@/components/navigation/StageNav";

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

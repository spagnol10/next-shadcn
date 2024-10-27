import { CardWithForm } from "@/components/app-card-with-form";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <ModeToggle />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <CardWithForm />
      </div>
    </div>
  );
}

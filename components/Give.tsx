import { Button } from "./ui/button";
import { Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import givingImage from "figma:asset/fe08d91885a1fe5c0ed1e55b6da3f9c11c8c02b7.png";

export function Give() {
  const navigate = useNavigate();

  return (
    <section id="give" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content can be added here in the future */}
      </div>
    </section>
  );
}
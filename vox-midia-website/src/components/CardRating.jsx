import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// TODO -> Corrigir estrelas sumidas

import { Star } from "lucide-react";

export default function RatingCard ({img, name, enterprise, phrase, description}) {
    return (
            <Card className="w-full h-full bg-linear-[119deg,#2B2B2B_9.14%,#0E0E0E_100%] rounded-[5px] p-6 border-[.5px] border-vox-6 max-w-[452px] justify-between">
                <div className="flex justify-start gap-4">
                    <img className="aspect-square w-16 bg-vox-2 rounded-[5px] border-[.5px] border-vox-7" src={img} alt="" />
                    <div className="h-full flex justify-between flex-col"> 
                        <h3 className="text-league-spartan text-[#D2D2D2]!">{name}</h3> 
                        <p className="text-league-spartan text-[#D2D2D2]!">{enterprise}</p>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-[14px] text-[#D2D2D2]!"><strong>"{phrase}"</strong></p>
                    <p className="text-[14px] text-[#D2D2D2]!"> 
                        {description}
                    </p>
                </div>
                <div className="flex align-self-end gap-">
                    {/* Aqui vai entrar as estrelas */}
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                </div>
            </Card>
    );
}
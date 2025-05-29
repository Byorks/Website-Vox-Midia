import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Star } from "lucide-react";

export default function RatingCard () {
    return (
        <>
            <Card className="aspect-3/2 bg-linear-[119deg,#2B2B2B_9.14%,#0E0E0E_100%] rounded-[5px] p-6 border-[.5px] border-vox-6 max-w-[352px]">
                <div className="flex justify-start gap-4">
                    <img className="aspect-square w-16 bg-vox-2 rounded-[5px] border-[.5px] border-vox-7" src="" alt="" />
                    <div> 
                        <h3 className="text-league-spartan text-[#D2D2D2]!">Nome Pessoa</h3> 
                        <p className="text-league-spartan text-[#D2D2D2]!">Empresa</p>
                    </div>
                </div>
                <div>
                    <p className="text-[14px] text-[#D2D2D2]!"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper non augue in lobortis..
                    </p>
                </div>
                <div className="flex gap-2">
                    {/* Aqui vai entrar as estrelas */}
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                    <Star size={20} fill="#D9D9D9" color="#7F7F80"></Star>
                </div>
            </Card>
        </>
    );
}
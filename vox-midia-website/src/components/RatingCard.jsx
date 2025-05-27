import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function RatingCard () {
    return (
        <>
            <Card className="bg-linear-[119deg,--color-vox-3_9.14,--color-vox-2_100%]">
                <div>
                    
                    <img className="aspect-square bg-amber-200" src="" alt="" />
                    <div> <h3></h3> <p></p></div>
                </div>
                <div>
                    <p className="text-[14px] text-vox-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos veritatis omnis mollitia, maiores laboriosam officia ad, doloribus obcaecati nihil optio minus odit consequuntur illo ratione, in cupiditate ab non assumenda.
                    </p>
                </div>
                <div>
                    {/* Aqui vai entrar as estrelas */}
                </div>
            </Card>
        </>
    );
}
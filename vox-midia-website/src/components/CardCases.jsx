import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CaseCard() {
  return (
    <Card className="w-full h-full aspect-3/2 max-w-[408px] max-h-[286px] rounded-none border-[#3A3A3A] border-1 bg-vox-2">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

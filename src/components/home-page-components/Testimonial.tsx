import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialType } from "@/types";
import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { testimonials } from "@/constants/testimonial_data";

const TestimonialCard = ({ name, content }: TestimonialType) => {
  return (
    <CarouselItem className="pl-2 basis-full md:basis-1/2 lg:basis-1/3 md:pl-4">
      <Card className="w-full max-w-md mx-auto overflow-hidden transition-all">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <Quote className="w-10 h-10 mb-4 text-primary opacity-50" />
            <blockquote className="mb-4 text-lg ">{content}</blockquote>
            <Avatar className="w-20 h-20 border-4  shadow-lg">
              <AvatarImage
                src="/placeholder.png?height=200&width=200"
                alt={name}
              />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <h3 className="text-xl font-semibold ">{name}</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

const Testimonial = () => {
  return (
    <div
      id="Testimonial"
      className="lg:container mx-auto  px-4 sm:px-6 lg:px-8 md:py-24 md:lg:py-24 lg:max-w-[1440px]"
    >
      <div className="flex justify-center my-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#834EF0] to-[#4d279a] dark:to-[#ECE3FE]  text-transparent bg-clip-text">
          Testimonial
        </h2>
      </div>

      <Carousel opts={{ loop: true }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </CarouselContent>
        <div className="relative top-8 md:static">
          <CarouselPrevious className="right-24 left-auto md:right-auto md:-left-12" />
          <CarouselNext className="right-10 md:-right-12" />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;

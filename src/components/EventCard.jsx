import { Camera } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";

export default function EventCard({ event }) {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <Card className="event-card">
      <div className="event-card-photo h-[250px]">
        {event.image ? (
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full flex items-center"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-full -ml-0">
              {event.image.map((img, index) => (
                <CarouselItem key={index} className="h-full pl-0">
                  <Card className="h-[240px] rounded-none border-0">
                    <CardContent className="relative flex h-full w-full items-center justify-center p-0 bg-black">
                      <img
                        src={img}
                        alt={event.title}
                        className="h-full w-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <div className="event-card-placeholder">
            <Camera size={20} />
            <span>No photo</span>
          </div>
        )}
      </div>

      <CardHeader>
        <span className="event-card-date">{event.date}</span>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="event-card-text">{event.description}</p>
      </CardContent>
    </Card>
  )
}
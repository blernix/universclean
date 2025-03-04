'use client';

import { services } from "@/data/Services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-12 px-6 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Tarifs</h2>

        <div className="flex flex-wrap gap-6 justify-center items-start">
                    {services.map((service, index) => (
            <TarifCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TarifCard({ service }) {
  return (
    <Card className="relative bg-gray-800 text-white shadow-lg hover:shadow-2xl transition-shadow w-full md:w-[48%] overflow-hidden rounded-lg">
      {/* Image bannière */}
      <CardHeader className="p-0">
        <Image 
          src={service.image} 
          alt={service.title} 
          width={500} 
          height={200} 
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </CardHeader>

      {/* Contenu Glassmorphism */}
      <div className="p-6 bg-gray-900/40 backdrop-blur-md rounded-b-lg">
        <CardTitle className="text-xl mb-4 text-white/90">{service.title}</CardTitle>

        <Accordion type="single" collapsible>
          {service.options.map((option, i) => (
            <AccordionItem key={i} value={`option-${i}`}>
              <AccordionTrigger>
                <span className="text-lg font-semibold text-white/80">
                  {option.name} <span className="text-blue-400 font-bold">{option.price}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="text-gray-300 mt-2 space-y-1">
                  {option.details.map((detail, j) => (
                    <li key={j} className="flex items-center">
                      ✅ <span className="ml-2">{detail}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Card>
  );
}

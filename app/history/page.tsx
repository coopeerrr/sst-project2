"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Flag, Crown, Users, Scale } from "lucide-react"
import Image from "next/image"

const timelineEvents = [
  { year: "1652", event: "Dutch East India Company establishes a settlement at the Cape", icon: Flag },
  { year: "1795", event: "British occupation of the Cape", icon: Crown },
  { year: "1834", event: "Abolition of slavery in the Cape Colony", icon: Users },
  { year: "1912", event: "African National Congress (ANC) founded", icon: Users },
  { year: "1948", event: "National Party wins election, implements apartheid", icon: Scale },
  { year: "1960", event: "Sharpeville Massacre", icon: Users },
  { year: "1961", event: "South Africa becomes a republic and leaves the Commonwealth", icon: Flag },
  { year: "1964", event: "Nelson Mandela sentenced to life imprisonment", icon: Scale },
  { year: "1976", event: "Soweto Uprising", icon: Users },
  { year: "1990", event: "Nelson Mandela released from prison", icon: Users },
  { year: "1994", event: "First democratic elections, Nelson Mandela becomes president", icon: Flag },
  { year: "1996", event: "New Constitution adopted", icon: Scale },
  { year: "1997", event: "New Constitution implemented", icon: Scale },
  { year: "1999", event: "Thabo Mbeki becomes president", icon: Users },
  { year: "2009", event: "Jacob Zuma becomes president", icon: Users },
  { year: "2018", event: "Cyril Ramaphosa becomes president", icon: Users },
]

const TimelineEvent = ({ year, event, icon: Icon }) => (
  <div className="flex items-center mb-8">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">
      <Icon className="w-6 h-6 text-gray-900" />
    </div>
    <div className="ml-4 flex-grow">
      <h3 className="text-lg font-semibold text-yellow-500">{year}</h3>
      <p className="text-gray-300">{event}</p>
    </div>
  </div>
)

const HistoricalFigure = ({ name, role, description, imageSrc }) => (
  <Card className="bg-yellow-800 bg-opacity-50 overflow-hidden">
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <Image
          className="h-48 w-full object-cover md:w-48"
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={192}
          height={192}
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">{role}</div>
        <h3 className="mt-1 text-lg leading-tight font-medium text-white">{name}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  </Card>
)

export default function History() {
  const [selectedEra, setSelectedEra] = useState("pre-apartheid")

  return (
    <div className="container mx-auto px-6 py-16 rounded-lg">
      <h1 className="text-5xl font-bold mb-8 text-center text-yellow-500">History of South Africa</h1>

      <Card className="bg-yellow-900 bg-opacity-50 shadow-lg mb-12">
        <CardHeader>
          <CardTitle className="text-2xl text-yellow-500">A Journey Through Time</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-200">
            South Africa's history is a tapestry of diverse cultures, colonial influences, struggle, and transformation.
            From ancient indigenous civilizations to the end of apartheid and the birth of a democratic nation, South
            Africa's past has shaped its unique identity and continues to influence its present and future.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-yellow-800">
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="eras">Historical Eras</TabsTrigger>
              <TabsTrigger value="figures">Key Figures</TabsTrigger>
            </TabsList>
            <TabsContent value="timeline" className="bg-yellow-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
                {timelineEvents.map((event, index) => (
                  <TimelineEvent key={index} {...event} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="eras" className="bg-yellow-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  className="bg-yellow-800 bg-opacity-50 cursor-pointer hover:bg-opacity-70 transition-all"
                  onClick={() => setSelectedEra("pre-apartheid")}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-500">Pre-Apartheid Era</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      From early civilizations to the implementation of apartheid in 1948.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card
                  className="bg-yellow-800 bg-opacity-50 cursor-pointer hover:bg-opacity-70 transition-all"
                  onClick={() => setSelectedEra("apartheid")}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-500">Apartheid Era</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      The period of institutionalized racial segregation from 1948 to 1994.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card
                  className="bg-yellow-800 bg-opacity-50 cursor-pointer hover:bg-opacity-70 transition-all"
                  onClick={() => setSelectedEra("transition")}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-500">Transition to Democracy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      The negotiation period and the first democratic elections in 1994.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card
                  className="bg-yellow-800 bg-opacity-50 cursor-pointer hover:bg-opacity-70 transition-all"
                  onClick={() => setSelectedEra("post-apartheid")}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-yellow-500">Post-Apartheid Era</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-200">
                      From 1994 to the present day, focusing on reconciliation and nation-building.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="figures" className="bg-yellow-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="space-y-6">
                <HistoricalFigure
                  name="Nelson Mandela"
                  role="Anti-Apartheid Revolutionary & President"
                  description="Led the struggle against apartheid and became South Africa's first democratically elected president."
                  imageSrc="https://hips.hearstapps.com/hmg-prod/images/_photo-by-per-anders-petterssongetty-images.jpg"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <Card className="bg-yellow-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-500">The Struggle Against Apartheid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 mb-4">
                For nearly 75 years, South Africa endured a system of racial segregation known as apartheid. The
                struggle against this unjust system began with demonstrations and strikes by African groups, supported
                by some whites. By the mid-20th century, these protests had escalated into large-scale resistance
                movements.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="anc">
                  <AccordionTrigger className="text-yellow-500">African National Congress (ANC)</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Founded in 1912 as a Black organization to fight for the rights of black people. The ANC played a
                    crucial role in the anti-apartheid movement, led by figures such as Nelson Mandela, Oliver Tambo,
                    and Walter Sisulu.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="international-pressure">
                  <AccordionTrigger className="text-yellow-500">International Pressure</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Many developed countries denounced the practice of apartheid, and the United Nations intervened.
                    This international pressure forced the local white government to accept change.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card className="bg-yellow-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-500">Transition to Democracy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 mb-4">
                On April 26, 1994, South Africa was declared the Republic of South Africa, a democratic country. It
                adopted a new flag, and apartheid rules were dismantled.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="interim-constitution">
                  <AccordionTrigger className="text-yellow-500">Interim Constitution</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    The constitution brought into effect in 1994 was an Interim Constitution. The Constitutional
                    Assembly conducted massive public participation programmes to get views and suggestions from the
                    public.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="new-constitution">
                  <AccordionTrigger className="text-yellow-500">New Constitution</AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    In 1996, a new text was adopted with the support of 86% of the assembly members and was implemented
                    on February 4, 1997, by a Presidential proclamation. Some financial provisions were implemented
                    until January 1, 1998.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <Card className="bg-yellow-900 bg-opacity-50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-500">Words of Reconciliation</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="italic text-gray-200 mb-4">
              "We, the people of South Africa, recognise the injustices of our past; honour those who suffered for
              justice and freedom in our land; respect those who have worked to build and develop our country; and
              believe that South Africa belongs to all who live in it, united in our diversity."
            </blockquote>
            <p className="text-sm text-gray-300 mb-6">- From the Preamble to the Constitution of South Africa</p>
            <blockquote className="italic text-gray-200 mb-4">
              "Historical enemies succeeded in negotiating a peaceful transition from apartheid to democracy exactly
              because we were prepared to accept the inherent capacity for goodness in the other. My wish is that South
              Africans never give up on the belief in goodness, that they cherish that faith in human beings as a
              cornerstone of our democracy."
            </blockquote>
            <p className="text-sm text-gray-300">- Former President Nelson Mandela</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


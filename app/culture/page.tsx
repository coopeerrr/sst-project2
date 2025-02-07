import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Culture() {
  return (
    <div className="container mx-auto px-6 py-16 rounded-lg">
      <h1 className="text-5xl font-bold mb-8 text-center text-purple-400">South African Culture</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Card className="bg-purple-900 bg-opacity-50 shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">The Rainbow Nation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                South Africa is famously referred to as the rainbow nation due to its diverse mix of cultures,
                religions, and ethnicities. With a population of about 60 million as of 2022, the country boasts a rich
                tapestry of Zulu, Xhosa, Pedi, Tswana, Ndebele, Khoisan, Hindu, Muslim, and Afrikaner people, among
                others.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="demographics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-purple-800">
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="customs">Customs</TabsTrigger>
            </TabsList>
            <TabsContent value="demographics" className="bg-purple-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Population (2022): Approximately 60 million</li>
                <li>Largest ethnic group: Zulu</li>
                <li>Dominant religion: Christianity</li>
                <li>Diverse mix of cultures and religions</li>
              </ul>
            </TabsContent>
            <TabsContent value="languages" className="bg-purple-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>11 officially recognized languages</li>
                <li>Zulu: Spoken by about 22% of the population</li>
                <li>English: Widely spoken throughout the country</li>
                <li>Other languages include Xhosa, Afrikaans, and more</li>
              </ul>
            </TabsContent>
            <TabsContent value="customs" className="bg-purple-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Influenced by European colonization</li>
                <li>Traditional customs mainly practiced in rural areas</li>
                <li>Urban areas adopting more Western lifestyles</li>
                <li>Drums essential in Zulu celebrations</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <Image
            src="https://miro.medium.com/v2/resize:fit:1016/1*Feuz9nulutfkDtkdvGbuQw.jpeg"
            alt="South African Cultural Diversity"
            width={500}
            height={300}
            className="rounded-lg shadow-2xl border-4 border-purple-500"
          />
          <Card className="bg-purple-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">Music and Dance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 mb-4">
                South African music and dance forms are vibrant, joyous, and powerful. They play a significant role in
                celebrations and cultural expressions.
              </p>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Zulu celebrations feature drums, dancing, and chanting</li>
                <li>Gumboot dance (Isicathulo): Performed wearing wellington boots</li>
                <li>Diverse musical traditions reflecting the country's multicultural heritage</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-purple-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">Cultural Spotlight: Ubuntu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                Ubuntu is a Nguni Bantu term meaning "humanity." It is often translated as "I am because we are," or
                "humanity towards others," emphasizing the interconnectedness of all people. This philosophy is central
                to South African culture and has played a significant role in the country's journey towards
                reconciliation and nation-building.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


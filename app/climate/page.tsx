import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, CloudRain, Leaf, TreesIcon as Tree } from "lucide-react"

export default function Climate() {
  const climateFeatures = [
    {
      name: "Subtropical",
      icon: Sun,
      description: "Located in the Southern Hemisphere, south of the Tropic of Capricorn",
    },
    {
      name: "Dry Climate",
      icon: Sun,
      description: "Despite oceans on three sides, South Africa has a generally dry climate",
    },
    {
      name: "Seasonal Variation",
      icon: CloudRain,
      description: "Mild winters (May-September) and mild summers (November-March)",
    },
    {
      name: "Summer Rainfall",
      icon: CloudRain,
      description: "Rain mostly occurs in summer as high-energy thunderstorms",
    },
  ]

  const floraFauna = [
    { name: "High Veld", description: "Open woodland savannah with tall perennial grasses and flowering herbs" },
    { name: "Low Veld", description: "Supports a park-like plant cover" },
    { name: "Characteristic Trees", description: "Acacia and marula trees in higher areas" },
    { name: "Ground Cover", description: "Open ground dominated by red grass" },
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center text-green-400">Climate of South Africa</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Card className="bg-green-900 bg-opacity-50 shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-green-400">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                South Africa's climate is characterized by its subtropical location, dry conditions despite coastal
                proximity, and seasonal variations. The climate remains warm and humid for most part of the year, with
                cooler temperatures in higher regions.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="climate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-green-800">
              <TabsTrigger value="climate">Climate Features</TabsTrigger>
              <TabsTrigger value="flora">Flora & Fauna</TabsTrigger>
            </TabsList>
            <TabsContent value="climate" className="bg-green-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {climateFeatures.map((feature, index) => (
                  <Card key={index} className="bg-green-800 bg-opacity-50">
                    <CardHeader className="flex flex-row items-center space-x-2">
                      <feature.icon className="h-6 w-6 text-green-400" />
                      <CardTitle className="text-lg text-green-400">{feature.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-200">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="flora" className="bg-green-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {floraFauna.map((item, index) => (
                  <Card key={index} className="bg-green-800 bg-opacity-50">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-400">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-200">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-2xl border-4 border-green-500">
            <Image
              src="https://live.staticflickr.com/8347/29229557175_ffb82b469e_b.jpg"
              alt="South African Landscape"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <Card className="bg-green-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-green-400">Seasonal Climate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Winter (May-September)</h3>
                  <ul className="list-disc list-inside text-gray-200">
                    <li>Mild temperatures</li>
                    <li>Dry conditions</li>
                    <li>Abundant sunshine</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Summer (November-March)</h3>
                  <ul className="list-disc list-inside text-gray-200">
                    <li>Mild temperatures</li>
                    <li>Rainy season</li>
                    <li>High-energy thunderstorms</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-green-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-green-400">Unique Flora</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <Tree className="mr-2 h-4 w-4 text-green-400" />
                  Acacia trees in higher areas
                </li>
                <li className="flex items-center">
                  <Tree className="mr-2 h-4 w-4 text-green-400" />
                  Marula trees bearing intoxicating plum-like fruit
                </li>
                <li className="flex items-center">
                  <Leaf className="mr-2 h-4 w-4 text-green-400" />
                  Tall perennial grasses in high veld areas
                </li>
                <li className="flex items-center">
                  <Leaf className="mr-2 h-4 w-4 text-green-400" />
                  Red grass dominating open ground
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


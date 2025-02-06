import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Waves, TreePine, Sun, CloudRain } from "lucide-react"

export default function Geography() {
  const geographicalFeatures = [
    { name: "Great Escarpment", icon: Mountain, description: "Forms a cliff-like boundary with the interior plateau" },
    { name: "Coastline", icon: Waves, description: "2,798 km along the South Atlantic and Indian Oceans" },
    { name: "Velds", icon: TreePine, description: "Vast grasslands covering the central plateau" },
    { name: "Kalahari Desert", icon: Sun, description: "Spanning the northern Cape" },
    { name: "Drakensberg Mountains", icon: Mountain, description: "Bounding the velds in the east and south" },
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-center text-emerald-400">Geography of South Africa</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Card className="bg-emerald-900 bg-opacity-50 shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-400">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                South Africa, located at the southernmost tip of the African continent, lies between longitudes 17°E and
                33°E and latitudes 22°S and 35°S. It shares borders with Namibia, Botswana, Zimbabwe, Mozambique, and
                Eswatini, with the landlocked Kingdom of Lesotho in the southeast.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-emerald-800">
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="regions">Regions</TabsTrigger>
              <TabsTrigger value="climate">Climate</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="bg-emerald-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {geographicalFeatures.map((feature, index) => (
                  <Card key={index} className="bg-emerald-800 bg-opacity-50">
                    <CardHeader className="flex flex-row items-center space-x-2">
                      <feature.icon className="h-6 w-6 text-emerald-400" />
                      <CardTitle className="text-lg text-emerald-400">{feature.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-200">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="regions" className="bg-emerald-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    Plateau
                  </Badge>
                  The Interior Plateau: Covers most of the interior
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    Coastal
                  </Badge>
                  The Coastal Belt: A narrow strip between the escarpment and the ocean
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    Mountain
                  </Badge>
                  The Drakensberg Range: Forming the eastern boundary
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="mr-2">
                    Desert
                  </Badge>
                  The Kalahari: Forming the western boundary
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="climate" className="bg-emerald-900 bg-opacity-50 p-6 rounded-lg shadow-lg mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-emerald-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sun className="mr-2 h-4 w-4" /> Mediterranean
                    </CardTitle>
                  </CardHeader>
                  <CardContent>Southwest Cape</CardContent>
                </Card>
                <Card className="bg-emerald-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CloudRain className="mr-2 h-4 w-4" /> Subtropical
                    </CardTitle>
                  </CardHeader>
                  <CardContent>Eastern coast</CardContent>
                </Card>
                <Card className="bg-emerald-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sun className="mr-2 h-4 w-4" /> Semi-arid
                    </CardTitle>
                  </CardHeader>
                  <CardContent>Western interior</CardContent>
                </Card>
                <Card className="bg-emerald-800 bg-opacity-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sun className="mr-2 h-4 w-4" /> Desert
                    </CardTitle>
                  </CardHeader>
                  <CardContent>Northwest</CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl border-4 border-emerald-500">
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/025/337/369/small_2x/illustrated-map-of-south-africa-with-provinces-and-administrative-divisions-and-neighbouring-countries-editable-and-clearly-labeled-layers-vector.jpg"
              alt="Map of South Africa"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <Card className="bg-emerald-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-400">Biodiversity Hotspot</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">
                South Africa is one of only 17 megadiverse countries in the world, home to a wealth of plant and animal
                species. The country's unique geography, from its interior plateau to its coastal areas, contributes
                significantly to its rich biodiversity.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-900 bg-opacity-50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-400">Did You Know?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-200">
                <li>Table Mountain in Cape Town is one of the oldest mountains in the world</li>
                <li>The Blyde River Canyon is the third largest canyon in the world</li>
                <li>
                  South Africa has three capital cities: Pretoria (administrative), Cape Town (legislative), and
                  Bloemfontein (judicial)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


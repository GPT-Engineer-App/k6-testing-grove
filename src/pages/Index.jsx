import { useState } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Paw, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Paw, Brain, Shield } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("special");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <header className="bg-blue-600 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover the World of Dogs
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore the amazing qualities and diverse breeds of man's best friend
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" variant="secondary">Learn More</Button>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="special">What Makes Dogs Special</TabsTrigger>
            <TabsTrigger value="breeds">Popular Dog Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="special">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">What Makes Dogs Special?</CardTitle>
                <CardDescription>Discover the unique qualities of our canine companions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <Heart className="w-8 h-8 text-red-500" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Loyal and Affectionate</h3>
                      <p>Dogs form strong bonds with their humans, offering unconditional love and companionship.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Brain className="w-8 h-8 text-purple-500" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Highly Intelligent</h3>
                      <p>Dogs are capable of learning complex tasks and understanding human emotions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Paw className="w-8 h-8 text-amber-500" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Diverse Breeds</h3>
                      <p>From tiny Chihuahuas to massive Great Danes, dogs come in an incredible variety of shapes and sizes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-green-500" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Emotional Support</h3>
                      <p>Dogs can reduce stress and anxiety, providing comfort and improving mental health.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Popular Dog Breeds</CardTitle>
                <CardDescription>Explore some of the most beloved dog breeds worldwide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-xl mb-4">Large Breeds</h3>
                    <ul className="space-y-2">
                      {["Labrador Retriever", "German Shepherd", "Golden Retriever", "Siberian Husky"].map((breed, index) => (
                        <motion.li 
                          key={breed}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Paw className="w-5 h-5 text-blue-500" />
                          <span>{breed}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-4">Small Breeds</h3>
                    <ul className="space-y-2">
                      {["Chihuahua", "Pug", "French Bulldog", "Beagle"].map((breed, index) => (
                        <motion.li 
                          key={breed}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Paw className="w-5 h-5 text-purple-500" />
                          <span>{breed}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery of Adorable Dogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1517849845537-4d257902454a",
              "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
              "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01"
            ].map((src, index) => (
              <motion.div 
                key={src}
                className="rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img 
                  src={src}
                  alt={`Cute dog ${index + 1}`}
                  className="mx-auto object-cover w-full h-64"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

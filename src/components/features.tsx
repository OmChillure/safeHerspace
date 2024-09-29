import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Shield, Globe, Cpu, Layers } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our advanced AI engine continuously monitors and analyzes data to detect unsafe situations, providing real-time insights for enhanced safety."
  },
  {
    icon: Zap,
    title: "Single Tap Alert",
    description: "A single tap activates an emergency alert, instantly notifying authorities and trusted contacts with your live location, ensuring immediate assistance."
  },
  {
    icon: Shield,
    title: "Virtual Reality Mode",
    description: "Our vision is to empower women by offering an Virtual Reality view of their surroundings, helping them assess the safety of localities and make informed decisions in real time."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Powerful Features for Blockchain Analytics
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover how our AI-enhanced blockchain analytics platform can revolutionize your data insights and decision-making process.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out" />
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 ease-in-out">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 ease-in-out">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
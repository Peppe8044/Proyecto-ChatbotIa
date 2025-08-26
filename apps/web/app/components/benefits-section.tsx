"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Clock, Brain, Target, CreditCard, BarChart3, Shield } from "lucide-react"
import { siteContent } from "@/lib/content"
import { motion } from "framer-motion"

const iconMap = {
  Clock,
  Brain,
  Target,
  CreditCard,
  BarChart3,
  Shield,
}

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4">¿Por qué elegir ChatVentas AI?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automatiza tu atención al cliente y aumenta tus ventas con inteligencia artificial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

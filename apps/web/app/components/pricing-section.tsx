"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Switch } from "./ui/switch"
import { Check } from "lucide-react"
import { siteContent } from "@/lib/content"
import { motion } from "framer-motion"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const formatPrice = (price: number) => {
    const finalPrice = isAnnual ? Math.round(price * 0.85) : price
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(finalPrice)
  }

  return (
    <section id="precios" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4">Planes que se adaptan a tu negocio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Comienza gratis y escala según tus necesidades
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? "font-semibold" : "text-muted-foreground"}`}>Mensual</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm ${isAnnual ? "font-semibold" : "text-muted-foreground"}`}>Anual</span>
            {isAnnual && (
              <Badge variant="secondary" className="ml-2">
                -15%
              </Badge>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {siteContent.pricing.plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full relative ${plan.popular ? "border-accent shadow-lg scale-105" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Más Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{formatPrice(plan.price)}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">{siteContent.pricing.variableCosts}</p>
        </motion.div>
      </div>
    </section>
  )
}

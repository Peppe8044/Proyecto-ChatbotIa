"use client"

import { Card, CardContent } from "./ui/card"
import { siteContent } from "@/lib/content"
import { motion } from "framer-motion"

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4">¿Cómo funciona?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En solo 5 pasos tendrás tu asistente de ventas funcionando 24/7
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {siteContent.howItWorks.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full text-center">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < siteContent.howItWorks.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-accent"></div>
                  <div className="w-0 h-0 border-l-4 border-l-accent border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

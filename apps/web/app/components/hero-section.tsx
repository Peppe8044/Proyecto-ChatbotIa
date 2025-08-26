"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FunnelChart } from "@/components/funnel-chart"
import { CheckCircle, TrendingUp, CreditCard, Zap } from "lucide-react"
import { siteContent } from "@/lib/content"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Badge variant="secondary" className="w-fit">
              {siteContent.hero.badge}
            </Badge>

            <div className="space-y-4">
              <h1 className="font-montserrat font-black text-4xl lg:text-6xl leading-tight">
                {siteContent.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{siteContent.hero.subtitle}</p>
            </div>

            <div className="space-y-3">
              {siteContent.hero.bullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{bullet}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                {siteContent.hero.cta.primary}
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                {siteContent.hero.cta.secondary}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">{siteContent.hero.legalNote}</p>
          </motion.div>

          {/* Right Column - Dashboard Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Dashboard de Ventas</span>
                  <Badge variant="outline" className="text-green-600">
                    En vivo
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Funnel Chart */}
                <div>
                  <h4 className="font-semibold mb-3">Embudo de Conversión</h4>
                  <FunnelChart />
                </div>

                {/* Live Activity Cards */}
                <div className="space-y-3">
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800"
                  >
                    <div className="flex items-center space-x-3">
                      <Zap className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-medium">Lead Hot+ listo para cerrar</span>
                    </div>
                    <Badge variant="destructive">HOT+</Badge>
                  </motion.div>

                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Pago aprobado Webpay</span>
                    </div>
                    <span className="text-sm font-semibold text-green-600">$89.990</span>
                  </motion.div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Conversión hoy</span>
                    </div>
                    <span className="text-sm font-semibold text-blue-600">+23%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

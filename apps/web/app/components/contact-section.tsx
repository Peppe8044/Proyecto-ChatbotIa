"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Calendar, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    industry: "",
    email: "",
    phone: "",
    volume: "",
    consent: false,
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      toast({
        title: "Error",
        description: "Debes aceptar el tratamiento de datos para continuar",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // TODO: Replace with actual webhook URL from environment variables
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_CONTACT || "/api/contact"

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Te contactaremos pronto para agendar una demo personalizada.",
        })
        setFormData({
          name: "",
          company: "",
          industry: "",
          email: "",
          phone: "",
          volume: "",
          consent: false,
        })
      } else {
        throw new Error("Error al enviar")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No pudimos enviar tu mensaje. Inténtalo nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contacto" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl mb-4">¿Listo para empezar?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agenda una demo personalizada y descubre cómo ChatVentas AI puede transformar tu negocio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Solicita tu demo gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Rubro</Label>
                    <Input
                      id="industry"
                      placeholder="Ej: Retail, Restaurante, Servicios..."
                      value={formData.industry}
                      onChange={(e) => handleInputChange("industry", e.target.value)}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+56 9 1234 5678"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volume">Volumen estimado de conversaciones/mes</Label>
                    <Textarea
                      id="volume"
                      placeholder="Ej: Recibimos aproximadamente 500 consultas por WhatsApp al mes..."
                      value={formData.volume}
                      onChange={(e) => handleInputChange("volume", e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                    />
                    <Label htmlFor="consent" className="text-sm">
                      Acepto el tratamiento de datos y{" "}
                      <a href="/legal/terminos" className="text-accent hover:underline">
                        términos de servicio
                      </a>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Solicitar demo gratuita"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-semibold">Agenda directamente</h3>
                    <p className="text-sm text-muted-foreground">Reserva 30 minutos para una demo personalizada</p>
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Abrir calendario →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-semibold">Email directo</h3>
                    <p className="text-sm text-muted-foreground">contacto@chatventas.cl</p>
                    <p className="text-xs text-muted-foreground mt-1">Respuesta en menos de 24 horas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">+56 9 1234 5678</p>
                    <p className="text-xs text-muted-foreground mt-1">Lun-Vie 9:00-18:00 CLT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Onboarding en 48 horas</h3>
              <p className="text-sm text-muted-foreground">
                Te ayudamos a configurar todo: desde la conexión de WhatsApp hasta la importación de tu catálogo. En
                menos de 48 horas estarás vendiendo 24/7.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

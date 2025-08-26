import * as React from "react"
import { Navbar } from "../../components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export const metadata = {
  title: "Términos y Condiciones — ChatVentas AI",
  description: "Términos y condiciones de uso de ChatVentas AI",
}

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("es-CL")

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20">
        <div className="container max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-montserrat font-bold">
                Términos y Condiciones — ChatVentas AI
              </CardTitle>
              <p className="text-muted-foreground">
                <strong>Última actualización:</strong> {currentDate}
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                Bienvenido a ChatVentas AI. Al contratar o utilizar nuestro servicio, usted acepta los siguientes
                términos:
              </p>

              <h2>1. Objeto</h2>
              <p>
                El servicio permite a PYMEs y empresas vender 24/7 mediante chatbots en WhatsApp e Instagram, integrados
                con IA y pagos locales.
              </p>

              <h2>2. Registro y uso</h2>
              <ul>
                <li>
                  Para usar el servicio debe ser mayor de 18 años y representar a una empresa o persona natural con
                  actividad comercial válida en Chile.
                </li>
                <li>El usuario es responsable de la veracidad de la información proporcionada.</li>
              </ul>

              <h2>3. Pagos y precios</h2>
              <ul>
                <li>Los precios de los planes están publicados en nuestra página oficial.</li>
                <li>
                  Los cargos variables (ej. comisiones de WhatsApp, pasarelas de pago) serán asumidos por el cliente.
                </li>
                <li>
                  Los valores se expresan en <strong>pesos chilenos (CLP)</strong>.
                </li>
              </ul>

              <h2>4. Responsabilidades</h2>
              <ul>
                <li>
                  ChatVentas AI provee la plataforma tecnológica, pero no se hace responsable por la veracidad del
                  contenido de los mensajes enviados por los clientes.
                </li>
                <li>
                  El cliente es responsable de contar con permisos legales para contactar a sus usuarios y clientes.
                </li>
              </ul>

              <h2>5. Limitación de responsabilidad</h2>
              <ul>
                <li>
                  No garantizamos disponibilidad ininterrumpida del servicio, aunque nos comprometemos a mantener un SLA
                  del 99% en planes Business.
                </li>
                <li>No nos hacemos responsables de pérdidas indirectas derivadas del uso del servicio.</li>
              </ul>

              <h2>6. Privacidad</h2>
              <p>
                El tratamiento de datos se rige por nuestra{" "}
                <a href="/legal/privacidad" className="text-accent hover:underline">
                  Política de Privacidad
                </a>
                .
              </p>

              <h2>7. Vigencia y terminación</h2>
              <ul>
                <li>El contrato se renueva automáticamente mes a mes salvo cancelación.</li>
                <li>El cliente puede cancelar en cualquier momento sin multa.</li>
                <li>ChatVentas AI puede suspender el servicio en caso de incumplimiento de pagos o uso indebido.</li>
              </ul>

              <h2>8. Legislación aplicable</h2>
              <p>Estos términos se rigen por la legislación de la República de Chile.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Footer } from "../../components/footer"

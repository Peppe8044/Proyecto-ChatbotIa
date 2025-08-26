import * as React from "react";
import { Navbar } from "../../components/navbar"
import { Footer } from "../../components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export const metadata = {
  title: "Política de Privacidad — ChatVentas AI",
  description: "Política de privacidad de ChatVentas AI conforme a la legislación chilena",
}

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString("es-CL")

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20">
        <div className="container max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-montserrat font-bold">
                Política de Privacidad — ChatVentas AI
              </CardTitle>
              <p className="text-muted-foreground">
                <strong>Última actualización:</strong> {currentDate}
              </p>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>En ChatVentas AI respetamos y protegemos los datos personales de nuestros usuarios y clientes.</p>

              <p>
                Esta política explica cómo recolectamos, usamos y protegemos la información en cumplimiento con la{" "}
                <strong>Ley 19.628 sobre Protección de la Vida Privada</strong> y la <strong>Ley 21.719</strong> que
                moderniza la protección de datos en Chile (entrada plena en vigor en diciembre de 2026).
              </p>

              <h2>1. Datos recolectados</h2>
              <ul>
                <li>Datos de contacto (nombre, correo, teléfono, empresa).</li>
                <li>Datos de interacción (mensajes, conversaciones en WhatsApp/Instagram).</li>
                <li>Datos de compra (productos, montos, método de pago).</li>
              </ul>
              <p>
                <strong>Nota:</strong> nunca almacenamos ni procesamos directamente datos de tarjetas de crédito o
                débito; estos son manejados por <strong>Webpay (Transbank)</strong> o <strong>Mercado Pago</strong>.
              </p>

              <h2>2. Uso de los datos</h2>
              <ul>
                <li>Prestar y mejorar el servicio.</li>
                <li>Analizar interacciones para asignar estados (Cold/Warm/Hot/Hot+).</li>
                <li>
                  Enviar notificaciones, promociones y recordatorios{" "}
                  <strong>solo si el cliente ha dado consentimiento</strong>.
                </li>
                <li>Cumplir obligaciones legales y contractuales.</li>
              </ul>

              <h2>3. Derechos de los titulares</h2>
              <p>Usted tiene derecho a:</p>
              <ul>
                <li>Acceder a sus datos personales.</li>
                <li>Rectificar información incorrecta.</li>
                <li>Solicitar la eliminación de sus datos.</li>
                <li>Oponerse a ciertos tratamientos (ej. marketing).</li>
              </ul>
              <p>
                Para ejercer estos derechos, escríbanos a: <strong>privacidad@chatventas.cl</strong>.
              </p>

              <h2>4. Conservación y seguridad</h2>
              <ul>
                <li>Los datos se almacenan en servidores seguros.</li>
                <li>Implementamos medidas técnicas (cifrado, backups) y organizativas (roles, accesos limitados).</li>
                <li>Conservamos la información solo mientras sea necesario para los fines descritos.</li>
              </ul>

              <h2>5. Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política en cualquier momento. Los cambios serán publicados en esta página con
                fecha de actualización.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Link from "next/link"
import { MessageSquare, Linkedin, Youtube } from "lucide-react"
import { siteContent } from "@/lib/content"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-6 w-6 text-accent" />
              <span className="font-montserrat font-bold text-xl">{siteContent.brand.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Vende 24/7 por WhatsApp e Instagram con inteligencia artificial. Hecho especialmente para PYMEs de Chile.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-accent">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#beneficios" className="text-muted-foreground hover:text-foreground">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-muted-foreground hover:text-foreground">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#precios" className="text-muted-foreground hover:text-foreground">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Estado del servicio
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#preguntas" className="text-muted-foreground hover:text-foreground">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacidad" className="text-muted-foreground hover:text-foreground">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/terminos" className="text-muted-foreground hover:text-foreground">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  DPA/Encargado
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteContent.brand.name}. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">Empresa chilena • Santiago, Chile</p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { content } from "@/lib/config/content"

export function Footer() {
  return (
    <footer className="relative border-t bg-muted/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{content.footer.brand.name}</h3>
            <p className="text-muted-foreground">
              {content.footer.brand.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-muted-foreground">
              {content.footer.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{content.footer.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{content.footer.contact.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{content.footer.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}


"use client"

import { useEffect, useState } from "react"
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

const sections = ["Home", "About", "Resume", "Portfolio", "Blogs", "Contact"]

export function ScrollSpySidebar() {
  const [activeSection, setActiveSection] = useState("Home")

  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.getElementById(section.toLowerCase())
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section)
          }
        },
        { threshold: 0.5 }
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <Sidebar className="w-64 border-r">
      <SidebarContent>
        <SidebarMenu>
          {sections.map((section) => (
            <SidebarMenuItem key={section}>
              <SidebarMenuButton
                asChild
                isActive={activeSection === section}
              >
                <a href={`#${section.toLowerCase()}`}>{section}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}


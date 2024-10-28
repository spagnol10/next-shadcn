"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { useState } from "react";

// Definindo tipos para os itens do menu
interface SubItem {
  title: string;
  url: string;
}

interface MenuItem {
  title: string;
  url: string;
  icon: React.ElementType;
  subItems?: SubItem[];
}

// Menu items com sub-itens
const items: MenuItem[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    subItems: [
      { title: "Messages", url: "#messages" },
      { title: "Spam", url: "#spam" },
    ],
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar1() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubItems = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item, index) => (
                  <div key={item.title}>
                    <SidebarMenuItem>
                      <SidebarMenuButton onClick={() => item.subItems ? toggleSubItems(index) : undefined} asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    {/* Renderizar sub-itens se houver */}
                    {item.subItems && openIndex === index && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <SidebarMenuItem key={subItem.title}>
                            <SidebarMenuButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              {/* Footer content */}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}

import { Link } from 'react-router-dom'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../components/ui/SideBar'
import React from 'react'
import { LuCalendar, LuHome, LuInbox, LuSearch, LuSettings } from 'react-icons/lu'

const AppSideBar = () => {

  const items = [
    {
      title: "Home",
      url: "#",
      icon: LuHome,
    },
    {
      title: "Inbox",
      url: "#",
      icon: LuInbox,
    },
    {
      title: "Calendar",
      url: "#",
      icon: LuCalendar,
    },
    {
      title: "Search",
      url: "#",
      icon: LuSearch,
    },
    {
      title: "Settings",
      url: "#",
      icon: LuSettings,
    },
  ]

  return (
    <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                    <item.icon />
                    <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>

  )
}

export default AppSideBar
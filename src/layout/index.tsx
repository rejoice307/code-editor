import React from 'react'
import AppSideBar from './SideBar'
import EditorArea from './EditorArea'
import { SidebarProvider } from '../components/ui/SideBar'
import type { ChildrenType } from '@/types'

const Layout = ({ children }: ChildrenType) => {
  return (
    <>
      <SidebarProvider>
        <AppSideBar />
        <main className=''>
          <EditorArea />
          {children}
        </main>
      </SidebarProvider>
    </>
  )
}

export default Layout
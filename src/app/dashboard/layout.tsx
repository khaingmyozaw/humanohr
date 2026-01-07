"use client";

import { StrictMode } from "react";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import Backdrop from "@/layout/Backdrop";
import AppHeader from "@/layout/AppHeader";
import Footer from "@/components/footer/Footer";
import AppSidebar from "@/layout/Sidebar";

function DashboardContent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    const mainContentMargin = isMobileOpen
        ? "ml-0"
        : isExpanded || isHovered
            ? "lg:ml-[290px]"
            : "lg:ml-[90px]";

    return (
        <div className="min-h-screen xl:flex">
            {/* Sidebar and Backdrop */}
            <AppSidebar />
            <Backdrop />
            {/* Main Content Area */}
            <div
                className={`overflow-hidden flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
            >
                {/* Header */}
                <AppHeader />
                {/* Page Content */}
                <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StrictMode>
            <SidebarProvider>
                <DashboardContent>{children}</DashboardContent>
            </SidebarProvider>
        </StrictMode>
    );
}

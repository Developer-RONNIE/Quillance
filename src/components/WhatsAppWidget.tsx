"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppWidget() {
  const pathname = usePathname();

  useEffect(() => {
    // Intercept CreateWhatsAppButtonAndWidget to force our brand logo
    if (typeof window !== "undefined") {
      let originalFn = (window as any).CreateWhatsAppButtonAndWidget;
      
      if (!(window as any).__aisensy_intercepted) {
        (window as any).__aisensy_intercepted = true;
        
        Object.defineProperty(window, "CreateWhatsAppButtonAndWidget", {
          get() {
            return (options: any) => {
              if (options) {
                options.brandImgUrl = "/Logo/q-logo-night-trans.png";
              }
              if (originalFn) {
                originalFn(options);
              }
            };
          },
          set(newFn) {
            originalFn = newFn;
          },
          configurable: true,
        });
      }
    }
  }, []);

  useEffect(() => {
    const scriptId = "aisensy-wa-widget";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const initializeWidget = () => {
      if (typeof window !== "undefined") {
        // Trigger locationchange to re-render the button on client-side routing
        window.dispatchEvent(new Event("locationchange"));
      }
    };

    const injectScript = () => {
      const alreadyLoaded = document.getElementById(scriptId);
      if (!alreadyLoaded) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "text/javascript";
        script.src = "https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js";
        script.setAttribute("widget-id", "aabfll");
        script.async = true;
        script.onload = () => {
          setTimeout(initializeWidget, 300);
        };
        document.body.appendChild(script);
      } else {
        initializeWidget();
      }
    };

    // Defer the heavy third-party script until the browser is idle, or wait 2 seconds.
    // This dramatically lowers Total Blocking Time (TBT) and optimizes load time.
    let timeoutId: any;
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => {
        timeoutId = setTimeout(injectScript, 2000);
      });
    } else {
      timeoutId = setTimeout(injectScript, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  useEffect(() => {
    // Dynamic observation to see if the button is overlapping the footer
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const container = document.getElementById("df-btn-cont");
        if (!container) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            container.classList.add("df-in-footer");
          } else {
            container.classList.remove("df-in-footer");
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.05, // triggers when 5% of footer is visible
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Re-bind observer if the footer elements change on route transition

  useEffect(() => {
    // Standard MutationObserver to enforce our custom profile image on DOM updates
    if (typeof window === "undefined") return;

    const fixProfileImage = () => {
      const img = document.querySelector(".df-brand-img img") as HTMLImageElement | null;
      if (img && img.getAttribute("src") !== "/Logo/q-logo-night-trans.png") {
        img.src = "/Logo/q-logo-night-trans.png";
      }
    };

    // Run once initially
    fixProfileImage();

    // Observe body for injected DOM additions
    const observer = new MutationObserver(() => {
      fixProfileImage();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}


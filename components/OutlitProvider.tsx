"use client";

import { OutlitProvider as OutlitProviderComponent } from "@outlit/browser/react";

export function OutlitProvider({ children }: { children: React.ReactNode }) {
  return (
    <OutlitProviderComponent publicKey="pk_51sW2wA-YWQQCZ2aFeb3EVG7kzx0Jqbc" trackPageviews>
      {children}
    </OutlitProviderComponent>
  );
}

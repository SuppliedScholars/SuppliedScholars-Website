"use client";

import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export default function ScrollbarWrapper(props: React.ComponentProps<typeof OverlayScrollbarsComponent>) {
    return <OverlayScrollbarsComponent {...props} />;
}

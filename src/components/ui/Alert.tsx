"use client";

import { FC, useState } from "react";
import { AlertTriangle, RefreshCw, Mail, X } from "lucide-react";

interface AlertProps {
  title?: string;
  message: string;
  variant?: "error" | "warning" | "info";
  show?: boolean;
}

const variantStyles = {
  error: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-900",
    iconBg: "bg-red-100",
    icon: "text-red-600",
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-900",
    iconBg: "bg-yellow-100",
    icon: "text-yellow-600",
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-900",
    iconBg: "bg-blue-100",
    icon: "text-blue-600",
  },
};

const Alert: FC<AlertProps> = ({
  title = "",
  message,
  variant = "error",
  show = true,
}) => {
  const [visible, setVisible] = useState(show);
  if (!visible) return null;

  const s = variantStyles[variant];

  const handleRetry = () => {
    try {
      window.location.reload();
    } catch (e) {
      // fallback
      window.location.href = window.location.href;
    }
  };

  //Correo de ejemplo (No funcional)
  const mailto = `mailto:support@example.com?subject=${encodeURIComponent(
    "Error en la app: problema al conectar con la API"
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div role="alert" className={`rounded-md ${s.bg} border ${s.border} px-4 py-3`}>
      <div className="container mx-auto flex items-start gap-4">
        <div className={`p-2 rounded-full ${s.iconBg} flex items-center justify-center`}>
          <AlertTriangle className={`h-5 w-5 ${s.icon}`} />
        </div>
        <div className="flex-1">
          <div className={`flex items-center justify-between gap-4`}>
            <div>
              {title ? <div className={`font-semibold ${s.text}`}>{title}</div> : null}
              <div className={`mt-1 text-sm ${s.text}`}>{message}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRetry}
                className="inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-1 text-xs font-medium shadow-sm hover:opacity-90"
                aria-label="Reintentar"
                title="Reintentar"
              >
                <RefreshCw className="h-4 w-4" /> Reintentar
              </button>
              <a
                href={mailto}
                className="inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-1 text-xs font-medium shadow-sm hover:opacity-90"
                title="Reportar problema"
              >
                <Mail className="h-4 w-4" /> Reportar
              </a>
              <button
                onClick={() => setVisible(false)}
                className="p-1 rounded-md hover:bg-white/10"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;

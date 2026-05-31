"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import canvasConfetti, {
  GlobalOptions as ConfettiGlobalOptions,
  Options as ConfettiOptions,
} from "canvas-confetti";

// Safe dynamic module resolution wrapper for canvas-confetti (handles ESM, CJS, and Next.js SSR/Turbopack anomalies)
const getConfetti = (): any => {
  if (typeof canvasConfetti === "function") {
    return canvasConfetti;
  }
  if (canvasConfetti && typeof (canvasConfetti as any).default === "function") {
    return (canvasConfetti as any).default;
  }
  // Fallback to global window namespace if available
  if (typeof window !== "undefined" && (window as any).confetti) {
    return (window as any).confetti;
  }
  return canvasConfetti;
};

const safeConfetti = (...args: any[]) => {
  const f = getConfetti();
  if (typeof f === "function") {
    return f(...args);
  }
  console.warn("canvas-confetti is not loaded or is not a function.");
};

safeConfetti.create = (...args: any[]) => {
  const f = getConfetti();
  if (f && typeof f.create === "function") {
    return f.create(...args);
  }
  console.warn("canvas-confetti.create is not available.");
  return () => {};
};

type ConfettiInstance = ReturnType<typeof safeConfetti.create>;

export interface ConfettiProps extends React.ComponentPropsWithoutRef<"canvas"> {
  options?: ConfettiOptions;
  globalOptions?: ConfettiGlobalOptions;
  manualstart?: boolean;
}

export interface ConfettiRef {
  fire: (options?: ConfettiOptions) => void;
}

export const Confetti = forwardRef<ConfettiRef, ConfettiProps>((props, ref) => {
  const { options, globalOptions, manualstart, ...canvasProps } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const localConfettiRef = useRef<ConfettiInstance | null>(null);

  useImperativeHandle(ref, () => ({
    fire(customOptions?: ConfettiOptions) {
      if (localConfettiRef.current) {
        localConfettiRef.current({
          ...options,
          ...customOptions,
        });
      } else {
        safeConfetti({
          ...options,
          ...customOptions,
        });
      }
    },
  }));

  React.useEffect(() => {
    if (canvasRef.current) {
      localConfettiRef.current = safeConfetti.create(canvasRef.current, {
        ...globalOptions,
        resize: true,
      });

      if (!manualstart) {
        localConfettiRef.current({
          ...options,
        });
      }
    }

    return () => {
      if (localConfettiRef.current) {
        localConfettiRef.current.reset();
      }
    };
  }, [options, globalOptions, manualstart]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-[100]"
      {...canvasProps}
    />
  );
});

Confetti.displayName = "Confetti";

interface ConfettiButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  options?: ConfettiOptions;
  children?: React.ReactNode;
  once?: boolean;
}

export const ConfettiButton = forwardRef<HTMLButtonElement, ConfettiButtonProps>(
  (props, ref) => {
    const { options, children, once, ...buttonProps } = props;
    const firedRef = useRef(false);

    const handleClick = (e: any) => {
      console.log("ConfettiButton: Clicked!", { once, alreadyFired: firedRef.current });
      
      if (buttonProps.onClick) {
        buttonProps.onClick(e);
      }
      
      if (once && firedRef.current) {
        console.log("ConfettiButton: Blocked because once={true} and already fired.");
        return;
      }
      
      firedRef.current = true;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      const origin = options?.origin || {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      };

      try {
        console.log("ConfettiButton: Spawning safeConfetti with options:", {
          ...options,
          origin,
        });
        safeConfetti({
          ...options,
          origin,
        });
      } catch (err) {
        console.error("ConfettiButton: Error spawning safeConfetti:", err);
      }
    };

    return (
      <button ref={ref} onClick={handleClick} {...buttonProps}>
        {children}
      </button>
    );
  }
);

ConfettiButton.displayName = "ConfettiButton";

"use client";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { EyeWatermark } from "@/components/ui/eye-watermark";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stroke py-20 md:py-28">
      <EyeWatermark />
      <Container className="relative z-10 grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue"
          >
            Enterprise Technology Systems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-balance text-4xl font-semibold leading-tight text-text md:text-6xl"
          >
            Total Vision. Complete Control.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg"
          >
            We build enterprise-grade systems for operations, finance, customer management, and intelligent automation
            - tailored to your workflow, designed for scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <ButtonLink href="/contact" variant="primary">
              Request a Demo
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Services
            </ButtonLink>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="surface p-6"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-silver">Brand One-liner</p>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            ODIN delivers structured business systems enhanced with intelligent automation - giving organizations total
            visibility and complete control.
          </p>
        </motion.aside>
      </Container>
    </section>
  );
}

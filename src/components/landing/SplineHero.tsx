'use client'
import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useTranslation } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function SplineHero() {
  const { t } = useTranslation();
  
  return (
    <Card className="w-full h-[400px] md:h-[500px] bg-secondary relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#00D4AA" />
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {t("hero.headline1")}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            {t("hero.headline2")}
          </h2>
          <p className="text-white/70 max-w-lg text-sm md:text-base mb-4">
            {t("hero.sub")}
          </p>
          <div className="flex gap-3">
            <Button 
              size="sm" 
              className="gradient-teal border-0 text-primary-foreground font-semibold"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.cta")}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => document.getElementById('platforms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.demo")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Right content - 3D Robot */}
        <div className="flex-1 relative pointer-events-none">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
            className="w-full h-full pointer-events-auto" 
          />
        </div>
      </div>
    </Card>
  )
}

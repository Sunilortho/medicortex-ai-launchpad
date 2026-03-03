'use client'
import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { useTranslation } from "@/contexts/LanguageContext";

export default function SplineHero() {
  const { t } = useTranslation();
  
  return (
    <Card className="w-full h-[600px] bg-secondary relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#00D4AA" />
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("hero.headline1")}
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            {t("hero.headline2")}
          </h2>
          <p className="text-white/70 max-w-lg text-lg">
            {t("hero.sub")}
          </p>
        </div>
        {/* Right content - 3D Robot */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" 
            className="w-full h-full" 
          />
        </div>
      </div>
    </Card>
  )
}

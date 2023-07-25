import LandingContent from "@/ad/components/LandingContent"
import LandingHero from "@/ad/components/LandingHero"
import LandingNavbar from "@/ad/components/LandingNavbar"

const LandingPage = () => {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default LandingPage
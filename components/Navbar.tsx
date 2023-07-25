import { UserButton } from "@clerk/nextjs"

import { getApiLimitCount } from "@/lib/api-limit";
import MobileSidebar from "@/components/MobileSidebar"
import { checkSubscription } from "@/lib/subscriptions";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
   );
}

export default Navbar
import { Button } from "@/components/ui/button"

/* Export Component */
export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-1">
                <img src="/img/branding.svg" alt="eversi.de" className="w-128 mb-0" />
                <h3 className="text-xl font-bold text-center mt-[-30]">
                    This website is under construction, please join our community on Discord.
                </h3>
                <div className="inline-block">
                    <Button size="sm" className="m-2">
                        <a href="https://discord.com/invite/C8dF6zkYff"> Discord </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

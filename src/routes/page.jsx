import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function RootPage() {
    return (
        <main className="bg-black h-screen font-sora flex flex-col items-center justify-end px-2 py-4">
            <img src="/6.png" alt="Splash Image" className="max-w-sm mx-auto w-full object-cover" />
            <section className="max-w-sm mx-auto relative bottom-12">
                <h1 className="mb-2 text-4xl font-semibold leading-snug text-center text-primary-foreground">
                    Fall in Love with Coffee in Blissful Delight!
                </h1>
                <p className="mb-8 text-muted-foreground text-center">
                    Welcome to our cozy coffee corner, where every cup is a delightful for you.
                </p>
                <Button className={"w-full rounded-lg min-h-14 text-lg"} size={"lg"} asChild>
                    <Link to="/home">Get Started</Link>
                </Button>
            </section>
        </main>
    );
}

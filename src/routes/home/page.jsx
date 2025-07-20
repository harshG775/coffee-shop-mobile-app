import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart } from "lucide-react";
import { Compass } from "lucide-react";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";
import { Settings2 } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Settings } from "lucide-react";
import { Home } from "lucide-react";
import React from "react";

export default function HomePage() {
    return (
        <>
            <nav className="fixed bottom-0 left-0 right-0 bg-background w-full p-4">
                <ul className="flex justify-between max-w-sm mx-auto text-muted-foreground">
                    <li className="flex flex-col gap-2 justify-center items-center text-primary">
                        <Home className="size-7" />
                        <span className="text-xs font-bold">Home</span>
                    </li>
                    <li className="flex flex-col gap-2 justify-center items-center">
                        <Compass className="size-7" />
                        <span className="text-xs font-bold">Explore</span>
                    </li>
                    <li className="flex flex-col gap-2 justify-center items-center">
                        <Heart className="size-7" />
                        <span className="text-xs font-bold">Favorites</span>
                    </li>
                    <li className="flex flex-col gap-2 justify-center items-center">
                        <Settings className="size-7" />
                        <span className="text-xs font-bold">Settings</span>
                    </li>
                </ul>
            </nav>
            <main className="font-sora pb-24">
                <section className="p-4 bg-linear-to-tr from-foreground/90 to-foreground text-background">
                    <div className="mb-4">
                        <label htmlFor="Location" className="text-muted/80 text-xs">
                            Location
                        </label>
                        <div className="text-lg flex items-center gap-2">
                            New Delhi, India
                            <ChevronDown className="size-7" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                            <Input type="text" placeholder="Search Coffee" className={"h-12 pl-12 w-full dark"} />
                            <Search className="size-7 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                        <Button size={"icon"} className={"h-12 w-12"}>
                            <Settings2 className="size-7" />
                            <span className="sr-only">Setting</span>
                        </Button>
                    </div>
                    <div className="bg-primary p-4 px-6 rounded-l-lg space-y-2 relative top-14 left-4">
                        <div>
                            <div className="bg-destructive px-2 py-1 rounded-sm inline-block">PROMO</div>
                        </div>
                        <h2 className="font-medium text-2xl max-w-2/3">Discover the best coffee for you</h2>
                    </div>
                </section>
                <section className="mt-12">
                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className={"w-full rounded-none bg-background h-12"}>
                            <TabsTrigger
                                value="all"
                                className={
                                    "rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground"
                                }
                            >
                                All Coffee
                            </TabsTrigger>
                            <TabsTrigger
                                value="machiato"
                                className={
                                    "rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground"
                                }
                            >
                                Machiato
                            </TabsTrigger>
                            <TabsTrigger
                                value="latte"
                                className={
                                    "rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground"
                                }
                            >
                                Latte
                            </TabsTrigger>
                            <TabsTrigger
                                value="americano"
                                className={
                                    "rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground"
                                }
                            >
                                Americano
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value="all"
                            className={"grid gap-y-8 gap-x-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-4"}
                        >
                            {[
                                {
                                    name: "Espresso",
                                    description: "Rich and bold",
                                    price: 3.5,
                                    image: "https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?q=80&w=855&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                },
                                {
                                    name: "Latte",
                                    description: "Mild and milky",
                                    price: 4.2,
                                    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80",
                                },
                                {
                                    name: "Mocha",
                                    description: "Chocolate infused",
                                    price: 4.5,
                                    image: "",
                                },
                                {
                                    name: "Cappuccino",
                                    description: "Frothy and creamy",
                                    price: 4.0,
                                    image: "https://images.unsplash.com/photo-1545249390-b2903f7d0d1f?auto=format&fit=crop&w=400&q=80",
                                },
                            ].map((item, idx) => (
                                <CoffeeCard key={idx} item={item} />
                            ))}
                        </TabsContent>
                    </Tabs>
                </section>
            </main>
        </>
    );
}

const CoffeeCard = ({ item }) => {
    return (
        <div className="rounded-lg flex flex-col bg-background shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <img src={item.image} alt={item.name} className="aspect-[16/12] w-full object-cover" />
            <div className="p-4 space-y-1">
                <h3 className="font-semibold text-xl">{item.name}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                <div className="flex items-center justify-between pt-2">
                    <div className="font-bold text-lg">${item.price.toFixed(2)}</div>
                    <Button size="icon" variant="secondary">
                        <Plus className="size-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

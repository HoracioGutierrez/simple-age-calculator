import DarkModeTogglerButton from "./DarkModeTogglerButton";

export default function Header() {
  return (
    <header className="container flex items-center justify-between py-2  md:py-4 lg:py-6">
        <h1 className="font-extrabold">Age Calculator</h1>
        <nav>
            <DarkModeTogglerButton/>
        </nav>
    </header>
  )
}
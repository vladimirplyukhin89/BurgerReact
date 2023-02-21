import { Header } from "./components/Header"
import { Navigation } from "./components/Navigation"
import { Catalog } from "./components/Section"

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
    </>
  )
}

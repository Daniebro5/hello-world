import React from "react"
import Tarjeta from "../components/card"
import CardGrid from "../components/cardGrid"
import Quote from "../components/quote"
import homePageData from "../content/data/homePage.json"

export default function Home() {
  
  return (
    <div>
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />

      <Quote
        quote="Los lunes son feos"
        backgroundColor="bg-purple-500"
      />

      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />

      <Quote
        quote="Los lunes son feos"
        backgroundColor="bg-red-500"
      />
      
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />
      <Quote
        quote="Los lunes son feos"
        backgroundColor="bg-blue-500"
      />
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />
      <Quote
        quote="Los lunes son feos"
        backgroundColor="bg-indigo-500"
      />
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />
      <Quote
        quote="Los lunes son feos"
        backgroundColor="bg-orange-500"
      />
      <CardGrid>
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />
      <Tarjeta
        titulo={homePageData.nombre.primerNombre}
        canal={homePageData.nombre.apellido}
        numeroVisualizaciones="271K views"
        hora="2 hours ago"
      />
      </CardGrid>

    </div>
  )
}
